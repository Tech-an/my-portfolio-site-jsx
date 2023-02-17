import styles from "../styles/career.module.css";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import kj from "../../public/KJ_.jpg";
import apu from "../../public/APU.jpg";
import niu from "../../public/NIU.jpg";
import nu from "../../public/NU.jpg";
import ak from "../../public/AK.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Career() {
  const careerItem = ({ years, imgSrc, imgAlt, title, text }) => {
    return (
      <li>
        <div className={styles.career_item}>
          <h3 className={styles.year}>{years}</h3>
          <Paper elevation={3} className={styles.inner_paper}>
            <figure className={styles.figure}>
              <Image className={styles.img} src={imgSrc} alt={imgAlt} />
            </figure>
            <div className={styles.content}>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </Paper>
        </div>
      </li>
    );
  };

  return (
    <div className={styles.container} id="Career">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>C</span>areer
      </h1>
      <div className={styles.career}>
        <Paper elevation={3} className={styles.outer_paper}>
          <ul>
            {careerItem({
              years: "2012.4 - 2015.3",
              imgSrc: kj,
              imgAlt: "高校のロゴ",
              title: "大館国際情報学院高等学校 / 普通科",
              text: "入学時の学力テスト262/264位から2位まで下剋上。",
            })}
            {careerItem({
              years: "2015.4 - 2019.3",
              imgSrc: apu,
              imgAlt: "大学のロゴ",
              title: "秋田県立大学 / システム科学技術学部",
              text: "GPA4.02で卒業。在学時は神経科学の研究に従事。up←a代表。",
            })}
            {careerItem({
              years: "2019.4 - 2019.9",
              imgSrc: niu,
              imgAlt: "大学のロゴ",
              title: "名古屋工業大学 / 情報工学部 (研究生)",
              text: "視覚野に関する研究に従事。電気学会で発表経験あり。",
            })}
            {careerItem({
              years: "2020.4 - 2021.3",
              imgSrc: nu,
              imgAlt: "大学のロゴ",
              title: "名古屋大学大学院 / 情報学研究科 (M1)",
              text: "ベイジアンネットワークに関する研究に従事。チャリティーサンタ名古屋支部所属。",
            })}
            {careerItem({
              years: "2021.4 - 2022.1",
              imgSrc: ak,
              imgAlt: "会社のロゴ",
              title: "AKコンサルティング株式会社 (インターン)",
              text: "",
            })}
            {careerItem({
              years: "2022.4 - 2023.3",
              imgSrc: nu,
              imgAlt: "大学のロゴ",
              title: "名古屋大学大学院 / 情報学研究科 (M2)",
              text: "",
            })}
          </ul>
        </Paper>
      </div>
    </div>
  );
}
