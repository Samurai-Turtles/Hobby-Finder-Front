import {
  AbsoluteCenter,
  Box,
  Field,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "@/api/axiosConfig";
import logo from "../assets/images/capivara.webp";
import Form from "../components/layout/form";

function Signup() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    try {
      //const response =
      console.log(email);
      console.log(username);
      console.log(password);
      console.log(nomeCompleto);

      await api.post("/user", {
        email,
        username,
        password,
        nomeCompleto,
      });
      alert("Conta criada com sucesso! Você já pode fazer login.");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao criar conta:", error);
      alert("Erro ao criar conta. Tente novamente.");
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
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <Image src={logo} w={"80px"} />
        <Text fontFamily={"Pacifico"} fontSize={"24px"}>
          HobbyFinder
        </Text>
      </Box>

      <VStack w={"100%"} marginBlock={"16px"}>
        <Form
          action="/signup"
          method="post"
          btnActionLabel="Criar conta"
          handleSubmit={handleSignup}
        >
          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="Nome completo"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              required
            />
          </Field.Root>

          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="Nickname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Field.Root>

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

          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field.Root>

          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="Confirmar senha"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </Field.Root>
        </Form>
      </VStack>

      <Text marginTop={"10px"}>
        Já tem uma conta?{" "}
        <Link to="/login" style={{ color: "orange", fontWeight: "bold" }}>
          Login
        </Link>
      </Text>
    </AbsoluteCenter>
  );
}

export default Signup;
