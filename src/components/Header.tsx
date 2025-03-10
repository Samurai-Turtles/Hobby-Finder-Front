import { Avatar, Box, Circle, Flex, Float, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.svg";
import { Bell } from "@phosphor-icons/react";

function Header() {
  return (
    <Flex
      minW="full"
      justifyContent="space-between"
      paddingBottom={5}
      alignItems="center"
    >
      <button style={{ cursor: "pointer" }}>
        <Image md={{ height: "3rem" }} alt="Logo" src={logo} />
      </button>
      <Flex alignItems="center" gap={2}>
        <button style={{ cursor: "pointer" }}>
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            w="2rem"
            h="2rem"
          >
            <Bell size={25} />
            <Float offset="2">
              <Circle fontSize="0.8rem" size="4" bg="red" color="white">
                3
              </Circle>
            </Float>
          </Box>
        </button>
        <button style={{ cursor: "pointer" }}>
          <Avatar.Root shape="rounded">
            <Avatar.Fallback name="Usuario" />
            <Avatar.Image alt="Foto de Perfil do Usuário" src="#" />
          </Avatar.Root>
        </button>
      </Flex>
    </Flex>
  );
}

export default Header;
