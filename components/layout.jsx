import Header from "./header";
import styles from "../src/styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
