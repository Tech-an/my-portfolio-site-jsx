import Image from "next/image";
import styles from "../styles/about.module.css";
import profile from "../../public/profile.jpg";
import Paper from "@mui/material/Paper";

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
          <p>
            こんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみ
            こんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみ
          </p>
        </div>
        {/* </Paper> */}
      </div>
    </div>
  );
}
