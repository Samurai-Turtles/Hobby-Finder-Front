import { EventData, EventView } from "@/components/events/EventView";
import { useEffect, useState } from "react";
import defaultImage from "@/assets/images/default-event-image.webp";
import { useParams } from "react-router";
import { eventService } from "@/service/eventService";

export default function EventoPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const [eventData, setEventData] = useState<EventData>({
    image: defaultImage,
    Name: "Miniteste de ES",
    local: "CAA 201",
    lat: 0,
    lon: 0,
    begin: "2025-01-03T01:00:00.594Z",
    end: "2025-01-04T01:00:00.594Z",
    description:
      "Uma miniteste para avaliar o seu conhecimento em Engenharia de Software...",
    privacity: "PRIVATE",
    tags: "FestivalDeMusica",
  });

  useEffect(() => {
    const loadEventData = async () => {
      if (eventId) {
        const response = await eventService.eventGetData(eventId);
        setEventData({
          image: response.imageUrl || defaultImage,
          Name: response.name,
          local: response.location,
          lat: response.lat,
          lon: response.lon,
          begin: response.dateInicio,
          end: response.dateFim,
          description: response.description,
          privacity: response.privacy,
          tags: response.tags,
        });
      }
    };
    loadEventData();
  }, []);

  return <EventView eventId={eventId || ""} eventData={eventData} />;
}
