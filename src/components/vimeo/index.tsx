"use client";

import { useRef, useEffect } from "react";
import Player from "@vimeo/player";

interface Props {
  videoId: number;
  onReady: (player: Player) => void;
}

export default function Vimeo({ videoId, onReady }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const player = new Player(ref.current, { id: videoId });

    onReady(player);
  }, [videoId, onReady]);

  return <div ref={ref}></div>;
}
