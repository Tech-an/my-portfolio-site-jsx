import styles from "../styles/career.module.css";
import Image from "next/image";
import kj from "../../public/KJ_.jpg";
import apu from "../../public/APU.jpg";
import niu from "../../public/NIU.jpg";
import nu from "../../public/NU.jpg";

import ArrowDown from "components/arrowdown/arrowdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

/**
 * Reactではpublicフォルダ以下にあるファイルは、そのままURLとしてアクセスできるようになっています。
 * 例えば、publicフォルダにNU.jpgがある場合、http://localhost:3000/NU.jpgというURLでアクセスできます。
 */

export default function Career() {
  const [bgImg, setBgImg] = useState("nu_bg.jpg");
  const [content, setContent] = useState(NU);
  const clickHandler = (imgPath, contentDef) => {
    setBgImg(imgPath);
    setContent(contentDef);
  };
  const navItem = (navTitle, navImg, bgImg, contentDef) => {
    return (
      <li onClick={() => clickHandler(bgImg, contentDef)}>
        <p>{navTitle}</p>
        <Image src={navImg} alt="" />
      </li>
    );
  };
  const contentItem = (date, title, subtitle, activities) => {
    return (
      <div className={styles.content}>
        <h3>{date}</h3>
        <h1>
          <span>{title[0]}</span>
          {title.slice(1)}
        </h1>
        <h2>
          <FontAwesomeIcon icon={faChevronRight} />
          <FontAwesomeIcon icon={faChevronRight} />
          &nbsp;
          {subtitle}
        </h2>
        <div className={styles.history}>
          <h3>
            <FontAwesomeIcon icon={faPersonBiking} />
            &nbsp; 活動内容
          </h3>
          <ul className={styles.history_content}>
            {activities.map((activeObj) => {
              return (
                <ul key={activeObj.category}>
                  <p className={styles.category_title}>
                    <FontAwesomeIcon icon={faChevronRight} />
                    &nbsp;&nbsp;{activeObj.category}
                  </p>
                  {activeObj.contents.map((text) => {
                    return <li key={text}>{text}</li>;
                  })}
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div id="Career">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>C</span>areer
      </h1>
      <section
        className={styles.container}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {contentItem(...content)}
        <ul className={styles.navigation}>
          {navItem("高校", kj, "kj_bg.jpg", KJ)}
          {navItem("大学", apu, "apu_bg.jpg", APU)}
          {navItem("研究生", niu, "niu_bg.jpg", NIU)}
          {navItem("大学院", nu, "nu_bg.jpg", NU)}
        </ul>
        <ArrowDown id="Skills" clr="black" />
      </section>
    </div>
  );
}

const NU = [
  "2020/4 - 2023/3",
  "名古屋大学大学院",
  "情報学研究科 / 複雑系科学専攻",
  [
    {
      category: "研究活動",
      contents: [
        "PSOによるハイパーパラメータ最適化に関する研究",
        "ベイジアンネットワークによる株価推定に関する研究",
      ],
    },
    {
      category: "課外活動",
      contents: [
        "NPO法人チャリティーサンタ名古屋支部 - 副代表('22)",
        "WonderChallengeAcademy - キャスト",
      ],
    },
    {
      category: "インターンシップ",
      contents: ["AKコンサルティング株式会社 - システム開発(8カ月)"],
    },
    {
      category: "Teaching Assistant",
      contents: [
        "名古屋大学 (C言語)",
        "大同大学 (C言語 / Webデザイン(HTML&CSS, React) / Excelなど)",
      ],
    },
    {
      category: "資格",
      contents: ["応用情報技術者試験 - 合格", "G検定 - 合格"],
    },
    {
      category: "講座",
      contents: ["E資格講座 - 修了", "GeekSalon/WebExpert講座 - 修了"],
    },
  ],
];

const NIU = [
  "2019/4 - 2019/9",
  "名古屋工業大学",
  "情報工学部 (研究生)",
  [
    {
      category: "研究活動",
      contents: ["視覚野に関する研究"],
    },
    {
      category: "学会発表",
      contents: [""],
    },
    {
      category: "資格",
      contents: ["TOEIC - 735点獲得"],
    },
    {
      category: "エンドレス発表",
      contents: [""],
    },
  ],
];
const APU = [
  "2015/4 - 2019/3",
  "秋田県立大学",
  "システム科学技術学部 / 電子情報システム学科",
  [
    {
      category: "研究活動",
      contents: [""],
    },
    {
      category: "学会発表",
      contents: [""],
    },
    {
      category: "サークル活動",
      contents: ["up←A - 代表('18)"],
    },
    {
      category: "実績",
      contents: ["GPA:4.02で卒業 / 入試順位 - 学科2位"],
    },
  ],
];
const KJ = [
  "2012/4 - 2015/3",
  "大館国際情報学院高等学校",
  "普通科 / 進学クラス",
  [
    {
      category: "実績",
      contents: ["入学時の学力テスト262/264位から2位まで下剋上。"],
    },
  ],
];

/**
 *             {careerItem({
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

 */
