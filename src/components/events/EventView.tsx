import NavigationButton from "../buttons/navigation-button";
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
import { formatarData } from "@/utils/formatData";
import EventViewButtonAsCreator from "../buttons/event-view-button/as-creator";
import EventViewButtonAsAdm from "../buttons/event-view-button/as-adm";
import Tag from "../buttons/tag/tag";
import EventViewButtonAsParticipant from "../buttons/event-view-button/as-participant";

export interface EventData {
  image: string;
  Name: string;
  begin: string;
  end: string;
  local: string;
  description: string;
  privacity: "PUBLIC" | "PRIVATE";
  tags: string;
}

interface PrivateEventViewProps {
  eventId: string;
  userStatus:
    | "NAO_PARTICIPANTE"
    | "PARTICIPANTE_CONFIRMADO"
    | "SOLICITANTE"
    | "PARTICIPANTE_NAO_CONFIRMADO";
  eventData: EventData;
}

export function PrivateEventView({
  eventId,
  userStatus,
  eventData,
}: PrivateEventViewProps) {
  return (
    <Container maxWidth="90vw" py={5}>
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
            {eventData.Name}
          </Text>
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="md" color="gray.600">
            {eventData.local}
          </Text>
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="md" color="gray.600">
            Data de Início: {formatarData(eventData.begin)}
          </Text>
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="md" color="gray.600">
            Data de Fim: {formatarData(eventData.end)}
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
          <Tag label={eventData.tags} style={"solid"} disabled />
        </Field.Root>

        {userStatus.includes("CRIADOR") ? (
          <EventViewButtonAsCreator
            eventId={eventId}
            begin={eventData.begin}
            end={eventData.end}
          />
        ) : userStatus.includes("ADM") ? (
          <EventViewButtonAsAdm eventId={eventId} begin={eventData.begin} />
        ) : (
          <EventViewButtonAsParticipant
            eventId={eventId}
            begin={eventData.begin}
            end={eventData.end}
            privacity={eventData.privacity}
            userStatus={userStatus}
          />
        )}
      </Flex>
    </Container>
  );
}
