import { create } from "zustand";
import { post } from "@/services/api";

export const useAuthStore = create((set) => ({
  user: {},
  authenticate: async ({ email, password }: any) => {
    const response = (await post("auth/login", { email, password })).data;
    return set(() => ({ user: response.data[0] }));
  },
}));
