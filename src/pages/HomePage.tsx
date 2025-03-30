import Frame from "@/components/layout/frame";
import { Flex, Heading, IconButton } from "@chakra-ui/react";
import { Plus } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tag from "../components/buttons/tag/tag";
import EventCard from "../components/cards/EventCard";
import SearchBar from "../components/layout/SearchBar/SearchBar";
import { formatarData } from "../utils/formatData";
import { Evento, getMockEventos, getMockTags } from "../utils/mockDatas";

interface EventCardInterface {
  evento: Evento;
  display: "none" | "flex";
}

interface CustomTagInterface {
  nome: string;
  visual: "solid" | "outline";
}

function HomePage() {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState<EventCardInterface[]>([]);
  const [termoBusca, setTermoBusca] = useState("");
  const [tags, setTags] = useState<CustomTagInterface[]>([]);

  useEffect(() => {
    const carregarTags = async () => {
      const data = await getMockTags();
      const tagList: CustomTagInterface[] = data.map((e) => ({
        nome: e.toString(),
        visual: "outline",
      }));
      setTags(tagList);
    };

    const carregarEventos = async () => {
      const data = await getMockEventos();
      const events: EventCardInterface[] = data.map((e) => ({
        evento: e,
        display: "flex",
      }));
      setEventos(events);
    };

    carregarTags();
    carregarEventos();
  }, []);

  // Atualiza o display dos eventos conforme o termo de busca
  useEffect(() => {
    setEventos((prevEventos) =>
      prevEventos.map((e) => ({
        ...e,
        display: e.evento.nome.toLowerCase().includes(termoBusca.toLowerCase())
          ? "flex"
          : "none",
      })),
    );
  }, [termoBusca]);

  return (
    <Frame>
      <IconButton
        padding={0}
        rounded="lg"
        bg="customOrange"
        position="fixed"
        top="90vh"
        right="7vw"
        transform="scale(1.2)"
        zIndex="1"
        onClick={() => navigate("/create-event")}
      >
        <Plus size={32} />
      </IconButton>

      <Flex direction="column" gap={5}>
        <SearchBar placeHolder="Buscar evento" setTermoBusca={setTermoBusca} />
        <Flex gap={2} wrap="wrap">
          {tags.map((e, index) => {
            return <Tag key={index} label={`#${e.nome}`} style={e.visual} />;
          })}
        </Flex>
        <Heading textStyle="2xl">Próximos Eventos</Heading>
        {eventos.map((e: EventCardInterface, index: number) => {
          return (
            <EventCard
              key={index}
              imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              nomeEvento={e.evento.nome}
              descricao={e.evento.descricao}
              localizacao="LOCAL"
              distancia={100}
              dataInicial={formatarData(e.evento.dataInicio)}
              dataFinal={formatarData(e.evento.dataFim)}
              privacidade={e.evento.privacidade}
              display={e.display}
            />
          );
        })}
      </Flex>
    </Frame>
  );
}

export default HomePage;
