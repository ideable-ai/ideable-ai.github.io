"use client";

import { useRef, useEffect } from "react";

interface Props {
  videoId: string;

  playerVars?: YT.PlayerOptions["playerVars"];

  onReady: (player: YT.Player) => void;
}

export default function YouTube({ videoId, playerVars, onReady }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const setup = () => {
      if (!ref.current) return;

      const player = new window.YT.Player(ref.current, {
        videoId,
        playerVars,
        events: {
          onReady: () => onReady(player),
        },
      });
    };

    if (window.YT && window.YT.Player) {
      setup();
    } else {
      window.onYouTubeIframeAPIReady = setup;
    }
  }, [videoId, playerVars, onReady]);

  return <div ref={ref}></div>;
}
