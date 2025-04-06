import api from "@/api/axiosConfig";
import ParticipantItem from "@/components/events/ParticipantItem";

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
        dateInicio: event.begin ? event.begin : "2025-10-03T01:00:00.594Z",
        dateFim: event.end ? event.end : "2025-10-04T01:00:00.594Z",
        location: event.local
          ? `${event.local.street}, ${event.local.number}, ${event.local.district}, ${event.local.city} - ${event.local.state}`
          : "street, number, district, city - state",
        lat: event.local ? event.local.latitude : 0,
        lon: event.local ? event.local.longitude : 0,
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

  async getEventsByUserId(userId: string) {
    try {
      const response = await api.get(`/eventUser/${userId}`);
      return response.data.content;
    } catch (error) {
      console.error(`Erro ao buscar eventos o usuário (ID: ${userId}):`, error);
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
      console.error(`Erro ao buscar o status do usuário):`, error);
    }
  },

  async eventoJaAvaliado(id: string) {
    try {
      const response = await this.getUserSituation(id);
      if (response) {
        const idParticipation = response.data.idParticipation;
        if (idParticipation) {
          const response2 = await api.get(
            `/user/${idParticipation}/evaluation`,
          );
          return response2.data.rateSituationEnum.includes("ALREADY_RATED");
        }
        return undefined;
      }
      return undefined;
    } catch (error) {
      console.error(`Erro ao buscar o status do usuário):`, error);
    }
  },

  async avaliarEvento(idEvent: string, body: any) {
    try {
      await api.post(`/event/${idEvent}/evaluation`, body);
    } catch (error) {
      console.error(`Erro ao avaliar evento):`, error);
    }
  },

  async solicitarParticipacao(idEvent: string) {
    try {
      await api.post(`/event/${idEvent}/request`);
      console.log(
        `Solicitação de participação enviada para o evento ${idEvent}`,
      );
      window.location.reload();
    } catch (error) {
      console.error(
        `Erro ao solicitar participação no evento ${idEvent}:`,
        error,
      );
      throw error;
    }
  },

  async cancelarSolicitacao(idEvent: string) {
    try {
      // Primeiro busca o ID da solicitação ativa
      const response = await api.get(`/user/request`);
      const request = response.data.content.find(
        (item: any) => item.event.id === idEvent,
      );
      if (!request) {
        throw new Error("ID da solicitação não encontrado.");
      }

      await api.delete(`/user/request/${request.id}`);

      console.log(
        `Solicitação de participação cancelada para o evento ${idEvent}`,
      );
      window.location.reload();
    } catch (error) {
      console.error(
        `Erro ao cancelar solicitação no evento ${idEvent}:`,
        error,
      );
      throw error;
    }
  },

  async confirmarPresenca(idEvent: string) {
    try {
      const response = await api.get(
        `/event/{id}/situation?idEvent=${idEvent}`,
      );
      const participationId = response.data?.idParticipation;
      console.log(participationId);
      if (!participationId) {
        console.error("ID de participação não encontrado.");
      }

      await api.put(
        `/event/${idEvent}/participation/${participationId}?userParticipation=CONFIRMED_PRESENCE`,
      );
      console.log(`Presença confirmada para o evento ${idEvent}`);
      window.location.reload();
    } catch (error) {
      console.error(`Erro ao confirmar presença no evento ${idEvent}:`, error);
      window.location.reload();
      throw error;
    }
  },

  async cancelarPresenca(idEvent: string) {
    try {
      const response = await api.get(
        `/event/{id}/situation?idEvent=${idEvent}`,
      );
      const participationId = response.data?.idParticipation;
      console.log(participationId);
      if (!participationId) {
        console.error("ID de participação não encontrado.");
        return;
      }

      await api.delete(
        `/event/${idEvent}/participation/${participationId}/user-auth`,
      );
      console.log("Participação cancelada com sucesso.");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao cancelar participação:", error);
    }
  },
};
