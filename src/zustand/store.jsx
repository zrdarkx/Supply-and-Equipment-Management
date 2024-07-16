import { create } from "zustand";

const useSemStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (newUser) => set((state) => ({ currentUser: newUser })),
}));

export { useSemStore };
