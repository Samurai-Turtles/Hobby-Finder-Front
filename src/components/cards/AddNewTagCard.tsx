import { Box, Card, CloseButton, Flex, NativeSelect } from "@chakra-ui/react";
import ActionButton from "../buttons/action-button";
import { useEffect, useState } from "react";

interface AddNewTagCardProps {
  possibleTags: string[];
  display: string;
  action: (newInterest: string) => void;
  closeClick: () => void;
}

function AddNewTagCard({
  possibleTags,
  display,
  action,
  closeClick,
}: AddNewTagCardProps) {
  const [selectedOption, setSelectedOption] = useState(possibleTags[0] || "");

  useEffect(() => {
    if (possibleTags.length > 0) {
      setSelectedOption(possibleTags[0]);
    }
  }, [possibleTags]);

  return (
    <Box
      display={display}
      position="fixed"
      inset={0}
      zIndex="1000"
      backgroundColor="rgba(0, 0, 0, 0.1)"
    >
      <Flex justifyContent="center" alignItems="center" minH="full" minW="full">
        <Card.Root w="fit-content" maxW="sm">
          <CloseButton
            size="sm"
            position="absolute"
            right={0}
            onClick={closeClick}
          />
          <Card.Header alignSelf="center">
            <Card.Title maxW="300px" fontWeight="200" textAlign="center">
              Escolha uma tag:
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <NativeSelect.Root size="sm" variant="subtle">
              <NativeSelect.Field
                backgroundColor="customLightGrey"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                id="select-tags"
              >
                {possibleTags.map((e, index) => {
                  return (
                    <option key={index} value={e}>
                      {e}
                    </option>
                  );
                })}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Card.Body>
          <Card.Footer display="flex" flexDirection="column">
            <ActionButton
              label="Adicionar"
              action={() => action(selectedOption)}
            />
          </Card.Footer>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default AddNewTagCard;
