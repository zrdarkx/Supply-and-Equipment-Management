import { create } from "zustand";
import { panels } from "../utils/constant";

const useSemStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (newUser) => set((state) => ({ currentUser: newUser })),
  currentPage: panels.supply,
  setCurrentPage: (page) => set((state) => ({ currentPage: page })),
}));

export { useSemStore };
