import styles from "../styles/blog.module.css";
import Image from "next/image";
import sample from "../../public/ak_bg.jpg";

import { getPostBySlug } from "libs/api";
import ComingSoon from "components/coming-soon";

export default function Blog({ title }) {
  return (
    <div className={styles.container} id="Blog">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>B</span>log
      </h1>
      <ComingSoon clr="#dc00d4" />
      {/* <div className={styles.contents}>
        <ul className={styles.blog_menu}>
          <li>新着</li>
          <li>人気</li>
          <li>ランダム</li>
        </ul>
        <article className={styles.blog_articles}>
          <article>
            <Image src={sample} alt="" />
            <h2>タイトル</h2>
            <p>更新日</p>
          </article>
          <article>
            <Image src={sample} alt="" />
            <h2>タイトル</h2>
            <p>更新日</p>
          </article>
          <article>
            <Image src={sample} alt="" />
            <h2>タイトル</h2>
            <p>更新日</p>
          </article>
          <article>
            <Image src={sample} alt="" />
            <h2>タイトル</h2>
            <p>更新日</p>
          </article>
        </article>
      </div> */}
    </div>
  );
}
