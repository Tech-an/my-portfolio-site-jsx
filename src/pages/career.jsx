import styles from "../styles/career.module.css";
import Image from "next/image";
import kj from "../../public/KJ_.jpg";
import apu from "../../public/APU.jpg";
import niu from "../../public/NIU.jpg";
import nu from "../../public/NU.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonBiking,
  faChevronRight,
  faPersonRunning,
  faCarSide,
  faPlane,
  faGraduationCap,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import { faLeanpub } from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect } from "react";

/**
 * Reactではpublicフォルダ以下にあるファイルは、そのままURLとしてアクセスできるようになっています。
 * 例えば、publicフォルダにNU.jpgがある場合、http://localhost:3000/NU.jpgというURLでアクセスできます。
 */

export default function Career() {
  const [isWidePC, setIsWidePC] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsWidePC(window.innerWidth > 1200);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          &nbsp;&nbsp;
          {subtitle}
        </h2>
        <div className={styles.history}>
          <h3>
            <FontAwesomeIcon icon={faPersonBiking} />
            &nbsp;&nbsp; 活動内容
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
  const navContainer = () => {
    return (
      <ul className={styles.navigation}>
        {navItem("高校", kj, "kj_bg.jpg", KJ)}
        <FontAwesomeIcon icon={faPersonRunning} className={styles.nav_icon} />
        {navItem("大学", apu, "apu_bg.jpg", APU)}
        <FontAwesomeIcon icon={faPersonBiking} className={styles.nav_icon} />
        {navItem("研究生", niu, "niu_bg.jpg", NIU)}
        <FontAwesomeIcon icon={faCarSide} className={styles.nav_icon} />
        {navItem("大学院", nu, "nu_bg.jpg", NU)}
        <FontAwesomeIcon icon={faPlane} className={styles.nav_icon} />
      </ul>
    );
  };

  const [selectedCareer, setSelectedCareer] = useState("nu");

  return (
    <div id="Career">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>C</span>areer
      </h1>
      <section
        className={`${styles.container} ${isWidePC ? styles.twoColumn : null}`}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {isWidePC ? (
          <div className={styles.side_navigation_container}>
            <ul className={styles.side_navigation}>
              <h2>
                <FontAwesomeIcon icon={faLeanpub} />
                &nbsp; 学歴
              </h2>
              <li
                onClick={() => {
                  clickHandler("kj_bg.jpg", KJ);
                  setSelectedCareer("kj");
                }}
              >
                {selectedCareer == "kj" ? (
                  <FontAwesomeIcon icon={faGraduationCap} fontSize="1.2rem" />
                ) : (
                  <FontAwesomeIcon icon={faCircle} fontSize="0.8rem" />
                )}
                <p className={selectedCareer == "kj" ? styles.selected : null}>
                  &nbsp;&nbsp;大館国際情報学院高等学校
                </p>
              </li>
              <p
                style={{
                  borderLeft: "1px solid white",
                  height: "30px",
                  transform: "translateX(6px)",
                }}
              ></p>
              <li
                onClick={() => {
                  clickHandler("apu_bg.jpg", APU);
                  setSelectedCareer("apu");
                }}
              >
                {selectedCareer == "apu" ? (
                  <FontAwesomeIcon icon={faGraduationCap} fontSize="1.2rem" />
                ) : (
                  <FontAwesomeIcon icon={faCircle} fontSize="0.8rem" />
                )}
                <p className={selectedCareer == "apu" ? styles.selected : null}>
                  &nbsp;&nbsp;秋田県立大学
                </p>
              </li>
              <p
                style={{
                  borderLeft: "1px solid white",
                  height: "30px",
                  transform: "translateX(6px)",
                }}
              ></p>
              <li
                onClick={() => {
                  clickHandler("niu_bg.jpg", NIU);
                  setSelectedCareer("niu");
                }}
              >
                {selectedCareer == "niu" ? (
                  <FontAwesomeIcon icon={faGraduationCap} fontSize="1.2rem" />
                ) : (
                  <FontAwesomeIcon icon={faCircle} fontSize="0.8rem" />
                )}
                <p className={selectedCareer == "niu" ? styles.selected : null}>
                  &nbsp;&nbsp;名古屋工業大学
                </p>
              </li>
              <p
                style={{
                  borderLeft: "1px solid white",
                  height: "30px",
                  transform: "translateX(6px)",
                }}
              ></p>
              <li
                onClick={() => {
                  clickHandler("nu_bg.jpg", NU);
                  setSelectedCareer("nu");
                }}
              >
                {selectedCareer == "nu" ? (
                  <FontAwesomeIcon icon={faGraduationCap} fontSize="1.2rem" />
                ) : (
                  <FontAwesomeIcon icon={faCircle} fontSize="0.8rem" />
                )}
                <p className={selectedCareer == "nu" ? styles.selected : null}>
                  &nbsp;&nbsp;名古屋大学大学院
                </p>
              </li>
            </ul>
          </div>
        ) : (
          navContainer()
        )}
        {contentItem(...content)}
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
