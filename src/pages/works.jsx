import styles from "../styles/works.module.css";
import Image from "next/image";
import sample from "../../public/portfolio.jpg";

export default function Works() {
  return (
    <div className={styles.container} id="Works">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>W</span>orks
      </h1>
      <div className={styles.grid_container}>
        <div className={styles.box}>
          <div className={styles.content}>
            <Image src={sample} alt="sample" width={100} />
            <p>ポートフォリオサイト</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <Image src={sample} alt="sample" width={100} />
            <p>県章クイズアプリ</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <Image src={sample} alt="sample" width={100} />
            <p>サンプルWebアプリ(AWS)</p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.content}>
            <Image src={sample} alt="sample" width={100} />
            <p>サイドビューゲーム(Unity)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
