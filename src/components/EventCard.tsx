import { Card, Flex, Image, Text } from "@chakra-ui/react";
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
      md={{ flexDirection: "row", alignItems: "center" }}
      border="none"
    >
      <Image src={imgSrc} alt="Imagem do evento" maxH="10rem" rounded="xl" />
      <Card.Body gap="1" p={2}>
        <Card.Title>{nomeEvento}</Card.Title>
        <Card.Description>{descricao}</Card.Description>
        <Flex align="center" gap={1}>
          <MapPin size={16} />
          <Text fontSize="sm" fontWeight="medium" letterSpacing="tight">
            {localizacao} ({distancia} km)
          </Text>
        </Flex>
        <Flex align="center" gap={1}>
          <CalendarDots size={16} />
          <Text fontSize="sm" fontWeight="medium" letterSpacing="tight">
            {dataInicial} até {dataFinal}
          </Text>
        </Flex>
      </Card.Body>
      <PrivacityButton privacidade={privacidade} />
    </Card.Root>
  );
}
export default EventCard;
