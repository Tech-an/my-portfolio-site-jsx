import Home from "./home";
import Layout from "components/layout";
import About from "./about";
import Career from "./career";

import { useState, useEffect } from "react";

import styles from "../styles/index.module.css";

export default function Index() {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const handleScroll = () => {
      setHeight((window.scrollY / totalHeight) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Home />
      <div
        className={styles.progressbar}
        style={{ height: `${height}%` }}
      ></div>
      <div className={styles.scrollPath}></div>
      <Layout>
        <section>
          <About />
          <Career />
          <h1
            style={{
              height: "200vh",
              width: "80vw",
              backgroundColor: "blue",
            }}
          >
            メインコンテンツ部
          </h1>
        </section>
      </Layout>
    </div>
  );
}
