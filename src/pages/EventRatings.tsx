import NavigationButton from "@/components/buttons/navigation-button";
import EventRating from "@/components/events/EventRating";
import Frame from "@/components/layout/frame";
import { VStack } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import api from "@/api/axiosConfig";
import { useParams } from "react-router-dom";

interface UserDTO {
  username: string;
}

interface Rating {
  star: number;
  comment: string;
  userDTO: UserDTO;
}

function EventRatings() {
  const { eventId } = useParams<{ eventId: string }>();
  const [ratings, setRatings] = useState<Rating[]>([]);

  useEffect(() => {
    const fetchRatings = async () => {
      try {
        const response = await api.get<Rating[]>(
          `/event/${eventId}/evaluation`,
        );
        console.log(response);
        setRatings(response.data);
      } catch (error) {
        console.error("Erro ao buscar avaliações:", error);
      }
    };

    fetchRatings();
  }, [eventId]);

  return (
    <Frame>
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <VStack alignItems="left" marginY="5" gap={5}>
        {ratings.map((rating, index) => (
          <EventRating
            key={index}
            username={rating.userDTO.username}
            rating={rating.star}
            comment={rating.comment}
            imgSrc={"#"}
          />
        ))}
      </VStack>
    </Frame>
  );
}

export default EventRatings;
