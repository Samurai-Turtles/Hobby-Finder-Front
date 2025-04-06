import NavigationButton from "@/components/buttons/navigation-button";
import Frame from "@/components/layout/frame";
import { Grid, Text } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import ParticipantProfileCard from "../components/cards/ParticipantProfileCard";
import ParticipantsList from "../components/events/ParticipantsList";
import { useParams } from "react-router";
import api from "@/api/axiosConfig";
import { eventService } from "@/service/eventService";

export type Participant = {
  srcImgProfile: string;
  id: string;
  participationId: string;
  participantData: {
    username: string;
    avaliacao: number;
    bio: string;
  };
  participationStatus: string;
  situation: "CRIADOR" | "ADMIN" | "PARTICIPANTE_CONFIRMADO";
};

function Participants() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const metade = Math.ceil(participants.length / 2);
  const left = participants.slice(0, metade);
  const right = participants.slice(metade);
  const { eventId } = useParams();
  const [cardDisplay, setCardDisplay] = useState("none");
  const [participantInfo, setParticipantInfo] = useState<Participant>({
    srcImgProfile: "#",
    id: "",
    participationId: "",
    participantData: {
      username: "",
      avaliacao: 0,
      bio: "",
    },
    participationStatus: "",
    situation: "PARTICIPANTE_CONFIRMADO",
  });

  const showHideCard = () => {
    setCardDisplay((cardDisplay) =>
      cardDisplay === "none" ? "block" : "none",
    );
  };

  const updateParticipantInfo = (newInfo: Participant) => {
    setParticipantInfo({ ...newInfo });
    showHideCard();
  };

  useEffect(() => {
    const getParticipantData = async (id: string) => {
      try {
        const response = await api.get(`/user/${id}`);
        const participantData = {
          username: response.data.username,
          avaliacao: response.data.stars,
          bio: response.data.bio,
        };
        return participantData;
      } catch (error) {
        console.log(`Erro ao buscar dados do participante (ID: ${id})`, error);
      }
    };
    const getParticipantSituation = async (idUser: string) => {
      try {
        const response = await api.get(
          `/users/{idUser}/event/{idEvent}/situation?idUser=${idUser}&idEvent=${eventId}`,
        );
        return response.data.situation;
      } catch (error) {
        console.log(`Erro ao buscar situação do participante (ID: ${idUser})`);
      }
    };
    const loadParticipants = async () => {
      try {
        const response = await api.get(`/event/${eventId}/participation`);
        const participantsList: Participant[] = await Promise.all(
          response.data.content
            .filter((p: any) =>
              p.userParticipation.includes("CONFIRMED_PRESENCE"),
            )
            .map(async (participant: any) => ({
              srcImageProfile: "#",
              id: participant.userId,
              participationId: participant.idParticipation,
              participantData: await getParticipantData(participant.userId),
              participationStatus: "CONFIRMED_PRESENCE",
              situation: await getParticipantSituation(participant.userId),
            })),
        );
        console.log(participantsList);
        setParticipants(
          participantsList.filter((p) => !p.situation.includes("CRIADOR")),
        );
      } catch (error) {
        console.log(`Erro ao buscar participantes do evento`, error);
      }
    };
    loadParticipants();
  }, [eventId]);

  return (
    <Frame>
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <ParticipantProfileCard
        idEvent={eventId || ""}
        display={cardDisplay}
        closeClick={showHideCard}
        participant={participantInfo}
      />
      <Grid
        templateColumns="1fr"
        gap={2}
        mt={5}
        md={{ gridTemplateColumns: "repeat(2, 1fr)" }}
      >
        {participants.length == 0 && (
          <Text>Não há participantes confirmados no evento</Text>
        )}
        {left.length > 0 && (
          <ParticipantsList
            participantsList={left}
            onClickBtn={updateParticipantInfo}
          />
        )}
        {right.length > 0 && (
          <ParticipantsList
            participantsList={right}
            onClickBtn={updateParticipantInfo}
          />
        )}
      </Grid>
    </Frame>
  );
}

export default Participants;
