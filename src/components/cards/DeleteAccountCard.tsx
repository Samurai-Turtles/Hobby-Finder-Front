import { Box, Card, Field, Flex, Stack } from "@chakra-ui/react";
import ActionButton from "../buttons/action-button";
import CustomInput from "../inputs/CustomInput";
import { useState } from "react";
import api from "@/api/axiosConfig";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import axios from "axios";

interface DeleteAccountCardProps {
  display: string;
  onClick: (e: any) => void;
}

function DeleteAccountCard({ display, onClick }: DeleteAccountCardProps) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwtDecode(token) as { email: string };
      const { email } = decoded;
      try {
        await api.post("/user/login", {
          login: email,
          password: confirmPassword,
        });
        await api.delete("/user/delete");
        localStorage.removeItem("token");
        navigate("/login");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          if (
            error.response?.status === 401 ||
            error.response?.status === 403
          ) {
            setPasswordInvalid(true);
          } else {
            console.error(
              "Erro de API:",
              error.response?.status,
              error.response?.data,
            );
          }
        } else {
          console.error("Erro inesperado:", error);
        }
      }
    }
  };

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
              <Field.Root maxW="300px" gap={2} invalid={passwordInvalid}>
                <Field.Label fontSize="md">
                  Insira sua senha abaixo para confirmar a exclusão da sua
                  conta:
                </Field.Label>
                <CustomInput
                  name="confirmPassword"
                  placeHolder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Field.ErrorText>Senha incorreta</Field.ErrorText>
              </Field.Root>
            </Stack>
          </Card.Body>
          <Card.Footer display="flex" flexDirection="column">
            <ActionButton label="Confirmar Exclusão" action={handleDelete} />
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
