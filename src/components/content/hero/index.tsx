"use client";

import Lottie from "lottie-react";
import kvLottie from "@/data/kv.lottie.json";

import ButtonBasic from "@/components/button/basic";
import styles from "./styles.module.scss";

export default function ContentHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.message}>
        <img src="/images/hero/txt_statement.svg" alt="" />

        <div className={styles.button}>
          <a href="https://forms.gle/C2KLLjGhTVvxS1mc9" target="_blank">
            <ButtonBasic height="hero">資料ダウンロード</ButtonBasic>
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <Lottie animationData={kvLottie} />
      </div>
    </div>
  );
}
