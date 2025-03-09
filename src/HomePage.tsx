import { Container, Flex, Heading } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import CustomTag from "./components/CustomTag/CustomTag";
import EventCard from "./components/EventCard";
import { useState } from "react";
import { formatarData } from "./utils/formatData";

type Evento = {
  id: string;
  nome: string;
  dataInicio: string;
  dataFim: string;
  descricao: string;
  privacidade: string;
  CapacidadeMaxima: number;
  QuantosUsuarios: number;
};

function HomePage() {
  const [eventos, setEventos] = useState<Evento[]>([
    {
      id: "6f3a0d2b-e904-46c0-b64a-16e0bd897a26",
      nome: "Racha do seu zé",
      dataInicio: "2022-10-31T09:00:00.594Z",
      dataFim: "2022-10-31T09:00:00.594Z",
      descricao:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aspernatur molestias quae consequuntur excepturi in, dolor dolores deleniti quibusdam, beatae, nostrum accusantium! Rerum saepe enim modi asperiores sit quibusdam quo.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aspernatur molestias quae consequuntur excepturi in, dolor dolores deleniti quibusdam, beatae, nostrum accusantium! Rerum saepe enim modi asperiores sit quibusdam quo.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore aspernatur molestias quae consequuntur excepturi in, dolor dolores deleniti quibusdam, beatae, nostrum accusantium! Rerum saepe enim modi asperiores sit quibusdam quo.",
      privacidade: "PUBLICO",
      CapacidadeMaxima: 150,
      QuantosUsuarios: 0,
    },
    {
      id: "6f3a0d2b-e904-46c0-b64a-16e0bd897a27",
      nome: "Racha do seu zé",
      dataInicio: "2022-10-31T09:00:00.594Z",
      dataFim: "2022-10-31T09:00:00.594Z",
      descricao:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nulla consequuntur quam blanditiis, neque sint architecto sapiente fugiat assumenda! Quas quam totam odit dolore nulla minima, sunt reprehenderit culpa! Velit.",
      privacidade: "PRIVADO",
      CapacidadeMaxima: 150,
      QuantosUsuarios: 0,
    },
  ]);

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
