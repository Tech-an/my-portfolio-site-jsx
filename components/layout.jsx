import SideNav from "./sidenav/sidenav";
import Footer from "./footer";
import styles from "../src/styles/layout.module.css";

import Home from "@/pages/home";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sideNavHandler = () => {
    return (
      <div className={styles.side_nav_handler}>
        <FontAwesomeIcon
          icon={hidden ? faBars : faXmark}
          onClick={() => setHidden(!hidden)}
        />
      </div>
    );
  };

  return (
    <div>
      <Home />
      <div className={styles.container}>
        <div className={isMobile && hidden ? styles.hidden : null}>
          <SideNav />
        </div>
        <main className={styles.main_container}>
          {isMobile ? sideNavHandler() : null}
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
