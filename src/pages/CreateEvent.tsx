import api from "@/api/axiosConfig";
import ActionButton from "@/components/buttons/action-button";
import NavigationButton from "@/components/buttons/navigation-button";
import PrivacityButton from "@/components/buttons/privacity-button";
import Tag from "@/components/buttons/tag/tag";
import EventLocationMapCard from "@/components/cards/EventLocationMapCard";
import Form from "@/components/layout/form";
import Frame from "@/components/layout/frame";
import {
  Box,
  Field,
  HStack,
  IconButton,
  Image,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { CaretLeft, Pen } from "@phosphor-icons/react";
import { useState } from "react";
import EventLocationSelection from "./EventLocationSelection";

type EventCreationData = {
  Name: string;
  begin: string;
  end: string;
  Local: {
    rua: string;
    district: string;
    number: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
  };
  privacity: string;
  description: string;
  maxUserAmount: number;
  interests: string;
};

function CreateEvent() {
  const [localizationCardDisplay, setLocalizationCardDisplay] = useState<
    "block" | "none"
  >("none");
  const [eventData, setEventData] = useState<EventCreationData>({
    Name: "",
    begin: "",
    end: "",
    Local: {
      rua: "",
      district: "",
      number: "",
      city: "",
      state: "",
      latitude: 0,
      longitude: 0,
    },
    privacity: "",
    description: "",
    maxUserAmount: 0,
    interests: "",
  });

  const handleInputUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    propertyName: keyof EventCreationData,
  ) => {
    setEventData((prevData) => ({
      ...prevData,
      [propertyName]: e.target.value,
    }));
  };

  const handleLocationUpdate = (lat: number, lng: number) => {
    const newLocation = eventData.Local;
    newLocation.latitude = lat;
    newLocation.longitude = lng;

    setEventData((prevData) => ({
      ...prevData,
      Local: newLocation,
    }));
  };

  const handleLocalizationCardToggle = () => {
    setLocalizationCardDisplay((e) => (e.includes("block") ? "none" : "block"));
  };

  const handleCreateEventSubmit = async (e: Event) => {
    e.preventDefault();

    try {
      await api.post("/api/event", eventData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Frame>
      <NavigationButton Icon={CaretLeft} label="Voltar" />
      <VStack mt={6}>
        <Box position={"relative"}>
          <Image
            src="https://picsum.photos/seed/picsum/400/300"
            borderRadius={6}
          />
          <IconButton
            position={"absolute"}
            bottom={2.5}
            right={2.5}
            bgColor={"customOrange"}
          >
            <Pen />
          </IconButton>
        </Box>
        <Form
          action="/api/event"
          btnActionLabel="Criar evento"
          method="post"
          handleSubmit={handleCreateEventSubmit}
        >
          <Field.Root required>
            <Input
              placeholder="Título do evento"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputUpdate(event, "Name")
              }
              required
            />
          </Field.Root>
          <Field.Root required>
            <ActionButton
              label="Localização"
              action={handleLocalizationCardToggle}
            />
            <EventLocationSelection
              display={localizationCardDisplay}
              handleDisplayToggle={handleLocalizationCardToggle}
              handleCoordinateUpdate={handleLocationUpdate}
              location={eventData.Local}
            />
          </Field.Root>
          <Field.Root required>
            <Input
              placeholder="Data inicial"
              type="datetime-local"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputUpdate(event, "begin")
              }
              required
            />
          </Field.Root>
          <Field.Root required>
            <Input
              placeholder="Data final"
              type="datetime-local"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputUpdate(event, "end")
              }
              required
            />
          </Field.Root>
          <Field.Root required>
            <Input
              placeholder="Número de participantes"
              type="number"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputUpdate(event, "end")
              }
              required
            />
          </Field.Root>
          <Field.Root>
            <Textarea
              placeholder="Descreva seu evento..."
              rows={6}
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
                handleInputUpdate(event, "description")
              }
            />
          </Field.Root>
          <HStack>
            <Tag label="tag" style="solid" disabled />
            <Tag label="tag" style="solid" disabled />
            <Tag label="tag" style="solid" disabled />
            <Tag label="tag" style="solid" disabled />
          </HStack>
          <PrivacityButton privacidade="Público" />
        </Form>
      </VStack>
    </Frame>
  );
}

export default CreateEvent;
