import { Container, Grid } from "@chakra-ui/react";
import ParticipantsList from "../components/events/ParticipantsList";
import ParticipantProfileCard from "../components/cards/ParticipantProfileCard";
import { useState } from "react";
import FlowButton from "@/components/buttons/FlowButton/FlowButton";

export type Participant = {
  srcImgProfile: string;
  nickname: string;
  avaliacao: number;
  bio: string;
  tipo: string;
};

function Participants() {
  const participants = [
    {
      srcImgProfile: "#",
      nickname: "Nickname 1",
      avaliacao: 4.5,
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, natus! Eligendi veniam dolorem explicabo mollitia hic totam possimus iusto distinctio. Itaque, optio repellat aliquam distinctio esse ut repudiandae vel facilis!",
      tipo: "PARTICIPANTE",
    },
    {
      srcImgProfile: "#",
      nickname: "Nickname 2",
      avaliacao: 1,
      bio: "Essa é a bio do usuário de nickname 2",
      tipo: "ORGANIZADOR",
    },
    {
      srcImgProfile: "#",
      nickname: "Nickname 3",
      avaliacao: 5,
      bio: "Essa é a bio do usuário de nickname 3",
      tipo: "PARTICIPANTE",
    },
  ];
  const metade = Math.ceil(participants.length / 2);
  const left = participants.slice(0, metade);
  const right = participants.slice(metade);

  const [cardDisplay, setCardDisplay] = useState("none");
  const [participantInfo, setParticipantInfo] = useState<Participant>({
    srcImgProfile: "#",
    nickname: "",
    avaliacao: 0,
    bio: "",
    tipo: "PARTICIPANTE",
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

  return (
    <Container maxWidth="90vw" py={5}>
      <FlowButton />
      <ParticipantProfileCard
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
        <ParticipantsList
          participantsList={left}
          onClickBtn={updateParticipantInfo}
        />
        <ParticipantsList
          participantsList={right}
          onClickBtn={updateParticipantInfo}
        />
      </Grid>
    </Container>
  );
}

export default Participants;
