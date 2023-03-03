import SideNav from "./sidenav/sidenav";
import Footer from "./footer";
import styles from "../src/styles/layout.module.css";

import Home from "@/pages/home";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
  const [hidden, setHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isWidePC, setIsWidePC] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 500);
      setIsWidePC(window.innerWidth > 1000);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sideNavHandler = () => {
    return (
      <div
        className={`${styles.side_nav_handler} ${
          isMobile ? styles.mobile : null
        }`}
      >
        <FontAwesomeIcon
          icon={hidden ? faBars : null}
          onClick={() => setHidden(false)}
        />
      </div>
    );
  };

  return (
    <div>
      <Home />
      <div className={`${styles.container} ${isMobile ? styles.mobile : null}`}>
        <div className={!isWidePC && hidden ? styles.hidden : null}>
          <SideNav
            hidden={!isWidePC && hidden}
            setHidden={setHidden}
            isWidePc={isWidePC}
          />
        </div>
        <main className={styles.main_container}>
          {isWidePC ? null : sideNavHandler()}
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
