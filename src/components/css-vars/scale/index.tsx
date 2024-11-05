"use client";

// import { useWindowSize } from "@uidotdev/usehooks";
import useVirtualViewport from "@/hooks/use-virtual-viewport";

export default function CssVarsScale() {
  const { scale, width } = useVirtualViewport();

  const DESKTOP_BASIS_WIDTH = 1440;
  const MOBILE_BASIS_WIDTH = 390;

  if (!scale || !width) return null;

  const dd = document.documentElement;

  dd.style.setProperty(
    "--scale-desktop",
    String(width / DESKTOP_BASIS_WIDTH) || "1"
  );

  if (scale === 1) {
    dd.style.setProperty(
      "--scale-mobile",
      String(width / MOBILE_BASIS_WIDTH) || "1"
    );
  } else {
    dd.style.setProperty(
      "--scale-mobile",
      String((width / MOBILE_BASIS_WIDTH) * scale) || "1"
    );
  }

  dd.dataset.init = "true";

  return null;
}
