"use client";

import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect, useCallback } from "react";
import Player from "@vimeo/player";

import HeadingLv2 from "@/components/heading/lv2";
import HeadingLv3 from "@/components/heading/lv3";
import ButtonBasic from "@/components/button/basic";
import SvgArrow from "@/components/svg/arrow";
import SvgArrowSmall from "@/components/svg/arrow-small";
import Vimeo from "@/components/vimeo";
import { useRandomColor } from "@/stores/random-color";

import styles from "./styles.module.scss";

export default function ContentMethod() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ containScroll: false });
  const [player, setPlayer] = useState<Player>();
  const [isVideoStarted, setIsVideoStarted] = useState(false);

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const changeColor = useRandomColor((state) => state.changeColor);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  const playVideo = () => {
    if (!player) return;

    setIsVideoStarted(true);
    player.play();
  };

  return (
    <section id="method">
      <HeadingLv2>METHOD</HeadingLv2>

      <HeadingLv3>Process</HeadingLv3>

      <div className={`${styles.rounded} ${isVideoStarted && "disabled"}`}>
        <div className={styles.video}>
          <Vimeo videoId={1023135716} onReady={(player) => setPlayer(player)} />

          {!isVideoStarted && (
            <div
              className={styles.video_overlay}
              onMouseLeave={changeColor}
              onClick={playVideo}
            >
              <div></div>
            </div>
          )}
        </div>
      </div>

      <p className={styles.text}>
        あらかじめ「逆転」の発想プロンプトを組み込んだChatGPTで、３分でコーヒーの新商品企画を生成するデモ動画。
        <br />
        発想のロジックを具体的に指示することで、AIのアウトプット品質は大幅に高めることができます。
      </p>

      <HeadingLv3>Outcome</HeadingLv3>

      <div className={styles.rounded}>
        <img
          src="/images/method/fig_outcome.avif"
          width="1170"
          height="660"
          alt=""
        />
      </div>

      <p className={styles.text}>
        生成されたコーヒーの新商品企画サンプル。逆転のロジックに基づくことで、コーヒーは「活力を高める」という一般常識に対して
        <br />
        「瞑想やリラックスに用いる」という新しい切り口を素早く生み出すことができました。
      </p>

      <HeadingLv3>Framework</HeadingLv3>

      <div className={styles.expanded}>
        <div className={styles.embla} ref={emblaRef}>
          <div className={styles.embla_container}>
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className={`${styles.embla_slide} ${styles.rounded}`}
              >
                <img
                  src={`/images/method/fig_framework${index}.avif`}
                  width="1170"
                  height="660"
                  alt=""
                />
              </div>
            ))}
          </div>

          <button
            className={`${styles.embla_button} prev`}
            onClick={() => emblaApi?.scrollPrev()}
            disabled={prevBtnDisabled}
            onMouseLeave={changeColor}
          >
            <span className="desktop-only">
              <SvgArrow />
            </span>
            <span className="mobile-only">
              <SvgArrowSmall />
            </span>
          </button>

          <button
            className={`${styles.embla_button} next`}
            onClick={() => emblaApi?.scrollNext()}
            disabled={nextBtnDisabled}
            onMouseLeave={changeColor}
          >
            <span className="desktop-only">
              <SvgArrow />
            </span>
            <span className="mobile-only">
              <SvgArrowSmall />
            </span>
          </button>
        </div>
      </div>

      <p className={styles.text}>
        発想のエンジニアリングが可能な時代に、AIを活用したさまざまな発想フレームワークを使いこなすためのメソッドがあります。
        <br />
        便利なプロンプト集の伝授ではなく、AIを使いこなす脳へのアップデートへ。
      </p>

      <div>
        <a href="https://forms.gle/C2KLLjGhTVvxS1mc9" target="_blank">
          <ButtonBasic width="m">資料ダウンロード</ButtonBasic>
        </a>
      </div>
    </section>
  );
}
