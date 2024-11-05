"use client";

import { useIsClient } from "@uidotdev/usehooks";
import useVirtualViewport from "@/hooks/use-virtual-viewport";

export default function MockZoomLevel() {
  // const { width } = useWindowSize();
  const isClient = useIsClient();
  const { scale } = useVirtualViewport();

  if (!isClient) return null;

  return (
    <div style={{ position: "fixed" }}>
      {/* <p>useWindowSize().width: {width}</p> */}
      <p>w.innerWidth: {window.innerWidth}</p>
      <p>w.outerWidth: {window.outerWidth}</p>
      <p>d.d.clientWidth: {document.documentElement.clientWidth}</p>
      <p>visualViewport.width: {window.visualViewport?.width}</p>
      <p>w.devicePixelRatio: {window.devicePixelRatio}</p>
      <p>visualViewport.scale: {scale}</p>
    </div>
  );
}
