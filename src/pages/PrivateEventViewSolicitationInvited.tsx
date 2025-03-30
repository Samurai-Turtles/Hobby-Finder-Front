import defaultImage from "@/assets/images/default-event-image.webp";
import NavigationButton from "@/components/buttons/navigation-button";
import Form from "@/components/layout/form";
import Frame from "@/components/layout/frame";
import { Box, Field, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";

function PrivateEventViewSolicitationInvited() {
  const eventData = {
    image: defaultImage,
    name: "Miniteste de ES",
    location: "CAA 201",
    date: "2025-03-18",
    description:
      "Uma miniteste para avaliar o seu conhecimento em Engenharia de Software. Este evento é destinado a todos os alunos do curso de Engenharia de Software que desejam testar seus conhecimentos em conceitos fundamentais da disciplina. A prova abordará tópicos como requisitos, modelagem UML, testes de software e gestão de projetos. Prepare-se bem e boa sorte!",
    tags: "#prova #teste #conhecimento",
  };

  return (
    <Frame>
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <Flex direction="column" alignItems="center" gap={5} mt={5}>
        <Box>
          <Image
            src={eventData.image}
            alt="Imagem do evento"
            borderRadius="md"
            objectFit="cover"
            w="100%"
            h="auto"
          />
        </Box>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="lg" fontWeight="bold">
            {eventData.name}
          </Text>
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="md" color="gray.600">
            {eventData.location}
          </Text>
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="md" color="gray.600">
            Data: {new Date(eventData.date).toLocaleDateString("pt-BR")}
          </Text>
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Textarea
            readOnly
            value={eventData.description}
            resize="none"
            backgroundColor="#f4f4f4"
            border="none"
            fontSize="md"
            color="gray.600"
            rows={4}
            _focus={{ boxShadow: "none" }}
            aria-label="Descrição do evento"
          />
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="md" color="blue.500">
            {eventData.tags}
          </Text>
        </Field.Root>

        <Form
          action="/cancelarSolicitacaoPrivateEvent"
          method="post"
          btnActionLabel="Cancelar Solicitação"
          children={undefined}
          buttonBgColor="red"
        />
      </Flex>
    </Frame>
  );
}

export default PrivateEventViewSolicitationInvited;
