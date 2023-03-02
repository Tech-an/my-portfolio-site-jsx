import styles from "./progressbar.module.css";
import { useState, useEffect } from "react";

export default function ProgressBar() {
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
      <div
        className={styles.progressbar}
        style={{ height: `${height}%` }}
      ></div>
      <div className={styles.scrollPath}></div>
    </div>
  );
}
