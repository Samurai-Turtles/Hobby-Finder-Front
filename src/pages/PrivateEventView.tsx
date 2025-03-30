import defaultImage from "@/assets/images/default-event-image.webp";
import ActionButton from "@/components/buttons/action-button";
import NavigationButton from "@/components/buttons/navigation-button";
import Frame from "@/components/layout/frame";
import { Box, Field, Flex, Image, Text, Textarea } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";

function PrivateEventView() {
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
      <Flex direction="column" alignItems="center" gap={4} mt={5}>
        <Box>
          <Image
            maxH="200px"
            src={eventData.image}
            alt="Imagem do evento"
            borderRadius="md"
            objectFit="cover"
            w="100%"
            h="auto"
          />
        </Box>

        <Flex direction="column" md={{ flexDirection: "row" }} w="100%" gap={4}>
          <Field.Root
            backgroundColor="#f4f4f4"
            borderRadius="md"
            p={2}
            w="100%"
            flex={2}
          >
            <Text fontSize="lg" fontWeight="bold">
              {eventData.name}
            </Text>
          </Field.Root>
          <Field.Root
            backgroundColor="#f4f4f4"
            borderRadius="md"
            p={2}
            w="100%"
            flex={1}
          >
            <Text fontSize="md" color="gray.600">
              Data: {new Date(eventData.date).toLocaleDateString("pt-BR")}
            </Text>
          </Field.Root>
        </Flex>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="md" color="gray.600">
            {eventData.location}
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

        <Flex
          direction="column"
          gap={2}
          md={{ flexDirection: "row", justifyContent: "center" }}
        >
          <ActionButton
            type="submit"
            label="Solicitar Participação"
            action={() => null /* TODO: add solicitation request */}
          />
        </Flex>
      </Flex>
    </Frame>
  );
}

export default PrivateEventView;
