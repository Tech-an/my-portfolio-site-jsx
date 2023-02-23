import styles from "./career-upgrade.module.css";
import Image from "next/image";
import kj from "../../public/KJ_.jpg";
import apu from "../../public/APU.jpg";
import niu from "../../public/NIU.jpg";
import nu from "../../public/NU.jpg";

import ArrowDown from "components/arrowdown/arrowdown";
import Slide3D from "./slide-3d";

import { useState } from "react";

/**
 * Reactではpublicフォルダ以下にあるファイルは、そのままURLとしてアクセスできるようになっています。
 * 例えば、publicフォルダにNU.jpgがある場合、http://localhost:3000/NU.jpgというURLでアクセスできます。
 */

export default function CareerUpgrade() {
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
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <div>
          <h3 className={styles.history}>- 活動内容 -</h3>
          <ul>
            {activities.map((text) => {
              return <li key={text}>{text}</li>;
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
        {/* <Slide3D /> */}
        <ul className={styles.navigation}>
          {navItem("高校", kj, "kj_bg.jpg", KJ)}
          {navItem("大学", apu, "apu_bg.jpg", APU)}
          {navItem("研究生", niu, "niu_bg.jpg", NIU)}
          {navItem("大学院", nu, "nu_bg.jpg", NU)}
        </ul>
        <ArrowDown id="Skills" clr="black" />{" "}
      </section>
    </div>
  );
}

const NU = [
  "2020/4 - 2023/3",
  "名古屋大学大学院",
  "情報学研究科 / 複雑系科学専攻",
  [
    "研究活動 : PSOによるハイパーパラメータ最適化に関する研究",
    "研究活動 : ベイジアンネットワークによる株価推定に関する研究",
    "課外活動 : NPO法人チャリティーサンタ名古屋支部 - 副代表('22)",
    "課外活動 : WonderChallengeAcademy - キャスト",
    "インターン経験 : AKコンサルティング株式会社 - システム開発",
    "TeachingAssistant : 名古屋大学 (C言語)",
    "TeachingAssistant : 大同大学 (C言語 / Webデザイン(HTML&CSS, React) / Excelなど)",
    "資格 : 応用情報技術者試験 - 合格",
    "資格 : G検定 - 合格",
    "講座 : E資格講座 - 修了",
    "講座 : GeekSalon/WebExpert講座 - 修了",
  ],
];

const NIU = [
  "2019/4 - 2019/9",
  "名古屋工業大学",
  "情報工学部 (研究生)",
  [
    "研究活動 : 視覚野に関する研究",
    "学会発表 : ",
    "資格 : TOEIC - 735点獲得",
    "エンドレス発表",
  ],
];
const APU = [
  "2015/4 - 2019/3",
  "秋田県立大学",
  "システム科学技術学部 / 電子情報システム学科",
  [
    "研究活動 : ",
    "学会発表 : ",
    "サークル活動 : up←A - 代表('18)",
    "実績 : GPA:4.02で卒業 / 入試順位 - 学科2位",
  ],
];
const KJ = [
  "2012/4 - 2015/3",
  "大館国際情報学院高等学校",
  "普通科 / 進学クラス",
  ["実績 : 入学時の学力テスト262/264位から2位まで下剋上。"],
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
