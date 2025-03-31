import api from "@/api/axiosConfig";

interface getEventParams {
  latitude: number;
  longitude: number;
  eventPerPage?: number;
  page?: number;
  eventName?: number;
}

export const eventService = {
  async getEvents({
    latitude,
    longitude,
    eventPerPage,
    page,
    eventName,
  }: getEventParams) {
    try {
      const params: any = { latitude, longitude };
      if (eventName) {
        params.eventName = eventName;
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
};
