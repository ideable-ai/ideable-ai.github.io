import { useEffect, useState } from "react";

export default function useVirtualViewport() {
  const [width, setWidth] = useState(0);
  const [scale, setScale] = useState(1);

  const handler = () => {
    setScale(Math.round((window.visualViewport?.scale || 1) * 100) / 100);
    setWidth(Math.round((window.visualViewport?.width || 0) * 100) / 100);
  };

  useEffect(() => {
    window.visualViewport?.addEventListener("resize", handler);

    handler();

    return () => {
      window.visualViewport?.removeEventListener("resize", handler);
    };
  });

  return { width, scale };
}
