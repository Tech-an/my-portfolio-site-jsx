import styles from "../styles/home-container.module.css";
import ArrowDown from "components/arrowdown/arrowdown";

import { useState, useEffect } from "react";

export default function Home() {
  const [isEffect, setIsEffect] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 500);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={styles.container}
      id="Home"
      // onClick={() => setIsEffect(!isEffect)}
    >
      <div className={styles.slideshow}>
        <div className={styles.title}>
          <div
            className={`${styles.title_first} ${
              isEffect ? styles.title_effect : null
            } `}
          >
            Tetsuya
          </div>
          <div
            className={`${styles.title_second} ${
              isEffect ? null : styles.title_effect
            } `}
          >
            Sato.
          </div>
        </div>
      </div>
      <ArrowDown id="About" clr={"white"} />
      {/* <ArrowDown id="About" clr={isMobile ? "white" : "black"} /> */}
    </div>
  );
}
