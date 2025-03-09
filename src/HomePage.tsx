import { Container, Flex, Heading } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import CustomTag from "./components/CustomTag/CustomTag";
import { useEffect, useState } from "react";
import { Evento } from "./utils/mockDatas";
import { getMockEventos } from "./utils/mockDatas";
import EventCard from "./components/EventCard";
import { formatarData } from "./utils/formatData";

function HomePage() {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const carregarEventos = async () => {
      const data = await getMockEventos();
      setEventos(data);
    };

    carregarEventos();
  }, []);

  return (
    <Container maxWidth="90vw" py={5}>
      <Flex direction="column" gap={5}>
        <SearchBar placeHolder="Buscar evento" />
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
        <Heading textStyle="2xl">Próximos Eventos</Heading>
        {eventos.map((e: Evento) => {
          return (
            <EventCard
              key={e.id}
              imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              nomeEvento={e.nome}
              descricao={e.descricao}
              localizacao="LOCAL"
              distancia={100}
              dataInicial={formatarData(e.dataInicio)}
              dataFinal={formatarData(e.dataFim)}
              privacidade={e.privacidade}
            />
          );
        })}
      </Flex>
    </Container>
  );
}

export default HomePage;
