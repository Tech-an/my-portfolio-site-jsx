import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.slideshow}>
        <div className={styles.title}>
          <h1>Tetsuya Sato.</h1>
          <p>welcom to my portfolio site!</p>
        </div>
      </div>
    </div>
  );
}
