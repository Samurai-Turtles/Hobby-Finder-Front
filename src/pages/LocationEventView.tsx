import { Flex, Input } from "@chakra-ui/react";
import { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function LocationEventView() {
  const position: LatLngTuple = [-6.991805560949886, -36.71458172252873];
  const [address, setAddress] = useState<string>("Carregando...");

  // Função para obter o nome da rua
  useEffect(() => {
    const fetchAddress = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${position[0]}&lon=${position[1]}`,
        );
        const data = await response.json();
        setAddress(data.display_name || "Endereço não encontrado");
      } catch (error) {
        console.error("Erro ao buscar endereço:", error);
        setAddress("Erro ao carregar endereço");
      }
    };

    fetchAddress();
  });

  return (
    <>
      <Flex
        position="absolute"
        zIndex="1000"
        w="full"
        p={2}
        justifyContent="end"
        sm={{ justifyContent: "center" }}
      >
        <Input
          maxW="80vw"
          type="text"
          name="address"
          variant="subtle"
          outline="none"
          border="1px solid"
          borderColor="customDarkGrey"
          rounded={8}
          value={address}
          readOnly
          autoComplete="off"
        />
      </Flex>
      <MapContainer
        center={position}
        zoom={25}
        scrollWheelZoom={true}
        style={{ height: "90vh", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default LocationEventView;
