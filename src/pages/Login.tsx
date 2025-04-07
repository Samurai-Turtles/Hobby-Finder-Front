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
import Form from "../components/layout/form";
import logo from "../assets/images/capivara.webp";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "@/api/axiosConfig";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", {
        login,
        password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        throw new Error("Token não encontrado na resposta");
      }
    } catch (error) {
      console.log(error);
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
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Image src={logo} w={"200px"} />
        <Text fontFamily={"Pacifico"} fontSize={"24px"}>
          HobbyFinder
        </Text>
      </Box>
      <VStack w={"100%"} marginBlock={"16px"}>
        <Form
          action="/login"
          method="post"
          btnActionLabel="Login"
          handleSubmit={handleLogin}
        >
          <Field.Root required>
            <Input
              placeholder="Nickname ou E-mail"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </Field.Root>
          <Field.Root required>
            <Input
              type="password"
              placeholder="Senha"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field.Root>
        </Form>
      </VStack>

      <Separator w={"100%"} />

      <Text marginTop={"10px"} display="flex" gap={1}>
        Não tem uma conta?{" "}
        <Link to="/signup" style={{ color: "orange", fontWeight: "bold" }}>
          Crie uma
        </Link>
      </Text>
      <Link to="/recovery" style={{ color: "orange", fontWeight: "bold" }}>
        Esqueci minha senha
      </Link>
    </AbsoluteCenter>
  );
}

export default Login;
