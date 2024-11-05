import HeadingLv2 from "@/components/heading/lv2";
import HeadingLv3 from "@/components/heading/lv3";

import styles from "./styles.module.scss";

export default function ContentVoice() {
  return (
    <section id="voice">
      <HeadingLv2>VOICE</HeadingLv2>

      <HeadingLv3>Data</HeadingLv3>

      <div className={styles.data}>
        <section>
          ワークショップの
          <br />
          アンケート結果
        </section>
        <section className="percentage">
          <p className="percent">
            92<span>%</span>
          </p>
          <p>平均満足度</p>
          <div className="meter">
            <img src="/images/voice/fig_92.svg" alt="" />
          </div>
        </section>
        <section className="percentage">
          <p className="percent">
            88<span>%</span>
          </p>
          <p>平均活用実感</p>
          <p className="note">※ 講義は実務に役立つか</p>
          <div className="meter">
            <img src="/images/voice/fig_88.svg" alt="" />
          </div>
        </section>
      </div>

      <HeadingLv3>Review</HeadingLv3>

      <div className={styles.reviews}>
        <section>
          明日にでも実践的に取り入れられる内容で、生成AIをもっと活用したい！とわくわくしています。
        </section>
        <section>
          AIのスピード感は驚異的でした。しかも絶対私の脳からは出てこないアイデア。
          <br />
          上手く使っていきたいです。
        </section>
        <section>
          短い時間で幅のある事業案を検討することができ、思い悩む無駄な時間が少なく済みました。
        </section>
      </div>

      <HeadingLv3>Clients</HeadingLv3>

      <div className={styles.clients}>
        <div>
          <img
            src="/images/voice/logo_keio-spring.png"
            width="270"
            height="100"
            alt="Keio-SPRING"
          />
        </div>
        <div>
          <img
            src="/images/voice/logo_bassdrum.png"
            width="300"
            height="49"
            alt="BASSDRUM"
          />
        </div>
        <div>
          <img
            src="/images/voice/logo_maccan.png"
            width="300"
            height="69"
            alt="McCANN WORLDGROUP"
          />
        </div>
        <div>
          <img
            src="/images/voice/logo_shinto-tsushin.png"
            width="300"
            height="46"
            alt="SHINTO TSUSHIN"
          />
        </div>
        <div>
          <img
            src="/images/voice/logo_hakuten.png"
            width="300"
            height="32"
            alt="HAKUTEN"
          />
        </div>
      </div>
    </section>
  );
}
