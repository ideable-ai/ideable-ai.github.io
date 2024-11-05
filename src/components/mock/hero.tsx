"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  useWindowSize,
  useWindowScroll,
  useIsClient,
} from "@uidotdev/usehooks";

export default function SectionHero() {
  const { height } = useWindowSize();
  const isClient = useIsClient();
  const [{ y }] = useWindowScroll();
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    setInnerHeight(window.innerHeight);
  }, [y, height]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.test}
        style={{ height: isClient ? innerHeight + "px" : 0 }}
      >
        {isClient && height} / {innerHeight}
      </div>

      <div className={styles.test2}>{y}</div>
    </div>
  );
}
