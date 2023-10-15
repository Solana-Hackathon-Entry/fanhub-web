import { create } from "zustand";
import { post, get } from "@/services/api";

export const useAuthStore = create((set) => ({
  user: {},
  authenticate: async ({ email, password }: any) => {
    const response = (await post("auth/login", { email, password })).data;
    return set(() => ({ user: response.data[0] }));
  },
}));

export const useNftStore = create((set) => ({
  data: [],
  get: async () => {
    const response = (await get("nfts/")).data;
    return set(() => ({ data: response.data }));
  },
}));
