"use client";

import { useState } from "react";
import SvgExternal from "@/components/svg/external";
import styles from "./styles.module.scss";
import { useRandomColor } from "@/stores/random-color";

export default function GlobalHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const changeColor = useRandomColor((state) => state.changeColor);

  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <a href="/#">
          <img src="/images/common/logo_ideable.svg" alt="" />
        </a>
      </div>

      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className={`${styles.menu_button} ${isNavOpen ? "is-open" : ""}`}
      >
        <span></span>
        <span></span>
      </button>

      <nav className={`${styles.nav} ${isNavOpen ? "is-open" : ""}`}>
        <div className="inner">
          <a
            href="/#about"
            onClick={() => setIsNavOpen(false)}
            onMouseLeave={changeColor}
          >
            ABOUT
          </a>
          <a
            href="/#method"
            onClick={() => setIsNavOpen(false)}
            onMouseLeave={changeColor}
          >
            METHOD
          </a>
          <a
            href="/#solution"
            onClick={() => setIsNavOpen(false)}
            onMouseLeave={changeColor}
          >
            SOLUTION
          </a>
          <a
            href="/#voice"
            onClick={() => setIsNavOpen(false)}
            onMouseLeave={changeColor}
          >
            VOICE
          </a>
          <a
            href="/#update"
            onClick={() => setIsNavOpen(false)}
            onMouseLeave={changeColor}
          >
            UPDATE
          </a>
          <a
            href="https://www.notion.so/tactoinc/RECRUIT-10df77f5f0528050ab38c6b4a262d406?pvs=4"
            target="_blank"
            onMouseLeave={changeColor}
          >
            RECRUIT
            <SvgExternal />
          </a>
          <a
            href="https://forms.gle/7MxHsRn53g18HVuo6"
            target="_blank"
            onMouseLeave={changeColor}
          >
            CONTACT
          </a>
        </div>
      </nav>
    </header>
  );
}
