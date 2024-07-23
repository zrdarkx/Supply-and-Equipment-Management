import { create } from "zustand";

const useSemStore = create((set) => ({
  currentUser: null,
  setCurrentUser: (newUser) => set((state) => ({ currentUser: newUser })),
  cartEquipment: [],
  setCartEquipment: (data) => set((state) => ({ cartEquipment: data })),
  cartSupply: [],
  setCartSupply: (data) => set((state) => ({ cartSupply: data })),
}));

export { useSemStore };
