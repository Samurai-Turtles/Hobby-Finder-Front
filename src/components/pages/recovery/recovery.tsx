import {
  AbsoluteCenter,
  Box,
  Image,
  Text,
  VStack,
  Field,
  Input,
} from "@chakra-ui/react";
import logo from "../commom/capivara.webp";
import "../commom/backgroundColor.scss";
import Form from "../../form/Form";

function Recovery() {
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
        <Form action="/recovery" method="post" btnActionLabel="Recuperar Senha">
          <Field.Root required>
            <Input
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              placeholder="E-mail"
            />
          </Field.Root>
        </Form>
      </VStack>
    </AbsoluteCenter>
  );
}
export default Recovery;
