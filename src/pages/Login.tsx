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
import Form from "../components/layout/Form/Form";
import logo from "../assets/images/capivara.webp";
import { Link } from "react-router-dom";

function Login() {
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
        <Form action="/login" method="post" btnActionLabel="Login">
          <Field.Root required>
            <Input
              placeholder="Nickname ou E-mail"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              required
            />
          </Field.Root>
          <Field.Root required>
            <Input
              placeholder="Senha"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              required
            />
          </Field.Root>
        </Form>
      </VStack>

      <Separator w={"100%"} />

      <Text marginTop={"10px"} display="flex" gap={1}>
        Não tem uma conta?{" "}
        <Link to="/signup" style={{ color: "orange", fontWeight: "bold" }}>
          <Box>Crie uma</Box>
        </Link>
      </Text>
      <Link to="/recovery" style={{ color: "orange", fontWeight: "bold" }}>
        Esqueci minha senha
      </Link>
    </AbsoluteCenter>
  );
}

export default Login;
