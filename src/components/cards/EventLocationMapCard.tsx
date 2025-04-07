import { Box, Flex, IconButton } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ResizeMapOnShow from "../layout/resizemap";

interface EventLocationMapCardProps {
  display: string;
  onClick: () => void;
  lat: number;
  lon: number;
}

function EventLocationMapCard({
  display,
  onClick,
  lat,
  lon,
}: EventLocationMapCardProps) {
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
            <IconButton colorPalette="orange" onClick={onClick}>
              <X size={32} />
            </IconButton>
          </Flex>
          <MapContainer
            center={[lat, lon]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ width: "100%", height: "80vh" }}
          >
            <ResizeMapOnShow visible={display !== "none"} />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>{"Rua Fulano de Sal"}</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Flex>
    </Box>
  );
}

export default EventLocationMapCard;
