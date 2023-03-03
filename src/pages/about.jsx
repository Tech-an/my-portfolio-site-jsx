import Image from "next/image";
import styles from "../styles/about.module.css";
import profile from "../../public/profile.jpg";
import Paper from "@mui/material/Paper";
import ArrowDown from "components/arrowdown/arrowdown";

export default function About() {
  return (
    <div className={styles.container} id="About">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>A</span>bout
      </h1>
      <div className={styles.profile}>
        <figure className={styles.figure}>
          <Image src={profile} alt="profile" className={styles.img} />
        </figure>
        {/* <Paper elevation={3} className={styles.paper}>  */}
        <div className={styles.text}>
          <h2 className={styles.myname}>佐藤 哲也 (Tetsuya Sato)</h2>
          <h3 className={styles.myjob}>名古屋大学大学院生 (M2)</h3>
          <div>
            <p>
              秋田県出身の大学生。現在は名古屋大学の院生、次年度からITコンサル会社で社会人生活をスタート。
              IT系・科学一般・社会・海外など何でも興味がある好奇心が強み。
              マラソンとテトリスとサウナが好き。bookカフェが生息地。
            </p>
          </div>
        </div>
        <div className={styles.arrowdown}>
          {/* <ArrowDown id="Career" clr="black" /> */}
        </div>
        {/* </Paper> */}
      </div>
    </div>
  );
}
