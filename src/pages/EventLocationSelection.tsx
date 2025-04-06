import ResizeMapOnShow from "@/components/layout/resizemap";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

interface EventLocationSelectionProps {
  display: string;
  handleDisplayToggle: () => void;
  handleCoordinateUpdate: (latitude: number, longitude: number) => void;
  location: {
    latitude: number;
    longitude: number;
  };
}

function EventLocationSelection({
  display,
  handleDisplayToggle,
  handleCoordinateUpdate,
  location,
}: EventLocationSelectionProps) {
  const LocationMarker = () => {
    useMapEvents({
      click({ latlng }) {
        handleCoordinateUpdate(latlng.lat, latlng.lng);
      },
    });

    return location ? (
      <Marker position={[location.latitude, location.longitude]} />
    ) : null;
  };

  return (
    <Box
      display={display}
      position="fixed"
      inset={0}
      zIndex="1000"
      backgroundColor="rgba(0, 0, 0, 0.1)"
    >
      <Flex w="full" h="full" alignItems="center" justifyContent="center">
        <Box width="80vw">
          <Flex justifyContent="flex-end" w="full">
            <IconButton colorPalette="orange" onClick={handleDisplayToggle}>
              <X size={32} />
            </IconButton>
          </Flex>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "80vh" }}
          >
            <ResizeMapOnShow visible={display !== "none"} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
          </MapContainer>
        </Box>
      </Flex>
    </Box>
  );
}

export default EventLocationSelection;
