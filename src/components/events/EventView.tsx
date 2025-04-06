import NavigationButton from "../buttons/navigation-button";
import { CaretLeft, MapPin } from "@phosphor-icons/react";
import {
  Box,
  Container,
  Field,
  Flex,
  Text,
  Image,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import { formatarData } from "@/utils/formatData";
import EventViewButtonAsCreator from "../buttons/event-view-button/as-creator";
import EventViewButtonAsAdm from "../buttons/event-view-button/as-adm";
import Tag from "../buttons/tag/tag";
import EventViewButtonAsParticipant from "../buttons/event-view-button/as-participant";
import { useEffect, useState } from "react";
import { eventService } from "@/service/eventService";
import EventLocationMapCard from "../cards/EventLocationMapCard";
import ActionButton from "../buttons/action-button";
import { Link } from "react-router-dom";

export interface EventData {
  image: string;
  Name: string;
  begin: string;
  end: string;
  local: string;
  lat: number;
  lon: number;
  description: string;
  privacity: "PRIVATE" | "PUBLIC";
  tags: string;
}

type UserStatus =
  | "CRIADOR"
  | "ADM"
  | "NAO_PARTICIPANTE"
  | "PARTICIPANTE_CONFIRMADO"
  | "SOLICITANTE"
  | "PARTICIPANTE_NAO_CONFIRMADO";

interface UserSituation {
  userStatus: UserStatus;
  idParticipation: string;
  idParticipationRequest: string;
}

interface EventViewProps {
  eventId: string;
  eventData: EventData;
}
export function EventView({ eventId, eventData }: EventViewProps) {
  const [userSituation, setUserSituation] = useState<UserSituation>({
    userStatus: "NAO_PARTICIPANTE",
    idParticipation: "",
    idParticipationRequest: "",
  });
  const [localizationCardDisplay, setLocalizationCardDisplay] = useState<
    "block" | "none"
  >("none");
  const agora = new Date();
  const fim = new Date(eventData.end);

  const toggleLocalizationCard = () => {
    setLocalizationCardDisplay((e) => (e.includes("block") ? "none" : "block"));
  };

  useEffect(() => {
    const loadUserSituation = async () => {
      try {
        const response = await eventService.getUserSituation(eventId);
        if (response) {
          setUserSituation({
            userStatus: response.data.situation,
            idParticipation: response.data.idParticipation,
            idParticipationRequest: response.data.idParticipationRequest,
          });
        }
      } catch (error) {
        console.error("Erro ao carregar situação do usuário no evento", error);
      }
    };
    loadUserSituation();
  }, []);

  return (
    <Container maxWidth="90vw" py={5}>
      <EventLocationMapCard
        display={localizationCardDisplay}
        onClick={toggleLocalizationCard}
        lat={eventData.lat}
        lon={eventData.lon}
      />
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <Flex direction="column" alignItems="center" gap={3} mt={5}>
        <Flex gap={5} direction="column">
          <Box>
            <Image
              src={eventData.image}
              alt="Imagem do evento"
              borderRadius="md"
              objectFit="cover"
              w="100%"
              h="auto"
              maxH="40vh"
            />
          </Box>
          <Flex
            h="full"
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
            wrap="wrap"
          >
            {agora < fim
              ? (userSituation.userStatus.includes("CRIADOR") ||
                  userSituation.userStatus.includes("ADM")) && (
                  <>
                    <Link to={`participants`}>
                      <ActionButton
                        w="10rem"
                        label="Participantes"
                        buttonStyle="outline"
                        action={() => {}}
                      />
                    </Link>
                    <Link to={`solicitations`}>
                      <ActionButton
                        w="10rem"
                        label="Solicitações"
                        buttonStyle="outline"
                        action={() => {}}
                      />
                    </Link>
                  </>
                )
              : userSituation.userStatus.includes("CRIADOR") && (
                  <Link to={`ratings`}>
                    <ActionButton
                      w="10rem"
                      label="Avaliações"
                      buttonStyle="outline"
                      action={() => {}}
                    />
                  </Link>
                )}
          </Flex>
        </Flex>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Text fontSize="lg" fontWeight="bold">
            {eventData.Name}
          </Text>
        </Field.Root>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" w="100%">
          <Flex width="full" justifyContent="space-between" alignItems="center">
            <Text fontSize="md" color="gray.600" p={2}>
              {eventData.local}
            </Text>
            <IconButton
              aria-label="Search database"
              bg="gray.300"
              onClick={toggleLocalizationCard}
            >
              <MapPin size={25} />
            </IconButton>
          </Flex>
        </Field.Root>

        <Flex w="full" gap={3} direction="column" md={{ flexDirection: "row" }}>
          <Field.Root
            backgroundColor="#f4f4f4"
            borderRadius="md"
            p={2}
            w="100%"
          >
            <Text fontSize="md" color="gray.600">
              Data de Início: {formatarData(eventData.begin)}
            </Text>
          </Field.Root>

          <Field.Root
            backgroundColor="#f4f4f4"
            borderRadius="md"
            p={2}
            w="100%"
          >
            <Text fontSize="md" color="gray.600">
              Data de Fim: {formatarData(eventData.end)}
            </Text>
          </Field.Root>
        </Flex>

        <Field.Root backgroundColor="#f4f4f4" borderRadius="md" p={2} w="100%">
          <Textarea
            readOnly
            value={eventData.description}
            p={0}
            resize="none"
            backgroundColor="#f4f4f4"
            border="none"
            fontSize="md"
            color="gray.600"
            rows={4}
            _focus={{ boxShadow: "none" }}
          />
        </Field.Root>

        <Field.Root borderRadius="md" p={2} w="100%">
          <Tag label={eventData.tags} style={"solid"} disabled />
        </Field.Root>

        {userSituation.userStatus.includes("CRIADOR") ? (
          <EventViewButtonAsCreator
            eventId={eventId}
            begin={eventData.begin}
            end={eventData.end}
          />
        ) : userSituation.userStatus.includes("ADM") ? (
          <EventViewButtonAsAdm eventId={eventId} begin={eventData.begin} />
        ) : (
          <EventViewButtonAsParticipant
            eventId={eventId}
            begin={eventData.begin}
            end={eventData.end}
            privacity={eventData.privacity}
            userStatus={userSituation.userStatus}
          />
        )}
      </Flex>
    </Container>
  );
}
