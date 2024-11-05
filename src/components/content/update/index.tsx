"use client";

import { useState } from "react";

import { useRandomColor } from "@/stores/random-color";
import HeadingLv2 from "@/components/heading/lv2";
import HeadingLv3 from "@/components/heading/lv3";
import SvgArrow from "@/components/svg/arrow";
import updatesJson from "@/data/updates.json";
import styles from "./styles.module.scss";

export default function ContentUpdate() {
  const APPEND_AT_ONCE = 10;
  const changeColor = useRandomColor((state) => state.changeColor);

  const [updates, setUpdates] = useState<typeof updatesJson>(
    updatesJson.slice(0, 3)
  );
  const readMore = () => {
    const nextLength = updates.length + APPEND_AT_ONCE;
    setUpdates(updatesJson.slice(0, nextLength));
  };

  return (
    <section id="update">
      <HeadingLv2>UPDATE</HeadingLv2>

      <div className={styles.updates}>
        {updates.map((item, index) => (
          <a
            href={item.url}
            key={index}
            target="_blank"
            onMouseLeave={changeColor}
          >
            <time>{item.date}</time>
            <p>{item.title}</p>
            <SvgArrow />
          </a>
        ))}
      </div>

      <button
        className={styles.read_more}
        onClick={readMore}
        disabled={updatesJson.length <= updates.length}
        onMouseLeave={changeColor}
      ></button>

      <div className={styles.mission}>
        <section>
          <HeadingLv3>Mission</HeadingLv3>
          <h3>人工知能を共同知性へ</h3>
          <p>
            人間は文字を発明して以来、技術による記憶の外部化に成功してきました。
            <br />
            そして生成AIは、記憶だけでなく思考を外部化し、他者と共有できる技術だと言えます。
            <br />
            私たちは、自分・他者・AIをつなぐ「共同知性」のポテンシャルを具現化するためのチャレンジを行っています。
            <br />
            <a href="https://twitter.com/takuro_n" target="_blank">
              代表X: @takuro_n
            </a>
          </p>
        </section>
      </div>
    </section>
  );
}
