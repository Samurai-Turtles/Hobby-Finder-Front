import {
  Avatar,
  Box,
  Container,
  Field,
  Fieldset,
  Flex,
  Float,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { Camera, Plus } from "@phosphor-icons/react";
import CustomButton from "./components/CustomButton";

function EditarPerfil() {
  const inputs = [
    { name: "nickname", placeHolder: "Nickname" },
    { name: "fullName", placeHolder: "Nome Completo" },
    { name: "email", placeHolder: "Email" },
  ];

  return (
    <Container maxWidth="90vw" py={5}>
      COLOCAR COMPONENTE DE VOLTAR TELA AQUI
      <Flex direction="column" minW="100%" alignItems="center" gap={5}>
        <Box position="relative">
          <Avatar.Root minW="8rem" minH="8rem">
            <Avatar.Fallback name="Username" />
            <Avatar.Image src="#" />
          </Avatar.Root>
          <Float placement="bottom-end" offset={4}>
            <button style={{ cursor: "pointer" }}>
              <Box bg="customOrange" color="customWhite" p={1} rounded="md">
                <Camera size={25} />
              </Box>
            </button>
          </Float>
        </Box>
        <Flex alignItems="center" gap={2}>
          COLOCAR OS COMPONENTES DAS TAGS AQUI
          <button style={{ cursor: "pointer" }}>
            <Box border="1px solid" color="customOrange" p={1} rounded="full">
              <Plus size={15} />
            </Box>
          </button>
        </Flex>
        <Fieldset.Root size="lg" maxW="md">
          <Fieldset.Content>
            {inputs.map((e) => {
              return (
                <Field.Root>
                  <Input
                    name={e.name}
                    placeholder={e.placeHolder}
                    fontSize="1rem"
                    variant="subtle"
                    outline="none"
                  />
                </Field.Root>
              );
            })}

            <Field.Root>
              <Textarea
                name="bio"
                placeholder="Bio"
                fontSize="1rem"
                variant="subtle"
                outline="none"
              />
            </Field.Root>
          </Fieldset.Content>

          <Flex direction="column" gap={2}>
            <CustomButton
              type="submit"
              value="Salvar Alterações"
              variant="customOrange"
            />
            <CustomButton
              type="button"
              value="Excluir Conta"
              variant="customRed"
            />
          </Flex>
        </Fieldset.Root>
      </Flex>
    </Container>
  );
}

export default EditarPerfil;
