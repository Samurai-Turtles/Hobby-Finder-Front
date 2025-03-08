import { Container, Flex } from "@chakra-ui/react";
import InputSearch from "./components/InputSearch";
import CustomTag from "./components/CustomTag/CustomTag";
import EventCard from "./components/EventCard";

function HomePage() {
  return (
    <Container maxWidth="90vw" py={5}>
      <Flex direction="column" gap={5}>
        <InputSearch placeHolder="Buscar evento" />
        <Flex gap={2} wrap="wrap">
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="solid" />
          <CustomTag texto="#tag1" visual="outline" />
        </Flex>
        <EventCard
          imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          nomeEvento="Nome"
          descricao="descricao"
          localizacao="local"
          distancia={2}
          dataInicial="data inicial"
          dataFinal="data final"
        />
      </Flex>
    </Container>
  );
}

export default HomePage;
