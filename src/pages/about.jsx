import Image from "next/image";
import parse from "html-react-parser";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faFeather,
  faEnvelope,
  faCheck,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import profileImg from "public/about/imgs/profile.jpg";
import styles from "../styles/about.module.css";
import data from "public/about/data/about.json";

export default function About() {
  const likeContent = (title, items) => {
    return (
      <div className={styles.like_content}>
        <div className={styles.mask}></div>
        <h3>{title}</h3>
        <ul>
          {items.map((item) => {
            return (
              <li key={item}>
                <FontAwesomeIcon icon={faCheck} />
                &nbsp; {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  const profileTextContents = (contents) => {
    const fontAwesomeIcons = [faFeather, faEnvelope];
    return contents.map(({ title, text, keywords }, index) => {
      return (
        <div className={styles.description_content} key={title}>
          <span>
            <FontAwesomeIcon icon={fontAwesomeIcons[index]} />
          </span>
          <div>
            <h3 className={styles.description_title}>{title}</h3>
            <p className={styles.description_text}>
              {toEmphasizeKeywords(text, keywords)}
            </p>
          </div>
        </div>
      );
    });
  };
  const toEmphasizeKeywords = (text, keywords) => {
    let emphasizedText = text;
    keywords.forEach((word) => {
      emphasizedText = emphasizedText.replace(word, `<span>${word}</span>`);
    });
    return parse(emphasizedText);
  };

  return (
    <div className={styles.container} id="About">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>A</span>bout
      </h1>
      <div className={styles.profile}>
        <div className={styles.flex_container}>
          <figure className={styles.figure}>
            <Image src={profileImg} alt="profile" className={styles.img} />
          </figure>
          <div className={styles.text}>
            <h2 className={styles.myname}>
              {`${data.ja_name} (${data.en_name})`}
            </h2>
            <br />
            <h3 className={styles.myjob}>
              <FontAwesomeIcon icon={faGraduationCap} />
              &nbsp; {data.job}
            </h3>
            <div className={styles.description}>
              {profileTextContents(data.profile_contents)}
            </div>
          </div>
        </div>
        <div className={styles.like_description}>
          <div className={styles.like_title}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <span>興味のあること</span>
          </div>
          <div className={styles.like_container}>
            {likeContent("プログラミング", [
              "Webサイト/アプリ制作",
              "スマホアプリ制作",
              "ゲーム制作",
              "ブログ制作/SEO",
              "WordPress",
              "AWS",
              "ブロックチェーン/NFT",
            ])}
            {likeContent("統計モデル", [
              "DeepLearning",
              "MachineLearning",
              "データサイエンス",
            ])}
            {likeContent("科学", [
              "数学",
              "神経科学",
              "栄養/健康学",
              "宇宙/物理/化学",
            ])}
            {likeContent("ビジネス", [
              "株式投資",
              "個人事業/起業",
              "マーケティング",
              "プロマネ",
            ])}
            {likeContent("モノづくり", [
              "プログラミング系全般",
              "イラスト制作",
              "電子工作",
              "DIY",
            ])}
            {likeContent("その他", [
              "筋トレ",
              "英語/英会話",
              "マラソン",
              "トライアスロン",
              "ピアノ",
              "海外旅行",
            ])}
          </div>
        </div>
      </div>
    </div>
  );
}
