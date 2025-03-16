import FlowButton from "@/components/buttons/FlowButton/FlowButton";
import Notification from "@/components/events/Notification";
import { Container, VStack } from "@chakra-ui/react";

function NotificationScreen() {
  return (
    <Container maxWidth="90vw" paddingY="5">
      <FlowButton />
      <VStack alignItems="left" marginY="5">
        <Notification
          imgSrc="https://github.com/Hildon27.png"
          msg="Hildon deseja participar do evento Domino em Seu Helio"
          isSolicitation={true}
        />

        <Notification
          imgSrc="https://github.com/Hildon27.png"
          msg="Tomara que dê certo"
        />

        <Notification
          imgSrc="https://github.com/johndoe.png"
          msg="Maria comentou no evento Futebol de Sábado"
        />

        <Notification
          imgSrc="https://github.com/janedoe.png"
          msg="Carlos confirmou presença no evento Churrasco do Fim de Semana"
        />

        <Notification
          imgSrc="https://github.com/randomuser.png"
          msg="Ana enviou um convite para o evento Corrida no Parque"
          isSolicitation={true}
        />
      </VStack>
    </Container>
  );
}

export default NotificationScreen;
