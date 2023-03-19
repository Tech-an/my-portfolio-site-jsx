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
  const profileMainContainer = (
    ja_name,
    en_name,
    job,
    profile_descriptions
  ) => {
    return (
      <div className={styles.profile_main_container}>
        <figure className={styles.profile_img_container}>
          <Image
            className={styles.profile_img}
            src={profileImg}
            alt="プロフィール画像"
          />
        </figure>
        <div className={styles.profile_text_container}>
          <h2 className={styles.profile_myname}>{`${ja_name} (${en_name})`}</h2>
          <h3 className={styles.profile_myjob}>
            <FontAwesomeIcon icon={faGraduationCap} />
            &nbsp;&nbsp;{job}
          </h3>
          <div className={styles.profile_description}>
            {profileDescription(profile_descriptions)}
          </div>
        </div>
      </div>
    );
  };
  const profileDescription = (profile_descriptions) => {
    const fontAwesomeIcons = [faFeather, faEnvelope];
    return profile_descriptions.map(({ title, text, keywords }, index) => {
      return (
        <div className={styles.description_container} key={title}>
          <span>
            <FontAwesomeIcon icon={fontAwesomeIcons[index]} />
          </span>
          <div>
            <h3 className={styles.description_title}>{title}</h3>
            <p className={styles.description_text}>
              {emphasizedText(text, keywords)}
            </p>
          </div>
        </div>
      );
    });
  };
  const emphasizedText = (text, keywords) => {
    for (let word of keywords) {
      text = toEmphasize(text, word);
    }
    return parse(text);
  };
  const toEmphasize = (text, word) => {
    return text.replace(word, `<span>${word}</span>`);
  };
  const profileSubContainer = () => {
    return (
      <div className={styles.profile_sub_container}>
        <div className={styles.like_title}>
          <FontAwesomeIcon icon={faThumbsUp} />
          <span>興味のあること</span>
        </div>
        <div className={styles.like_container}>
          {myInterestingContainer("プログラミング", [
            "Webサイト/アプリ制作",
            "スマホアプリ制作",
            "ゲーム制作",
            "ブログ制作/SEO",
            "WordPress",
            "AWS",
            "ブロックチェーン/NFT",
          ])}
          {myInterestingContainer("統計モデル", [
            "DeepLearning",
            "MachineLearning",
            "データサイエンス",
          ])}
          {myInterestingContainer("科学", [
            "数学",
            "神経科学",
            "栄養/健康学",
            "宇宙/物理/化学",
          ])}
          {myInterestingContainer("ビジネス", [
            "株式投資",
            "個人事業/起業",
            "マーケティング",
            "プロマネ",
          ])}
          {myInterestingContainer("モノづくり", [
            "プログラミング系全般",
            "イラスト制作",
            "電子工作",
            "DIY",
          ])}
          {myInterestingContainer("その他", [
            "筋トレ",
            "英語/英会話",
            "マラソン",
            "トライアスロン",
            "ピアノ",
            "海外旅行",
          ])}
        </div>
      </div>
    );
  };

  const myInterestingContainer = (title, items) => {
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

  return (
    <div className={styles.container} id="About">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>A</span>bout
      </h1>
      <div className={styles.profile}>
        {profileMainContainer(
          data.ja_name,
          data.en_name,
          data.job,
          data.profile_descriptions
        )}
        {profileSubContainer()}
      </div>
    </div>
  );
}
