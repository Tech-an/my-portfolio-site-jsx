import styles from "../styles/blog.module.css";

export default function Blog() {
  return (
    <div className={styles.container} id="Blog">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>B</span>log
      </h1>
    </div>
  );
}
