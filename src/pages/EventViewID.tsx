import { EventView } from "@/components/events/EventView";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import defaultImage from "@/assets/images/default-event-image.webp";
import { eventService } from "@/service/eventService";

type UserEventStatus =
  | "not_participating"
  | "solicitation_pending"
  | "solicitation_accepted"
  | "cancel_participating"
  | "participar";

type EventPrivacyStatus = "PUBLIC" | "PRIVATE";

interface EventData {
  id: string;
  image: string;
  name: string;
  location: string;
  date: string;
  description: string;
  tags: string;
  privacy: EventPrivacyStatus;
}

const mapBackendStatus = (
  backendStatus: string,
  isPublic: boolean,
): UserEventStatus => {
  switch (backendStatus) {
    case "PARTICIPANTE_CONFIRMADO":
      return "cancel_participating";
    case "PARTICIPANTE_NAO_CONFIRMADO":
      return "solicitation_accepted";
    case "SOLICITANTE":
      return "solicitation_pending";
    case "NAO_PARTICIPANTE":
      return isPublic ? "participar" : "not_participating";
    default:
      return isPublic ? "participar" : "not_participating";
  }
};

export default function EventViewID() {
  const { id: eventId } = useParams<{ id: string }>();
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [userStatus, setUserStatus] = useState<UserEventStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!eventId) {
      setError("ID do evento não encontrado na URL");
      setLoading(false);
      return;
    }

    const fetchEventData = async () => {
      try {
        const event = await eventService.eventGetData(eventId);
        return {
          id: event.id,
          image: event.imageUrl || defaultImage,
          name: event.name,
          location: event.location,
          date: event.dateInicio,
          description: event.description,
          tags: event.tags,
          privacy: event.privacy.trim() as EventPrivacyStatus,
        };
      } catch (error) {
        console.error("Erro ao buscar dados do evento:", error);
        throw new Error("Falha ao carregar dados do evento");
      }
    };

    const fetchUserStatus = async () => {
      try {
        const response = await eventService.getUserEventStatus(eventId);
        return { situation: response.situation };
      } catch (error) {
        console.error("Erro ao buscar status do usuário:", error);
        throw new Error("Falha ao carregar status do usuário");
      }
    };

    const loadData = async () => {
      try {
        setLoading(true);

        const event = await fetchEventData();
        setEventData(event);
        const status = await fetchUserStatus();
        const mappedStatus = mapBackendStatus(
          status.situation,
          event.privacy === "PUBLIC",
        );
        setUserStatus(mappedStatus);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [eventId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Carregando evento...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!eventData || !userStatus) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Evento não encontrado</p>
      </div>
    );
  }

  return <EventView userStatus={userStatus} eventData={eventData} />;
}
