import { create } from "zustand";
import { Users } from "@/types";
import { axiosInstance } from "@/lib/axios";

interface UserStore {
  users: Users[]
  isLoading:boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  isLoading: false,
  error: null,
  fetchUser: async () => {
    set({ isLoading: false, error: null})
    try {
      const response = await axiosInstance.get("/users");
    set({ users: response.data}) 
    } catch (error: any) {
      set({ error: error.response.data.message})
    } finally {
      set({ isLoading: false})
    }
  }
}));
