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

function RatingEventCard() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <Box
      // display={display}
      position="fixed"
      inset={0}
      zIndex="1000"
      backgroundColor="rgba(0, 0, 0, 0.1)"
    >
      <Flex justifyContent="center" alignItems="center" minH="full">
        <Card.Root minW="300px" maxW="350px">
          <CloseButton position="absolute" right={0} />
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
                    color={star <= rating ? "customOrange" : "customDarkGrey"}
                    onClick={() => setRating(star)}
                    aria-label={`Nota ${star}`}
                    size="md"
                  >
                    <Star weight={star <= rating ? "fill" : "bold"} size={32} />
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
                onChange={(e) => setComment(e.target.value)}
              />
            </Flex>
          </Card.Body>
          <Card.Footer flexDirection="column">
            <ActionButton
              label="Registrar Avaliação"
              action={() => {} /* TODO: add register request here */}
            />
          </Card.Footer>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default RatingEventCard;
