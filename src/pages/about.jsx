import Image from "next/image";
import styles from "../styles/about.module.css";
import profile from "../../public/profile.jpg";
import ArrowDown from "components/arrowdown/arrowdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faFeather,
  faHeart,
  faEnvelope,
  faCheck,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
// import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

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

  return (
    <div className={styles.container} id="About">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>A</span>bout
      </h1>
      <div className={styles.profile}>
        <div className={styles.flex_container}>
          <figure className={styles.figure}>
            <Image src={profile} alt="profile" className={styles.img} />
          </figure>
          <div className={styles.text}>
            <h2 className={styles.myname}>佐藤 哲也 (Tetsuya Sato)</h2>
            <br />
            <h3 className={styles.myjob}>
              <FontAwesomeIcon icon={faGraduationCap} />
              &nbsp; 名古屋大学大学院生 (M2)
            </h3>
            <div className={styles.description}>
              <div className={styles.description_content}>
                <span>
                  <FontAwesomeIcon icon={faFeather} />
                </span>
                <div>
                  <span className={styles.description_title}>プロフィール</span>
                  <div className={styles.description_text}>
                    <span>静岡県</span>で生まれて<span>秋田県</span>
                    で20年間生活し、現在は<span>名古屋大学</span>
                    の院生。とにかく興味が沸いたら
                    <span>何でもやってみたい人間</span>。次年度から
                    <span>ITコンサル</span>
                    会社で社会人生活をスタート。<span>好奇心と向上心</span>
                    が強み。<span>笑顔とサウナ</span>が好物。
                    <span>ブックカフェ</span>によく出没。
                  </div>
                </div>
              </div>
              <div className={styles.description_content}>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <div>
                  <span className={styles.description_title}>連絡先</span>
                  <div className={styles.description_text}>
                    <span style={{ fontWeight: "600" }}>
                      tech.an.2.26@gmail.com
                    </span>
                  </div>
                </div>
              </div>
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

{
  /* <div className={styles.arrowdown}>
          <ArrowDown id="Career" clr="black" />
        </div> */
}
