import api from "@/api/axiosConfig";
import {
  Avatar,
  Box,
  Button,
  Circle,
  Flex,
  Float,
  HoverCard,
  HStack,
  Image,
  Portal,
  Stack,
} from "@chakra-ui/react";
import { Bell } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userService } from "@/service/userService";
import logo from "../../../assets/images/logoHorizontal.webp";
import Frame from "../frame";

function Header() {
  const navigate = useNavigate();
  const [numNotificacoes, setNumNotificacoes] = useState(0);

  const handleLogout = async () => {
    try {
      await api.post("/user/logout");
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const carregarNumNotificacoes = async () => {
      const data = await userService.getNumberOfNotifications(20, 1);
      setNumNotificacoes(data);
    };

    carregarNumNotificacoes();
  }, []);

  return (
    <Frame>
      <HStack justifyContent="space-between" alignItems="center">
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
              <Float
                offsetX="3"
                offsetY="2"
                display={numNotificacoes > 0 ? "flex" : "none"}
              >
                <Circle
                  fontSize="0.7rem"
                  fontWeight="bold"
                  size="4"
                  bg="red"
                  color="white"
                >
                  {numNotificacoes}
                </Circle>
              </Float>
            </Box>
          </Link>
          <HoverCard.Root
            size="sm"
            openDelay={200}
            closeDelay={300}
            positioning={{ placement: "bottom-end" }}
          >
            <HoverCard.Trigger asChild>
              <Link to="/profile">
                <Avatar.Root shape="rounded">
                  <Avatar.Fallback name="Usuario" />
                  <Avatar.Image alt="Foto de Perfil do Usuário" src="#" />
                </Avatar.Root>
              </Link>
            </HoverCard.Trigger>
            <Portal>
              <HoverCard.Positioner>
                <HoverCard.Content p={0}>
                  <HoverCard.Arrow />
                  <Stack direction="row">
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
                  </Stack>
                </HoverCard.Content>
              </HoverCard.Positioner>
            </Portal>
          </HoverCard.Root>
        </Flex>
      </HStack>
    </Frame>
  );
}

export default Header;
