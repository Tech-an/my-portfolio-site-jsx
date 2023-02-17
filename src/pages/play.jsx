import styles from "../styles/play.module.css";

export default function Play() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>P</span>lay
      </h1>
    </div>
  );
}
