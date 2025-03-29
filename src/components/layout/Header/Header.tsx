import {
  Avatar,
  Box,
  Button,
  Circle,
  Container,
  Flex,
  Float,
  Image,
  Popover,
  Portal,
} from "@chakra-ui/react";
import logo from "../../../assets/images/logoHorizontal.webp";
import { Bell } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "@/api/axiosConfig";

function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/user/logout");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
        <Link to="/">
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
          <Popover.Root open={open} positioning={{ placement: "bottom-end" }}>
            <Popover.Trigger asChild>
              <Link to="/profile">
                <Avatar.Root shape="rounded" onMouseEnter={() => setOpen(true)}>
                  <Avatar.Fallback name="Usuario" />
                  <Avatar.Image alt="Foto de Perfil do Usuário" src="#" />
                </Avatar.Root>
              </Link>
            </Popover.Trigger>
            <Portal>
              <Popover.Positioner>
                <Popover.Content
                  maxW="5rem"
                  onMouseLeave={() => setOpen(false)}
                >
                  <Popover.Arrow />
                  <Button
                    onClick={handleLogout}
                    variant="subtle"
                    bgColor="white"
                    _hover={{ bgColor: "customLightGrey" }}
                    width="100%"
                    outline="none"
                  >
                    Sair
                  </Button>
                </Popover.Content>
              </Popover.Positioner>
            </Portal>
          </Popover.Root>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
