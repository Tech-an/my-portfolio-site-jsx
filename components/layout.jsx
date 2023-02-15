import SideNav from "./sidenav/sidenav";
import styles from "../src/styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SideNav />
      <main>{children}</main>
    </div>
  );
}
