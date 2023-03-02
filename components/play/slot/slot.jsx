import { useState } from "react";
import styles from "./slot.module.css";

export default function Slot() {
  const [start, setStart] = useState(false);
  const clickHandler = (e) => {
    if (e.target.checked) {
      e.target.disabled = true;
    }
  };
  const startHandler = () => {
    setStart(true);
  };
  const resetHandler = () => {
    let chk1 = window.document.querySelector("#chk1");
    let chk2 = window.document.querySelector("#chk2");
    let chk3 = window.document.querySelector("#chk3");
    [chk1, chk2, chk3].forEach((chk) => {
      chk.disabled = false;
      chk.checked = false;
    });
    setStart(false);
  };

  return (
    <div className={styles.container}>
      <h2>Mario Matching Game</h2>
      <div className={styles.box}>
        <label htmlFor="chk1">
          <input
            type="checkbox"
            className={styles.checkbox}
            id="chk1"
            onClick={clickHandler}
          />
          <i className={start ? styles.start : ""}></i>
        </label>
        <label htmlFor="chk2">
          <input
            type="checkbox"
            className={styles.checkbox}
            id="chk2"
            onClick={clickHandler}
          />
          <i className={start ? styles.start : ""}></i>{" "}
        </label>
        <label htmlFor="chk3">
          <input
            type="checkbox"
            className={styles.checkbox}
            id="chk3"
            onClick={clickHandler}
          />
          <i className={start ? styles.start : ""}></i>{" "}
        </label>
      </div>
      <div className={styles.game_button}>
        <button className={styles.start} onClick={startHandler}>
          Start Game
        </button>
        <button className={styles.reset} onClick={resetHandler}>
          Reset Game
        </button>
      </div>
    </div>
  );
}
