import { Avatar, AvatarGroup, Box } from "@chakra-ui/react";
import { Participant } from "@/pages/Participants";

interface ParticipantItemProps {
  participant: Participant;
  onClick: (newInfo: Participant) => void;
}

function ParticipantItem({ participant, onClick }: ParticipantItemProps) {
  return (
    <Box
      width="full"
      display="flex"
      alignItems="center"
      gap={2}
      cursor="pointer"
      md={{ p: 1 }}
      onClick={() => onClick(participant)}
    >
      <AvatarGroup>
        <Avatar.Root size="xl">
          <Avatar.Fallback name={participant.nickname} />
          <Avatar.Image src={participant.srcImgProfile} />
        </Avatar.Root>
      </AvatarGroup>
      {participant.nickname}
    </Box>
  );
}

export default ParticipantItem;
