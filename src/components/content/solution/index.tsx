"use client";

import { useState } from "react";
import HeadingLv2 from "@/components/heading/lv2";
import HeadingLv3 from "@/components/heading/lv3";
import ButtonBasic from "@/components/button/basic";
import Modal from "@/components/modal";
import Arrow from "@/components/svg/arrow";

import styles from "./styles.module.scss";

export default function ContentSolution() {
  const [tabIndex, setTabIndex] = useState(0);
  const [modal, setModal] = useState<"case-01" | "case-02" | null>(null);

  return (
    <section id="solution">
      <HeadingLv2>SOLUTION</HeadingLv2>
      <div className={styles.tab_buttons}>
        <button
          onClick={() => setTabIndex(0)}
          className={`${tabIndex === 0 ? "is-active" : ""} workshop`}
        >
          ワークショップ
        </button>
        <button
          onClick={() => setTabIndex(1)}
          className={`${tabIndex === 1 ? "is-active" : ""} support`}
        >
          アイデア開発支援
        </button>
      </div>

      {tabIndex === 0 && (
        <div className={styles.tab_content}>
          <div className={styles.tab_content_description}>
            <section>
              <h3>ワークショップ</h3>
              <p className={styles.tab_content_p}>
                私たちのワークショップでは、AIでアイデアを生成・改善するためのロジックを学び、ChatGPTなどのツールを使用した実践を行います。
                <br />
                単なるプロンプト集の伝授やAIツール講習ではなく、アナログ手法を交えて発想ロジックを体得し、AIを使った場合との差分を体感しながら新時代の「AI発想力」を高める点が特徴です。
              </p>
            </section>
            <img
              src="/images/solution/fig_workshop.svg"
              width="690"
              height="230"
              alt=""
            />
          </div>

          <HeadingLv3>Case study</HeadingLv3>

          <p className={`${styles.tab_content_p} closer`}>
            ご要望や受講者のAIリテラシーに合わせて柔軟に対応しますので、お気軽にお問い合わせください。
          </p>

          <div className={styles.workshop_case_studies}>
            <section>
              <div className="num">01</div>
              <div className="body">
                <div className="desc">
                  <h3>
                    座学＋簡易ワークで
                    <br className="desktop-only" />
                    社内のAI活用実感を向上
                  </h3>
                  <p>
                    短時間でまずは座学を中心としつつ、
                    <br className="desktop-only" />
                    少しだけワークショップも体験してみたいという要望に
                    <br className="desktop-only" />
                    お答えしてミニワークショップを実施しました。
                  </p>
                </div>

                <div className="details">
                  <h4>Detail</h4>
                  <p>
                    IT系事業会社
                    <br />
                    形式：セミナー＋ミニワークショップ
                    <br />
                    時間：1.5時間/1日集中実施
                    <br />
                    使用する発想ロジック：1パターン
                    <br />
                    参加人数：15-20名
                    <br />
                    実施費用：30万円
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="num">02</div>
              <div className="body">
                <div className="desc">
                  <h3>
                    一日集中で
                    <br className="desktop-only" />
                    多様なロジックを短期習得
                  </h3>
                  <p>
                    できるだけ短い時間で多くのワークを取り入れたい
                    <br className="desktop-only" />
                    という要望で、2,3回に分けて実施する内容を
                    <br className="desktop-only" />
                    詰め込んだ事例です。講義後にアフターフォローも実施。
                  </p>
                </div>

                <div className="details">
                  <h4>Detail</h4>
                  <p>
                    外資系クリエイティブエージェンシー
                    <br />
                    形式：ワークショップ
                    <br />
                    時間：3時間/1日集中実施
                    <br />
                    使用する発想ロジック：3パターン
                    <br />
                    参加人数：20-25名
                    <br />
                    実施費用：80万円
                  </p>
                </div>
              </div>
            </section>
            <section>
              <div className="num">03</div>
              <div className="body">
                <div className="desc">
                  <h3>
                    多様な参加者に寄り添い
                    <br className="desktop-only" />
                    じっくりスキルを向上
                  </h3>
                  <p>
                    数回に分けて一つ一つの理解をゆっくり身につける
                    <br className="desktop-only" />
                    パターンです。初回講義の前半は座学のため、
                    <br className="desktop-only" />
                    オンラインでも配信し社内100名ほどが参加しました。
                  </p>
                </div>

                <div className="details">
                  <h4>Detail</h4>
                  <p>
                    広告制作会社
                    <br />
                    形式：ワークショップ
                    <br />
                    時間：3時間x3日
                    <br />
                    使用する発想ロジック：3パターン
                    <br />
                    参加人数：15-20名
                    <br />
                    実施費用：90万円
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}

      {tabIndex === 1 && (
        <div className={styles.tab_content}>
          <div className={styles.tab_content_description}>
            <section>
              <h3>
                アイデア
                <br className="mobile-only" />
                開発支援
              </h3>
              <p className={styles.tab_content_p}>
                「天才とは、1％のひらめきと99％の努力である」
                <br />
                この言葉は、努力の重要性を説くと共に、アイデア無き努力は無駄であるという示唆を含みます。
                <br />
                しかしながら、現代のアイデア開発は少々時間をかけ過ぎです。私たちのアイデア開発支援サービスでは、新規事業・新商品・マーケティングのアイデアを、多様なロジックで高速生成します。
                <br />
                ステイクホルダーが誰でも参加できる「見えるブレスト」を体験しませんか？
              </p>
            </section>
            <img
              src="/images/solution/fig_support.svg"
              width="690"
              height="230"
              alt=""
            />
          </div>

          <HeadingLv3>Case study</HeadingLv3>

          <p className={`${styles.tab_content_p} closer`}>
            ご要望や受講者のAIリテラシーに合わせて柔軟に対応しますので、お気軽にお問い合わせください。
          </p>

          <div className={styles.support_case_studies}>
            <section onClick={() => setModal("case-01")}>
              <div className="num">01</div>
              <h2>部門横断シナジーを目指す新規事業アイデア開発支援</h2>
              <p>クライアント: 大手フランチャイズ事業会社</p>
              <Arrow />
            </section>
            <section onClick={() => setModal("case-02")}>
              <div className="num">02</div>
              <h2>
                社員のAIリテラシー向上を兼ねたクリエイティブアイデア開発支援
              </h2>
              <p>クライアント: クリエイティブエージェンシー</p>
              <Arrow />
            </section>
          </div>
        </div>
      )}

      {modal === "case-01" && (
        <Modal
          caseNumber="01"
          imgUrl="/images/solution/pic_case-01.avif"
          onCloseClick={() => setModal(null)}
        >
          <Modal.Content>
            <h1>
              部門横断シナジーを目指す
              <br className="desktop-only" />
              新規事業アイデア開発支援
            </h1>

            <section>
              <h3>クライアント:</h3>
              <p>大手フランチャイズ事業会社</p>

              <h3>ご相談・お悩み:</h3>
              <p>
                複数ある事業グループ間のシナジーを生み出すアクションを創出する必要があり、短期間で幅のあるアイデア提案が必要。多様な関係者が目にするため、誰でも分かりやすい簡潔な内容としたい。
              </p>

              <h3>コンサルティングの概要:</h3>
              <p>
                各事業部のリソースや戦略に関する情報を収集し、データベース化。ビジネスアイデアのタイプごとの独自プロンプトや、「連結」「連想」などの発想ロジックを用いて数百のアイデアを生成。
                <br />
                コンサルタント側で30案程度選定した上でディスカッションを行い、アイデアリスト全体をクライアントへ共有。選ばれた数案について顧客体験やフィジビリティ面のブラッシュアップを行い最終納品。イメージビジュアルについても生成AIを活用。
              </p>

              <h3>成果:</h3>
              <p>
                事業コンセプトの需要調査や、他部署とのディスカッションなどのネクストアクションへと発展。「提案待ち」の状態を極力無くし、クライアント側の高い参加性を保つことができた。
              </p>
            </section>
          </Modal.Content>
        </Modal>
      )}

      {modal === "case-02" && (
        <Modal
          caseNumber="02"
          imgUrl="/images/solution/pic_case-02.avif"
          onCloseClick={() => setModal(null)}
        >
          <Modal.Content>
            <h1>
              社員のAIリテラシー向上を兼ねた
              <br className="desktop-only" />
              クリエイティブアイデア開発支援
            </h1>

            <section>
              <h3>クライアント:</h3>
              <p>クリエイティブエージェンシー</p>

              <h3>ご相談・お悩み:</h3>
              <p>
                画像や動画のAI導入は一部の社員を中心に進んでいるが、コアアイデアや企画のフェーズでは全くAIを活かせていない。クライアントへの提案が重なったときにリソースが不足しがち。
              </p>

              <h3>コンサルティングの概要:</h3>
              <p>
                特定プロジェクトに関するテーマでカスタマイズしたワークショップを月１回ペースで実施し、AI活用を営業・CD・プラナー・AD・デザイナーなど職種を横断して自分ごと化。並行して社内のプランニングチームと連携し、実務を通してアイデア開発に並走・支援。
              </p>

              <h3>成果:</h3>
              <p>
                ブランディングに関するアイデアのストックリストを作成することができ、提案に活用中。社内にAI学習の分科会ができ、発想以外の分野でも能動的な学習が発生。
              </p>
            </section>
          </Modal.Content>
        </Modal>
      )}

      <div className={styles.download}>
        <a href="https://forms.gle/C2KLLjGhTVvxS1mc9" target="_blank">
          <ButtonBasic width="m">資料ダウンロード</ButtonBasic>
        </a>
      </div>
    </section>
  );
}
