import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import Frame from "@/components/layout/frame";
import { Grid } from "@chakra-ui/react";
import { useState } from "react";
import ParticipantProfileCard from "../components/cards/ParticipantProfileCard";
import ParticipantsList from "../components/events/ParticipantsList";

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
    <Frame>
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
    </Frame>
  );
}

export default Participants;
