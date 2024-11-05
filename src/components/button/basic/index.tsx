"use client";

import styles from "./styles.module.scss";
import { useRandomColor } from "@/stores/random-color";

interface Props {
  width?: "m" | "l";
  height?: "s" | "m" | "l" | "hero";
  font?: "jost";
  children: React.ReactNode;
}
export default function ButtonBasic({
  width,
  height = "m",
  font,
  children,
}: Props) {
  const changeColor = useRandomColor((state) => state.changeColor);

  return (
    <button
      onMouseLeave={changeColor}
      className={`${styles.button} is-height-${height} ${
        width ? "is-width-" + width : ""
      } ${font ? "is-font-" + font : ""}`}
    >
      {children}
    </button>
  );
}
