import styles from "../styles/home.module.css";
import ArrowDown from "components/arrowdown/arrowdown";

export default function Home() {
  return (
    <div className={styles.container} id="Home">
      <div className={styles.slideshow}>
        <div className={styles.title}>
          <h1>Tetsuya Sato.</h1>
          <p>welcome to my portfolio site!</p>
          <ArrowDown id="About" />
        </div>
      </div>
    </div>
  );
}
