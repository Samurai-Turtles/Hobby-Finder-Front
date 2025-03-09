import { Flex } from "@chakra-ui/react";
import ParticipantItem from "./ParticipantItem";

interface ParticipantsListProps {
  participantsList: {
    srcImg: string;
    nome: string;
  }[];
}

function ParticipantsList({ participantsList }: ParticipantsListProps) {
  return (
    <Flex
      height="fit-content"
      minW="full"
      direction="column"
      gap={2}
      md={{
        border: "1px solid",
        borderColor: "customLightGrey",
        rounded: "xl",
        gap: 0,
        overflow: "hidden",
        "& > *": {
          borderBottom: "1px solid",
          borderColor: "customLightGrey",
        },
      }}
    >
      {participantsList.map(
        (p: { srcImg: string; nome: string }, index: number) => {
          return (
            <ParticipantItem key={index} srcImg={p.srcImg} nome={p.nome} />
          );
        },
      )}
    </Flex>
  );
}

export default ParticipantsList;
