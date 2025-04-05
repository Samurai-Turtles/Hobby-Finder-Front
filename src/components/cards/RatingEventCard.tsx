import {
  Box,
  Card,
  CloseButton,
  Flex,
  IconButton,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { Star } from "@phosphor-icons/react";
import { useState } from "react";
import ActionButton from "../buttons/action-button";
import { eventService } from "@/service/eventService";

interface RatingEventCardProps {
  eventId: string;
  display: "fixed" | "none";
  closeClick: () => void;
}

function RatingEventCard({
  eventId,
  display,
  closeClick,
}: RatingEventCardProps) {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");

  const handleEvaluate = async (e: any) => {
    e.preventDefault();
    console.log(stars);
    console.log(comment);
    eventService.avaliarEvento(eventId, { stars, comment });
    closeClick();
    window.location.reload();
  };

  return (
    <Box
      display={display}
      position="fixed"
      inset={0}
      zIndex="1000"
      backgroundColor="rgba(0, 0, 0, 0.1)"
    >
      <Flex justifyContent="center" alignItems="center" minH="full" minW="full">
        <Card.Root minW="300px" maxW="350px">
          <CloseButton position="absolute" right={0} onClick={closeClick} />
          <Card.Body paddingBottom="1.2rem">
            <Flex direction="column" alignItems="center" gap={3}>
              <Card.Title
                width="fit-content"
                textAlign="center"
                borderBottom="2px solid"
                borderColor="customLightGrey"
                color="customOrange"
                fontSize="xl"
              >
                Avaliação
              </Card.Title>
              <Text color="customDarkGrey">Qual nota você dá ao evento?</Text>
              <Flex gap={0}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <IconButton
                    key={star}
                    variant="ghost"
                    color={star <= stars ? "customOrange" : "customDarkGrey"}
                    onClick={() => setStars(star)}
                    aria-label={`Nota ${star}`}
                    size="md"
                  >
                    <Star weight={star <= stars ? "fill" : "bold"} size={32} />
                  </IconButton>
                ))}
              </Flex>
              <Textarea
                name="comment"
                placeholder="Deixe um comentário"
                fontSize="0."
                value={comment}
                variant="subtle"
                outline="none"
                rows={4}
                resize="none"
                onChange={(e) => setComment(e.target.value)}
              />
            </Flex>
          </Card.Body>
          <Card.Footer flexDirection="column">
            <ActionButton label="Registrar Avaliação" action={handleEvaluate} />
          </Card.Footer>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default RatingEventCard;
