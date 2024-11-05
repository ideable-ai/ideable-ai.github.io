"use client";

import { useRandomColor } from "@/stores/random-color";
import { useIsClient } from "@uidotdev/usehooks";
import { useEffect } from "react";

export default function CssVarsRamdomColor() {
  const color = useRandomColor((state) => state.color);
  const changeColor = useRandomColor((state) => state.changeColor);
  const isClient = useIsClient();

  useEffect(() => {
    document.addEventListener("mousedown", changeColor);

    return () => {
      document.removeEventListener("mousedown", changeColor);
    };
  }, [changeColor]);

  if (!isClient) return null;

  document.documentElement.style.setProperty("--random-color", color);

  return null;
}
