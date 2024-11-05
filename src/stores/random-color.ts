import { create } from "zustand";

const COLORS = [
  "#FC6600",
  "#009FBA",
  "#00695A",
  "#C3B4FF",
  "#FF7EE1",
  "#AE8700",
  "#8AA4AD",
  "#F64B4B",
] as const;

interface RandomColor {
  color: (typeof COLORS)[number];
  changeColor: () => void;
}

export const useRandomColor = create<RandomColor>((set) => {
  const changeColor = () => {
    set((state) => {
      const foundIndex = COLORS.findIndex((color) => color === state.color);

      if (foundIndex === -1) return { color: COLORS[0] };

      const nextIndex = (foundIndex + 1) % COLORS.length;

      return { color: COLORS[nextIndex] };
    });
  };

  return {
    color: COLORS[0],
    changeColor,
  };
});
