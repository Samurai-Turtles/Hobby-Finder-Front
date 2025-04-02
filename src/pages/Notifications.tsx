import { useEffect, useState } from "react";
import NavigationButton from "@/components/buttons/navigation-button";
import Notification from "@/components/events/Notification";
import Frame from "@/components/layout/frame";
import { VStack } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react";
import api from "@/api/axiosConfig";

export interface Photo {
  id: string;
  extension: string;
  isSaved: boolean;
}

export interface UserDto {
  id: string;
  username: string;
  fullName: string;
  bio: string;
  interests: string[];
  photoDto?: Photo;
  stars: number;
}

export interface NotificationDto {
  id: string;
  message: string;
  photo?: Photo;
  userDto: UserDto;
  date: string;
  idEVento: string;
  idSolicitacao: string;
  notificationEnum: string;
}

function Notifications() {
  const [notifications, setNotifications] = useState<NotificationDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get<{ content: NotificationDto[] }>("/notifications")
      .then((response) => {
        console.log(response.data);
        setNotifications(response.data.content || []);
      })
      .catch((error) => {
        console.error("Erro ao buscar notificações:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Frame>
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <VStack alignItems="left" marginY="5">
        {loading ? (
          <p>Carregando notificações...</p>
        ) : notifications.length > 0 ? (
          notifications.map((notification) => (
            <Notification
              key={notification.id}
              imgSrc={
                notification.userDto?.photoDto?.id
                  ? `/api/photos/${notification.userDto.photoDto.id}`
                  : "https://via.placeholder.com/50"
              }
              msg={notification.message}
              notificationType={notification.notificationEnum}
              eventId={notification.idEVento}
              solicitationId={notification.idSolicitacao}
            />
          ))
        ) : (
          <p>Sem notificações no momento.</p>
        )}
      </VStack>
    </Frame>
  );
}

export default Notifications;
