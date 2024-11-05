import HeadingLv2 from "@/components/heading/lv2";
import HeadingLv3 from "@/components/heading/lv3";

import styles from "./styles.module.scss";

export default function ContentMethod() {
  return (
    <section id="about">
      <HeadingLv2>ABOUT</HeadingLv2>

      <p className={styles.text}>
        <span>
          <span>AIで発想するための</span>
          <br />
          <span>独自メソッドで、</span>
        </span>
        <br />
        <span>
          <span>ビジネスに選択肢を</span>
        </span>
      </p>

      <p className={`${styles.text} ${styles.small}`}>
        <span>
          <span>生成AIのありきたりなアイデアに、</span>
          <br />
          <span>がっかりしたことはありませんか？</span>
        </span>
        <br />
        <span>
          <span>そんな人はAIのクリエイティブポテンシャルを、</span>
          <br />
          <span>まだ引き出しきれていないかもしれません。</span>
        </span>
        <br />
        <span>
          <span>「アイデアブル」は、AIを頭脳の延長として</span>
          <br />
          <span>使いこなすための独自メソッドです。</span>
        </span>
        <br />
        <span>
          <span>既成概念にとらわれない幅広い切り口を</span>
          <br />
          <span>検討し、あなたの仕事をアイデアフルにします。</span>
        </span>
      </p>

      <div className={styles.rounded}>
        <video
          className={styles.video}
          src="/videos/about.mp4"
          muted
          playsInline
          autoPlay
          loop
        ></video>
      </div>

      <HeadingLv3>Problem</HeadingLv3>

      <div className={styles.rounded}>
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="/images/about/fig_01_desktop.png"
          />
          <img
            src="/images/about/fig_01_mobile.png"
            width="1067"
            height="600"
            alt=""
          />
        </picture>
      </div>

      <HeadingLv3>Our Approach</HeadingLv3>

      <div className={styles.rounded}>
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="/images/about/fig_02_desktop.png"
          />
          <img
            src="/images/about/fig_02_mobile.png"
            width="1067"
            height="600"
            alt=""
          />
        </picture>
      </div>
    </section>
  );
}
