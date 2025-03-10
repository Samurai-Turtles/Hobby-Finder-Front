type Evento = {
  id: string;
  nome: string;
  dataInicio: string;
  dataFim: string;
  descricao: string;
  privacidade: string;
  CapacidadeMaxima: number;
  QuantosUsuarios: number;
  distancia: number;
};

// Mock de eventos para testes de exibição e responsividade
// Somente durante o período sem API e rotas prontas para isso
const mockEventos = [
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
    distancia: 10,
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
    distancia: 20,
  },
  {
    id: "8f4d1a2b-d801-42c5-a470-21e0c4f9b4e3",
    nome: "Corrida de Rua",
    dataInicio: "2023-05-15T08:00:00.594Z",
    dataFim: "2023-05-15T11:00:00.594Z",
    descricao:
      "Evento esportivo que reúne corredores de todas as idades para uma experiência única. A corrida inclui várias categorias de distância.",
    privacidade: "PUBLICO",
    CapacidadeMaxima: 200,
    QuantosUsuarios: 50,
    distancia: 5,
  },
  {
    id: "f3a4b5c7-d2f4-4e74-8d45-8db44d52fe9a",
    nome: "Workshop de Programação",
    dataInicio: "2023-06-10T10:00:00.594Z",
    dataFim: "2023-06-10T16:00:00.594Z",
    descricao:
      "Workshop de desenvolvimento de software com foco em tecnologias modernas como React e Node.js. Ideal para iniciantes e desenvolvedores intermediários.",
    privacidade: "PRIVADO",
    CapacidadeMaxima: 30,
    QuantosUsuarios: 10,
    distancia: 0,
  },
  {
    id: "d7f1b3a8-c9fa-42fc-b560-0ac2fdbd8e4e",
    nome: "Encontro de Leitores",
    dataInicio: "2023-07-01T14:00:00.594Z",
    dataFim: "2023-07-01T17:00:00.594Z",
    descricao:
      "Encontro mensal de amantes de livros, onde discutimos as leituras mais recentes e trocamos recomendações.",
    privacidade: "PUBLICO",
    CapacidadeMaxima: 50,
    QuantosUsuarios: 20,
    distancia: 0,
  },
  {
    id: "b8c7e4f1-d1fe-47a1-8191-bbb2a3b67c9d",
    nome: "Festa Junina",
    dataInicio: "2023-06-24T18:00:00.594Z",
    dataFim: "2023-06-24T23:00:00.594Z",
    descricao:
      "Festa típica brasileira com comidas típicas, danças e jogos. Venha celebrar as tradições culturais e se divertir com a família e amigos.",
    privacidade: "PUBLICO",
    CapacidadeMaxima: 500,
    QuantosUsuarios: 300,
    distancia: 0,
  },
  {
    id: "a2b9d68f-8a50-45e1-9c9a-6ac9276588b7",
    nome: "Exposição de Arte Moderna",
    dataInicio: "2023-09-05T09:00:00.594Z",
    dataFim: "2023-09-05T18:00:00.594Z",
    descricao:
      "Exposição com obras de arte contemporânea, com curadoria de artistas renomados da cena moderna. Aberto ao público.",
    privacidade: "PUBLICO",
    CapacidadeMaxima: 100,
    QuantosUsuarios: 50,
    distancia: 0,
  },
  {
    id: "7a6b9c1b-03b2-484e-91ae-47b7646b8249",
    nome: "Aula de Yoga ao Ar Livre",
    dataInicio: "2023-08-20T07:00:00.594Z",
    dataFim: "2023-08-20T08:00:00.594Z",
    descricao:
      "Aula de yoga para todos os níveis, realizada ao ar livre em um ambiente tranquilo e relaxante. Ideal para quem busca bem-estar físico e mental.",
    privacidade: "PUBLICO",
    CapacidadeMaxima: 30,
    QuantosUsuarios: 15,
    distancia: 0,
  },
  {
    id: "4c8b5d3e-c8a6-4a57-98f3-5056bfa832ff",
    nome: "Feira de Produtos Orgânicos",
    dataInicio: "2023-09-10T08:00:00.594Z",
    dataFim: "2023-09-10T12:00:00.594Z",
    descricao:
      "Feira com produtores locais vendendo produtos orgânicos e sustentáveis, incluindo frutas, vegetais, produtos de higiene e muito mais.",
    privacidade: "PUBLICO",
    CapacidadeMaxima: 100,
    QuantosUsuarios: 70,
    distancia: 0,
  },
  {
    id: "3f4b1a0c-c497-48b5-b865-6e408e4d6c5a",
    nome: "Festival de Música",
    dataInicio: "2023-08-12T16:00:00.594Z",
    dataFim: "2023-08-12T23:59:00.594Z",
    descricao:
      "Festival com diversas apresentações musicais, de rock a música eletrônica, com vários palcos e atrações ao vivo.",
    privacidade: "PUBLICO",
    CapacidadeMaxima: 2000,
    QuantosUsuarios: 1500,
    distancia: 0,
  },
  {
    id: "3c8e9f4f-b88d-4c39-9a63-faa3f8be4126",
    nome: "Caminhada Ecológica",
    dataInicio: "2023-07-22T07:30:00.594Z",
    dataFim: "2023-07-22T12:00:00.594Z",
    descricao:
      "Caminhada em uma trilha ecológica, com foco na preservação ambiental. Durante o evento, haverá orientações sobre fauna e flora locais.",
    privacidade: "PUBLICO",
    CapacidadeMaxima: 100,
    QuantosUsuarios: 40,
    distancia: 15,
  },
];

const getMockEventos = async (): Promise<Evento[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockEventos);
    }, 0);
  });
};

const mockTags = ["ANIME", "SHOW", "APRESENTAÇÃO", "CONCERTO", "ENCONTRO"];

const getMockTags = async (): Promise<String[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTags);
    }, 0);
  });
};

export { getMockEventos, getMockTags };
export type { Evento };
