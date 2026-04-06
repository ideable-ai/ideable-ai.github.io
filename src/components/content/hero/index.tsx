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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSf24pfR0CD7g3vh0hXOrQpZhAtlYPZwQFxhk_bJO_xHu-ISjQ/viewform" target="_blank">
            <ButtonBasic height="hero">CONTACT</ButtonBasic>
          </a>
        </div>
      </div>

      <div className={styles.visual}>
        <Lottie animationData={kvLottie} />
      </div>
    </div>
  );
}
