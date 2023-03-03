import styles from "./accordion.module.css";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlassPlus,
  faMagnifyingGlassMinus,
} from "@fortawesome/free-solid-svg-icons";

export default function Accordion({ children, text }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordion} onClick={() => setOpen(!open)}>
      <div className={styles.contentBx}>
        <div className={open ? styles.active : null}>
          <div className={styles.label}>{children}</div>
          <div className={styles.content}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
