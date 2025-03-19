import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import Header from "@/components/layout/Header/Header";
import Form from "@/components/layout/Form/Form";
import { CaretLeft } from "@phosphor-icons/react";
import {
  AbsoluteCenter,
  Box,
  Field,
  VStack,
  Text,
  Image,
  useBreakpointValue,
  Textarea,
} from "@chakra-ui/react";
//import imageOK from "@/assets/images/capivara.webp";
import defaultImage from "@/assets/images/default-event-image.webp";

function PrivateEventView() {
  const eventData = {
    image: defaultImage,
    //image: imageOK, // URL da imagem OK do evento
    name: "Miniteste de ES",
    location: "CAA 201",
    date: "2025-03-18",
    description:
      "Uma miniteste para avaliar o seu conhecimento em Engenharia de Software. Este evento é destinado a todos os alunos do curso de Engenharia de Software que desejam testar seus conhecimentos em conceitos fundamentais da disciplina. A prova abordará tópicos como requisitos, modelagem UML, testes de software e gestão de projetos. Prepare-se bem e boa sorte!",
    tags: "#prova #teste #conhecimento",
  };

  const iconSize = useBreakpointValue({ base: 24, sm: 32 });

  return (
    <AbsoluteCenter
      w={{ base: "95%", sm: "90%", md: "400px" }}
      maxW={{ base: "100%", sm: "400px" }}
      display="flex"
      flexDirection="column"
      bg="white"
      color="black"
      padding={{ base: "16px", sm: "32px 16px" }}
    >
      <>
        <Header />
        <Box alignSelf="flex-start" padding="12px 0px">
          <FlowButton>
            <CaretLeft size={iconSize} color="white" />
            <Text color="white" fontSize={{ base: "sm", sm: "md" }}>
              Voltar
            </Text>
          </FlowButton>
        </Box>
        <VStack w="100%" marginBlock="0px">
          <Form
            action="/solicitarParticipacaoPrivateEvent"
            method="post"
            btnActionLabel="Solicitar Participação"
          >
            <Field.Root mb={2}>
              <Box w="35%">
                <Image
                  src={eventData.image}
                  alt="Imagem do evento"
                  borderRadius="md"
                  objectFit="cover"
                  w="100%"
                  h="auto"
                  mb="0px"
                />
              </Box>
            </Field.Root>

            <Field.Root
              mb={-1}
              backgroundColor="#f4f4f4"
              borderRadius="md"
              padding="8px"
            >
              <Text fontSize="lg" fontWeight="bold">
                {eventData.name}
              </Text>
            </Field.Root>

            <Field.Root
              mb={-1}
              backgroundColor="#f4f4f4"
              borderRadius="md"
              padding="8px"
            >
              <Text fontSize="md" color="gray.600">
                {eventData.location}
              </Text>
            </Field.Root>

            <Field.Root
              mb={-1}
              backgroundColor="#f4f4f4"
              borderRadius="md"
              padding="8px"
            >
              <Text fontSize="md" color="gray.600">
                Data: {new Date(eventData.date).toLocaleDateString("pt-BR")}
              </Text>
            </Field.Root>

            <Field.Root
              mb={-1}
              backgroundColor="#f4f4f4"
              borderRadius="md"
              padding="8px"
            >
              <Textarea
                readOnly
                value={eventData.description}
                resize="none"
                overflow="auto"
                backgroundColor="#f4f4f4"
                border="none"
                fontSize="md"
                color="gray.600"
                rows={4}
                _focus={{ boxShadow: "none" }}
                aria-label="Descrição do evento"
              />
            </Field.Root>

            <Field.Root mb={-1} backgroundColor="#f4f4f4" borderRadius="md">
              <Text fontSize="md" color="blue.500">
                {eventData.tags}
              </Text>
            </Field.Root>
          </Form>
        </VStack>
      </>
    </AbsoluteCenter>
  );
}

export default PrivateEventView;
