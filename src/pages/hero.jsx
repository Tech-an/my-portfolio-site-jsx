import styles from "../styles/top.module.css";
import ArrowDown from "components/arrowdown/arrowdown";

export default function Top() {
  return (
    <div className={styles.container} id="Top">
      <div className={styles.hero}>
        <div className={styles.first_name}>Tetsuya</div>
        <div className={styles.last_name}>Sato.</div>
      </div>
      <ArrowDown id="About" clr={"white"} />
    </div>
  );
}
