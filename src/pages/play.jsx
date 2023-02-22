import styles from "../styles/play.module.css";
import Slot from "components/play/slot/slot";

export default function Play() {
  return (
    <div className={styles.container} id="Play">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>P</span>lay
      </h1>
      <div className={styles.game_container}>
        <Slot />
      </div>
    </div>
  );
}
