import SvgIdeable from "@/components/svg/ideable";

import styles from "./styles.module.scss";

export default function GlobalFooter() {
  return (
    <footer className={styles.wrapper}>
      <a
        className={styles.address}
        href="https://www.google.com/maps/place/渋谷道玄坂東急ビル"
        target="_blank"
      >
        〒150-0043
        <br />
        東京都渋谷区道玄坂1丁目10番8号 <br className="mobile-only" />
        渋谷道玄坂東急ビル2F-C
      </a>

      <section className={styles.links}>
        <a href="/privacy">Privacy Policy</a>
      </section>

      <section className={styles.copyright}>
        <SvgIdeable />
        <p>2026 // ideable Inc. all rights reserved.</p>
      </section>
    </footer>
  );
}
