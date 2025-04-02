import { Flex, VStack, Text, HStack, Avatar } from "@chakra-ui/react";
import { Star } from "@phosphor-icons/react";

interface EventRatingProps {
  username: string;
  rating: number;
  comment: string;
  imgSrc: string;
}

function EventRating({ username, rating, comment, imgSrc }: EventRatingProps) {
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
          {[...Array(rating)].map((_, i) => (
            <Star key={i} weight="fill" color="orange" size={20} />
          ))}
          {[...Array(5 - rating)].map((_, i) => (
            <Star key={i + rating} weight="regular" color="gray" size={20} />
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
