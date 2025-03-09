import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { CalendarDots, MapPin } from "@phosphor-icons/react";
import PrivacityButton from "./PrivacityButton/PrivacityButton";

interface EventCardProps {
  imgSrc: string;
  nomeEvento: string;
  descricao: string;
  localizacao: string;
  distancia: number;
  dataInicial: string;
  dataFinal: string;
  privacidade: string;
}

function EventCard({
  imgSrc,
  nomeEvento,
  descricao,
  localizacao,
  distancia,
  dataInicial,
  dataFinal,
  privacidade,
}: EventCardProps) {
  return (
    <Card.Root
      minW="3xs"
      md={{ flexDirection: "row", alignItems: "top" }}
      border="none"
    >
      <Image
        objectFit="cover"
        maxW="100%"
        maxH="200px"
        md={{ maxW: "300px", maxH: "150px" }}
        src={imgSrc}
        alt="Caffe Latte"
        rounded="xl"
      />
      <Flex
        direction="column"
        md={{ flexDirection: "row", alignItems: "top" }}
        gap={2}
      >
        <Card.Body gap="1" px={2} py={0}>
          <Card.Title>{nomeEvento}</Card.Title>
          <Card.Description>{descricao}</Card.Description>
          <Flex align="center" gap={1}>
            <MapPin size={16} />
            <Text fontSize="sm" fontWeight="medium" letterSpacing="tight">
              {privacidade.includes("PUBLICO") ? localizacao : ""} ({distancia}{" "}
              km)
            </Text>
          </Flex>
          <Flex align="center" gap={1}>
            <CalendarDots size={16} />
            <Text fontSize="sm" fontWeight="medium" letterSpacing="tight">
              {dataInicial} até {dataFinal}
            </Text>
          </Flex>
        </Card.Body>
        <Flex maxH="150px" alignItems="center">
          <PrivacityButton privacidade={privacidade} />
        </Flex>
      </Flex>
    </Card.Root>
  );
}
export default EventCard;
