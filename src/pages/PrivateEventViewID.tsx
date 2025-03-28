import { PrivateEventView } from "@/components/events/PrivateEventView";
import { useEffect, useState } from "react";
import defaultImage from "@/assets/images/default-event-image.webp";

// Defina o tipo UserEventStatus se ainda não existir
type UserEventStatus =
  | "not_participating"
  | "solicitation_pending"
  | "solicitation_accepted";

interface EventData {
  image: string;
  name: string;
  location: string;
  date: string;
  description: string;
  tags: string;
}

// Dados fixos do evento
const fixedEventData: EventData = {
  image: defaultImage, // Use .src para imagens importadas
  name: "Miniteste de ES",
  location: "CAA 201",
  date: "2025-03-18",
  description:
    "Uma miniteste para avaliar o seu conhecimento em Engenharia de Software...",
  tags: "#prova #teste #conhecimento",
};

export default function EventoPage() {
  const [userStatus, setUserStatus] =
    useState<UserEventStatus>("not_participating");

  // Use os dados fixos diretamente, sem estado (a menos que precise alterá-los)
  const eventData = fixedEventData;

  useEffect(() => {
    // Mock do status do usuário
    const mockStatus: UserEventStatus =
      Math.random() > 0.7
        ? "solicitation_accepted"
        : Math.random() > 0.4
          ? "solicitation_pending"
          : "not_participating";

    setUserStatus(mockStatus);
  }, []);

  return <PrivateEventView userStatus={userStatus} eventData={eventData} />;
}
