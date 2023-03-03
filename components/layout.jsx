import SideNav from "./sidenav/sidenav";
import Footer from "./footer";
import styles from "../src/styles/layout.module.css";

import Home from "@/pages/home";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Layout({ children }) {
  const [hidden, setHidden] = useState(true);
  const sideNavHandler = () => {
    return (
      <div className={styles.side_nav_handler}>
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
      <div className={styles.container}>
        <main className={styles.main_container}>
          {sideNavHandler()}
          {children}
          <Footer />
        </main>
        <div className={hidden ? styles.hidden : null}>
          <SideNav hidden={hidden} setHidden={setHidden} />
        </div>
      </div>
    </div>
  );
}
