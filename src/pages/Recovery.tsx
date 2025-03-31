import {
  AbsoluteCenter,
  Box,
  Field,
  Image,
  Input,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "@/api/axiosConfig";
import logo from "../assets/images/capivara.webp";
import Form from "../components/layout/form";

function Recovery() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRecovery = async (e: any) => {
    e.preventDefault();
    try {
      await api.post("/user/recover-password", { email });
      alert("Verifique seu e-mail para o token de acesso provisório.");
      navigate("/login");
    } catch (error) {
      console.error("Erro na recuperação de senha:", error);
      alert("Erro ao recuperar a senha. Tente novamente.");
    }
  };

  return (
    <AbsoluteCenter
      w={"90%"}
      maxW={"400px"}
      display={"flex"}
      flexDirection={"column"}
      bg={"white"}
      color={"black"}
      padding={"32px 12px"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        marginBottom={"32px"}
      >
        <Image src={logo} w={"80px"} />
        <Text fontFamily={"Pacifico"} fontSize={"24px"}>
          HobbyFinder
        </Text>
      </Box>
      <span>
        Insira o e-mail cadastrado em sua conta para receber um Token de acesso
        provisório.
        <br /> <br />
        Você poderá utilizar o Token como uma senha temporária para fazer Login
        em seu usuário.
      </span>
      <VStack w={"100%"} marginBlock={"16px"}>
        <Form
          action="/recovery"
          method="post"
          btnActionLabel="Recuperar Senha"
          handleSubmit={handleRecovery}
        >
          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field.Root>
        </Form>
        <Separator w={"100%"} />
        <Text display="flex" gap={1}>
          Lembrou da senha?
          <Link to="/login" style={{ color: "orange", fontWeight: "bold" }}>
            Faça login
          </Link>
        </Text>
      </VStack>
    </AbsoluteCenter>
  );
}

export default Recovery;
