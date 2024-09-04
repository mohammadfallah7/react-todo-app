import { create } from "zustand";

interface CategoryStore {
  category: string;
  changeCategory: (category: string) => void;
}

const useCategoryStore = create<CategoryStore>((set) => ({
  category: "All",
  changeCategory: (category) => set(() => ({ category })),
}));

export default useCategoryStore;
