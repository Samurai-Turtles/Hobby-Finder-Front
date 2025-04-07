import api from "@/api/axiosConfig";
import ActionButton from "@/components/buttons/action-button";
import NavigationButton from "@/components/buttons/navigation-button";
import PrivacityButton, {
  PrivacityStatus,
} from "@/components/buttons/privacity-button";
import Tag from "@/components/buttons/tag/tag";
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
import { useNavigate } from "react-router";

type EventCreationData = {
  Name: string;
  begin: string;
  end: string;
  local: {
    street: string;
    district: string;
    number: string;
    city: string;
    state: string;
    latitude: number;
    longitude: number;
  };
  privacy: PrivacityStatus;
  description: string;
  maxUserAmount: number;
  interestEnum: string;
};

function CreateEvent() {
  const navigate = useNavigate();
  const [localizationCardDisplay, setLocalizationCardDisplay] = useState<
    "block" | "none"
  >("none");
  const [eventData, setEventData] = useState<EventCreationData>({
    Name: "",
    begin: "",
    end: "",
    local: {
      street: "Rua Fulano de Tal",
      district: "Centro",
      number: "123",
      city: "Bakersfield",
      state: "Nicarágua",
      longitude: 0,
      latitude: 0,
    },
    privacy: "PUBLIC",
    description: "",
    maxUserAmount: 0,
    interestEnum: "FestivalDeMusica",
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
    const newLocation = eventData.local;
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

  const handleDatetimeStartUpdate = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const date = new Date(event.target.value);
    const gmtMinus3 = new Date(date.getTime() - 3 * 60 * 60 * 1000);

    setEventData((prevData) => ({
      ...prevData,
      begin: gmtMinus3.toISOString(),
    }));
  };

  const handleDatetimeEndUpdate = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const date = new Date(event.target.value);
    const gmtMinus3 = new Date(date.getTime() - 3 * 60 * 60 * 1000);
    console.log(gmtMinus3.toISOString());

    setEventData((prevData) => ({
      ...prevData,
      end: gmtMinus3.toISOString(),
    }));
  };

  const handlePrivacyToggle = () => {
    setEventData((prevData) => ({
      ...prevData,
      privacy: eventData.privacy == "PUBLIC" ? "PRIVATE" : "PUBLIC",
    }));
  };

  const handleCreateEventSubmit = async (e: Event) => {
    e.preventDefault();

    try {
      await api.post("/event", eventData);
      navigate("/");
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
              location={eventData.local}
            />
          </Field.Root>
          <Field.Root required>
            <Input
              placeholder="Data inicial"
              type="datetime-local"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              onChange={handleDatetimeStartUpdate}
              required
            />
          </Field.Root>
          <Field.Root required>
            <Input
              placeholder="Data final"
              type="datetime-local"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              onChange={handleDatetimeEndUpdate}
              required
            />
          </Field.Root>
          <Field.Root>
            <Input
              placeholder="Número de participantes"
              type="number"
              backgroundColor={"#f4f4f4"}
              border={"0px"}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputUpdate(event, "maxUserAmount")
              }
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
          <PrivacityButton
            status={eventData.privacy}
            handlePrivacyToggle={handlePrivacyToggle}
          />
        </Form>
      </VStack>
    </Frame>
  );
}

export default CreateEvent;
