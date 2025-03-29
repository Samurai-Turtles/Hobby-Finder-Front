import api from "@/api/axiosConfig";

export const userService = {
  async getNumberOfNotifications(notificationsPerPage: number, page: number) {
    try {
      const response = await api.get(
        `/notifications?notificationsPerPage=${notificationsPerPage}&number=${page}`,
      );
      return response.data.totalElements;
    } catch (error) {
      console.error("Erro ao buscar usuário", error);
      throw error;
    }
  },
};
