import api from "@/api/axiosConfig";

interface getEventParams {
  latitude: number;
  longitude: number;
  eventPerPage?: number;
  page?: number;
  name?: string;
}

type Event = {
  id: string;
  name: string;
  description: string;
  dateInicio: string;
  dateFim: string;
  location: string;
  lat: number;
  lon: number;
  tags: string;
  imageUrl: string;
  privacy: "PUBLIC" | "PRIVATE";
};

export const eventService = {
  async eventGetData(id: string) {
    try {
      const response = await api.get(`/event/${id}`);
      const event = response.data;

      return {
        id: event.id,
        name: event.Name,
        description: event.description,
        dateInicio: event.begin,
        dateFim: event.end,
        location: `${event.local.street}, ${event.local.number}, ${event.local.district}, ${event.local.city} - ${event.local.state}`,
        lat: event.local.latitude,
        lon: event.local.longitude,
        tags: event.interestEnum,
        imageUrl: event.photoDto?.id ? `/api/photo/${event.photoDto.id}` : "",
        privacy: event.privacy,
      } as Event;
    } catch (error) {
      console.error(`Erro ao buscar evento (ID: ${id}):`, error);
      throw error;
    }
  },

  async getEvents({
    latitude,
    longitude,
    eventPerPage,
    page,
    name,
  }: getEventParams) {
    try {
      const params: any = { latitude, longitude };
      if (name) {
        params.name = name;
      }
      if (eventPerPage) {
        params.eventPerPage = eventPerPage;
      }
      if (page) {
        params.page = page;
      }
      const response = await api.get(`/event`, { params });
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
      throw error;
    }
  },

  async getPossibleTags() {
    return [
      "FestivalDeMusica",
      "FeiraGastronomica",
      "MostraDeArtes",
      "CinemaAoArLivre",
      "FestivalDeDanca",
      "Trilha",
      "Ecoturismo",
      "Camping",
      "PasseioDeLancha",
      "ParqueNatural",
      "Teatro",
      "ShowAoVivo",
      "StandUpComedy",
      "ExposicaoDeArte",
      "CinemaIMAX",
      "DegustacaoDeVinhos",
      "HappyHour",
      "ComidaDeRua",
      "CervejariaArtesanal",
      "ExperienciaGastronomica",
      "TourGuiado",
      "CentroHistorico",
      "Museu",
      "PatrimonioCultural",
      "PasseioHistorico",
      "ParqueDeDiversoes",
      "Piquenique",
      "ShowInfantil",
      "AtividadesAoArLivre",
      "PasseioEmFamilia",
      "FestaPrivada",
      "Balada",
      "NoiteEletronica",
      "Karaoke",
      "BarSecreto",
      "PasseioDeBike",
      "CorridaDeRua",
      "Escalada",
      "EsportesRadicais",
      "YogaAoArLivre",
    ];
  },

  // ROTAS PARA TELAS DE VISUALIZAÇÃO DE EVENTO

  async getUserSituation(id: string) {
    try {
      const response = await api.get(`/event/${id}/situation`, {
        params: { idEvent: id },
      });
      return response;
    } catch (error) {
      console.error(`Erro ao buscar o id da participação):`, error);
    }
  },

  async avaliarEvento(idEvent: string, body: any) {
    try {
      await api.post(`/event/${idEvent}/evaluation`, body);
    } catch (error) {
      console.error(`Erro ao avaliar evento):`, error);
    }
  },
};
