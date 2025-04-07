import { Flex } from "@chakra-ui/react";
import ParticipantItem from "./ParticipantItem";
import { Participant } from "@/pages/Participants";

interface ParticipantsListProps {
  participantsList: Participant[];
  onClickBtn: (newInfo: Participant) => void;
}

function ParticipantsList({
  participantsList,
  onClickBtn,
}: ParticipantsListProps) {
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
      {participantsList.map((p: Participant, index: number) => {
        return (
          <ParticipantItem key={index} participant={p} onClick={onClickBtn} />
        );
      })}
    </Flex>
  );
}

export default ParticipantsList;
