import Image from "next/image";
import styles from "../styles/about.module.css";
import profile from "../../public/profile.jpg";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      <div className={styles.profile}>
        <figure className={styles.figure}>
          <Image src={profile} alt="profile" className={styles.img} />
        </figure>
        <div className={styles.text}>
          <h2 className={styles.myname}>佐藤 哲也 (Tetsuya Sato)</h2>
          <h3 className={styles.myjob}>名古屋大学大学院生 (M2)</h3>
          <p>
            こんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみ
            こんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみこんばんみ
          </p>
        </div>
      </div>
    </div>
  );
}
