import styles from "../styles/career.module.css";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import kj from "../../public/KJ.jpg";
import apu from "../../public/APU.jpg";
import niu from "../../public/NIU.jpg";
import nu from "../../public/NU.jpg";
import ak from "../../public/AK.jpg";

export default function Career() {
  return (
    <div className={styles.container} id="Career">
      <h1 className={styles.title}>Career</h1>
      <div className={styles.career}>
        {/* <Paper elevation={3} className={styles.paper}> */}
        <ul>
          <li>
            <figure className={styles.figure}>
              <Image className={styles.img} src={kj} alt="高校のロゴ" />
            </figure>
            <div className={styles.content}>
              <h3>2012.4-2015.3</h3>
              <h2>大館国際情報学院高等学校 / 普通科</h2>
              <p>学力テストドベ2から半年で2位まで浮上。</p>
            </div>
          </li>
          <li>
            <figure className={styles.figure}>
              <Image className={styles.img} src={apu} alt="大学のロゴ" />
            </figure>
            <div className={styles.content}>
              <h3>2015.4-2019.3</h3>
              <h2>秋田県立大学 / システム科学技術学部</h2>
              <p></p>
            </div>
          </li>
          <li>
            <figure className={styles.figure}>
              <Image className={styles.img} src={niu} alt="大学のロゴ" />
            </figure>
            <div className={styles.content}>
              <h3>2019.4-2019.9</h3>
              <h2>名古屋工業大学 / 情報工学部 (研究生)</h2>
            </div>
            <p></p>
          </li>
          <li>
            <figure className={styles.figure}>
              <Image className={styles.img} src={nu} alt="大学院のロゴ" />
            </figure>
            <div className={styles.content}>
              <h3>2020.4-2021.3</h3>
              <h2>名古屋大学大学院 / 情報学研究科 (M1)</h2>
              <p></p>
            </div>
          </li>
          <li>
            <figure className={styles.figure}>
              <Image className={styles.img} src={ak} alt="会社のロゴ" />
            </figure>
            <div className={styles.content}>
              <h3>2021.4-2021.12</h3>
              <h2>AKコンサルティング株式会社 (インターン)</h2>
              <p></p>
            </div>
          </li>
          <li>
            <figure className={styles.figure}>
              <Image className={styles.img} src={nu} alt="大学院のロゴ" />
            </figure>
            <div className={styles.content}>
              <h3>2022.4-2023.3</h3>
              <h2>名古屋大学大学院 / 情報学研究科 (M2)</h2>
              <p></p>
            </div>
          </li>
        </ul>
        {/* </Paper> */}
      </div>
    </div>
  );
}
