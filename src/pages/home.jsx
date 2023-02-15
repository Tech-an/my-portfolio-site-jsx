import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.slideshow}>
        <h1 className={styles.title}>
          <span>T</span>etsuya <span>S</span>ato.
        </h1>
      </div>
    </div>
  );
}
