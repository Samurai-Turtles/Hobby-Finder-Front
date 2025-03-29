import { PrivateEventView } from "@/components/events/EventView";
import { useEffect, useState } from "react";
import defaultImage from "@/assets/images/default-event-image.webp";

// Defina o tipo UserEventStatus se ainda não existir
type UserEventStatus =
  | "not_participating"
  | "solicitation_pending"
  | "solicitation_accepted"
  | "cancel_participating"
  | "participar";

type EventPrivacyStatus = "public" | "private";

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
  image: defaultImage,
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
  const [eventPrivacy, setEventPrivacy] =
    useState<EventPrivacyStatus>("public");

  useEffect(() => {
    // Sorteio do status do evento
    const mockStatus: EventPrivacyStatus =
      Math.random() > 0.5 ? "public" : "private";
    setEventPrivacy(mockStatus);

    // Sorteio do status do usuário dentro das opções permitidas para o tipo de evento
    const userStatusOptions =
      mockStatus === "private"
        ? ["not_participating", "solicitation_pending", "solicitation_accepted"]
        : ["cancel_participating", "participar"];

    const randomUserStatus = userStatusOptions[
      Math.floor(Math.random() * userStatusOptions.length)
    ] as UserEventStatus;
    setUserStatus(randomUserStatus);
  }, []);

  return (
    <PrivateEventView userStatus={userStatus} eventData={fixedEventData} />
  );
}
