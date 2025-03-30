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

  async updateUser(userData: any) {
    try {
      const response = await api.put(`/user`, userData);
      return response.data;
    } catch (error) {
      console.error("Erro ao atualizar usuário", error);
      throw error;
    }
  },
};
