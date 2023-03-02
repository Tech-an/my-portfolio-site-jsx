import SideNav from "./sidenav/sidenav";
import Footer from "./footer";
import styles from "../src/styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <SideNav />
      <main style={{ width: "100%" }}>
        {children}
        <Footer />
      </main>
    </div>
  );
}
