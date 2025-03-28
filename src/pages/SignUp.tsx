import {
  Box,
  Text,
  Image,
  AbsoluteCenter,
  VStack,
  Input,
  Field,
} from "@chakra-ui/react";
import logo from "../assets/images/capivara.webp";
import Form from "../components/layout/Form/Form";
import { Link } from "react-router-dom";

function Signup() {
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
        <Form action="/signup" method="post" btnActionLabel="Criar conta">
          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="Nome completo"
            />
          </Field.Root>

          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="Nickname"
            />
          </Field.Root>

          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="E-mail"
            />
          </Field.Root>

          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="Senha"
            />
          </Field.Root>

          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="Confirmar senha"
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
