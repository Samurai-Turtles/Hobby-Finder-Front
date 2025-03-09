import { Avatar, AvatarGroup, Box } from "@chakra-ui/react";

interface ParticipantItemProps {
  srcImg: string;
  nome: string;
}

function ParticipantItem({ srcImg, nome }: ParticipantItemProps) {
  return (
    <Box
      width="full"
      display="flex"
      alignItems="center"
      gap={2}
      cursor="pointer"
      md={{ p: 1 }}
    >
      <AvatarGroup>
        <Avatar.Root size="xl">
          <Avatar.Fallback name={nome} />
          <Avatar.Image src={srcImg} />
        </Avatar.Root>
      </AvatarGroup>
      {nome}
    </Box>
  );
}

export default ParticipantItem;
