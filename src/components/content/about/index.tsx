import HeadingLv2 from "@/components/heading/lv2";
import HeadingLv3 from "@/components/heading/lv3";

import styles from "./styles.module.scss";

export default function ContentMethod() {
  return (
    <section id="about">
      {/* <HeadingLv2>ABOUT</HeadingLv2> */}

      <p className={styles.text}>
        <span>
          <span>AIで選択肢は増えた</span>
        </span>
        <br />
        <span>
         <span>でも、組織の決断は</span>
          <br />
          <span>速くなっていない。</span>
        </span>
      </p>

      <p className={`${styles.text} ${styles.small}`}>
        <span>
          <span>AI時代に、情報やアイデアで</span>
          <br />
          <span>困ることはありません。</span>
        </span>
        <br />
        <span>
          <span>それでも組織の意思決定が止まるのは、</span>
            <br />
            <span>全員が腹落ちするプロセスが</span>
            <br />
            <span>欠けているからです。</span>
        </span>
        <br />
        <span>
          <span>アイデアブルは、人と、AIと、</span>
          <br />
          <span>いっしょに手を動かしながら</span>
        </span>
        <br />
        <span>
          <span>選択肢を形にし、「これでいく」</span>
          <br />
          <span>と言える判断まで伴走する、</span>
        </span>
         <br />
        <span>
          <span>AIネイティブな</span>
           <br />
          <span>共創型クリエイティブスタジオです。</span>
        </span>
      </p>

      <p className={styles.text}>
        <span>
          <span>私たちにできること</span>
        </span>
        <br />
      </p>

      <p className={`${styles.text} ${styles.small}`}>
        <span>
          <span>すべてのプロセスに人とAIとの共創を組み込み、</span>
           <br />
           <span>限られた時間と人員でも、十分な選択肢を見て、</span>
        </span>
        <br />
        <span>
          <span>納得して決められる進め方を提供します。</span>
        </span>
        <br />
        <br />
        <span>
          <span>AIを、組織の力にしたい。</span>
        </span>
        <br />
        <span>
          <span>AI共創ワークショップ / AIエージェント設計 / </span>
          <br />
          <span>コンテクストエンジニアリング</span>
        </span>
        <br />
        <br />
        <span>
          <span>何をつくるべきか、決めたい。</span>
        </span>
        <br />
        <span>
          <span>新規事業・サービス構想 / ブランド戦略 / </span>
           <br />
          <span>コンセプト開発</span>
        </span>
        <br />
        <br />
        <span>
          <span>考えながら、形にしたい。</span>
        </span>
        <br />
        <span>
          <span>プロトタイプ開発 /  エクスペリエンスデザイン / </span>
           <br />
          <span>クリエイティブディレクション</span>
        </span>
        <br />
        <br />
        <span>
          <span>なぜやるのかから、問い直したい。</span>
        </span>
        <br />
        <span>
          <span>パーパス策定 / MVV設計 / 組織ビジョン言語化</span>
        </span>
      </p>

      {/* <div className={styles.rounded}>
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
            srcSet="/images/about/fig_01_desktop.avif"
          />
          <img
            src="/images/about/fig_01_mobile.avif"
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
            srcSet="/images/about/fig_02_desktop.avif"
          />
          <img
            src="/images/about/fig_02_mobile.avif"
            width="1067"
            height="600"
            alt=""
          />
        </picture>
      </div> */}

    </section>
  );
}
