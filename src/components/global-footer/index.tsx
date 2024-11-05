import SvgIdeable from "@/components/svg/ideable";

import styles from "./styles.module.scss";

export default function GlobalFooter() {
  return (
    <footer className={styles.wrapper}>
      <p>
        <a href="https://tacto-inc.com" target="_blank">
          <img src="/images/common/logo_tacto.svg" alt="tacto/" />
        </a>
      </p>

      <a
        className={styles.address}
        href="https://maps.app.goo.gl/uDSzFuttrYy31vg19"
        target="_blank"
      >
        〒141-0021
        <br />
        東京都品川区上大崎4丁目5-28 <br className="mobile-only" />
        MEGUROHAUS 601
      </a>

      <section className={styles.links}>
        <ul className={styles.sns}>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100083338184937"
              target="_blank"
            >
              FACEBOOK
            </a>
          </li>
          <li>
            <a
              href="https://podcasters.spotify.com/pod/show/tacto"
              target="_blank"
            >
              PODCAST
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/tacto_inc/" target="_blank">
              INSTAGRAM
            </a>
          </li>
          <li>
            <a href="https://x.com/tacto_inc" target="_blank">
              X
            </a>
          </li>
        </ul>

        <a href="/privacy">Privacy Policy</a>
      </section>

      <section className={styles.copyright}>
        <SvgIdeable />
        <p>2024 // tacto Inc. all rights reserved.</p>
      </section>
    </footer>
  );
}
