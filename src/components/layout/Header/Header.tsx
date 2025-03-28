import {
  Avatar,
  Box,
  Circle,
  Container,
  Flex,
  Float,
  Image,
} from "@chakra-ui/react";
import logo from "../../../assets/images/logoHorizontal.webp";
import { Bell } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box
      minW="full"
      md={{ borderBottom: "2px solid", borderColor: "customLightGrey" }}
    >
      <Container
        display="flex"
        maxW="90vw"
        justifyContent="space-between"
        py={2}
        alignItems="center"
      >
        <Link to="/home">
          <Image alt="Logo" maxH="2.5rem" src={logo} />
        </Link>
        <Flex alignItems="center" gap={2}>
          <Link to="/notifications">
            <Box
              display="flex"
              alignItems="center"
              position="relative"
              w="2rem"
              h="2rem"
            >
              <Bell size={20} />
              <Float offsetX="3" offsetY="2">
                <Circle
                  fontSize="0.7rem"
                  fontWeight="bold"
                  size="4"
                  bg="red"
                  color="white"
                >
                  3
                </Circle>
              </Float>
            </Box>
          </Link>
          <Link to="profile">
            <Avatar.Root shape="rounded">
              <Avatar.Fallback name="Usuario" />
              <Avatar.Image alt="Foto de Perfil do Usuário" src="#" />
            </Avatar.Root>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
