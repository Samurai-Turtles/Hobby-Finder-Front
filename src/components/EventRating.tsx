import {
  Flex,
  VStack,
  Text,
  HStack,
  Icon,
  Avatar,
  AvatarGroup,
} from "@chakra-ui/react";
import { Star } from "lucide-react";

interface EventeRatingProps {
  username: string;
  rating: number;
  comment: string;
  imgSrc: string;
}

function EventRating({ username, rating, comment, imgSrc }: EventeRatingProps) {
  return (
    <Flex gap={3} align="start">
      {/* Foto de perfil */}
      <Avatar.Root size="xl">
        <Avatar.Fallback />
        <Avatar.Image src={imgSrc} />
      </Avatar.Root>

      {/* Conteúdo da avaliação */}
      <VStack align="start">
        {/* Nome do usuário */}
        <Text fontWeight="bold">{username}</Text>

        {/* Estrelas de avaliação */}
        <HStack>
          {[...Array(5)].map((_, i) => (
            <Icon
              key={i}
              as={Star}
              color={i < rating ? "orange.400" : "gray.300"}
              fill={i < rating ? "orange.400" : "transparent"}
            />
          ))}
        </HStack>

        {/* Comentário */}
        <Text fontSize="sm" color="gray.600">
          {comment}
        </Text>
      </VStack>
    </Flex>
  );
}

export default EventRating;
