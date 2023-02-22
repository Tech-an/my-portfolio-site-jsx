import styles from "../styles/blog.module.css";

export default function Blog() {
  return (
    <div className={styles.container} id="Blog">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>B</span>log
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
          color: "#fff",
          textShadow: "1px 1px 2px red, 0 0 1em #dc00d4, 0 0 0.2em #dc00d4",
        }}
      >
        <h1>Coming Soon...</h1>
      </div>
    </div>
  );
}
