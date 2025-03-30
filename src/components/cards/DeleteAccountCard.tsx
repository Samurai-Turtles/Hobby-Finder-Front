import { Box, Card, Field, Flex, Stack } from "@chakra-ui/react";
import ActionButton from "../buttons/action-button";
import CustomInput from "../inputs/CustomInput";

interface DeleteAccountCardProps {
  display: string;
  onClick: (e: any) => void;
}

function DeleteAccountCard({ display, onClick }: DeleteAccountCardProps) {
  return (
    <Box
      display={display}
      position="fixed"
      inset={0}
      zIndex="1000"
      backgroundColor="rgba(0, 0, 0, 0.1)"
    >
      <Flex justifyContent="center" alignItems="center" minH="full">
        <Card.Root w="fit-content" maxW="sm">
          <Card.Header alignSelf="center">
            <Card.Title maxW="300px" fontSize="xl" textAlign="center">
              Excluir Conta
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <Stack w="full" alignItems="center">
              <Field.Root maxW="300px" gap={2}>
                <Field.Label fontSize="md">
                  Insira sua senha abaixo para confirmar a exclusão da sua
                  conta:
                </Field.Label>
                <CustomInput
                  name="confirmPassword"
                  placeHolder="Confirme sua senha"
                />
              </Field.Root>
            </Stack>
          </Card.Body>
          <Card.Footer display="flex" flexDirection="column">
            <ActionButton
              label="Confirmar Exclusão"
              action={() => {} /* TODO: add confirm request here */}
            />
            <ActionButton
              label="Cancelar Exclusão"
              buttonStyle="alert"
              action={onClick}
            />
          </Card.Footer>
        </Card.Root>
      </Flex>
    </Box>
  );
}

export default DeleteAccountCard;
