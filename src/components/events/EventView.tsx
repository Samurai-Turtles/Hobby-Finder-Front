import { CaretLeft } from "@phosphor-icons/react";
import {
  Box,
  Container,
  Field,
  Flex,
  Text,
  Image,
  Textarea,
} from "@chakra-ui/react";
import { getEventButtons } from "@/utils/EventButtons";
import Form from "@/components/layout/form";
import NavigationButton from "../buttons/navigation-button";

interface EventData {
  image: string;
  name: string;
  location: string;
  date: string;
  description: string;
  tags: string;
}

interface PrivateEventViewProps {
  userStatus: string;
  eventData: EventData;
}

export function PrivateEventView({
  userStatus,
  eventData,
}: PrivateEventViewProps) {
  const buttons = getEventButtons(userStatus);

  return (
    <Container maxWidth="90vw" py={5}>
      <NavigationButton label="Voltar" Icon={CaretLeft} />

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
          />
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="md" color="blue.500">
            {eventData.tags}
          </Text>
        </Field.Root>

        {/* Renderização dos botões */}
        {buttons.primary && (
          <Form
            action={buttons.primary.action}
            method={buttons.primary.method}
            btnActionLabel={buttons.primary.label}
            buttonBgColor={buttons.primary.color}
            children={undefined}
          />
        )}

        {buttons.secondary && (
          <Form
            action={buttons.secondary.action}
            method={buttons.secondary.method}
            btnActionLabel={buttons.secondary.label}
            buttonBgColor={buttons.secondary.color}
            children={undefined}
          />
        )}
      </Flex>
    </Container>
  );
}
