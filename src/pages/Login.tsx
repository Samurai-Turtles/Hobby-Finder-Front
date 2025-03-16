import {
  AbsoluteCenter,
  Box,
  Field,
  Image,
  Input,
  Link,
  Separator,
  Text,
  VStack,
} from "@chakra-ui/react";
import Form from "../components/form/Form";
import logo from "../assets/images/capivara.webp";

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

      <Text marginTop={"10px"}>
        Não tem uma conta?{" "}
        <Link href="../signup/signup" color={"orange"} fontWeight={"bold"}>
          Crie uma
        </Link>
      </Text>
      <Link href="/register" color={"orange"} fontWeight={"bold"}>
        Esqueci minha senha
      </Link>
    </AbsoluteCenter>
  );
}

export default Login;
