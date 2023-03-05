import styles from "../styles/play.module.css";
import Slot from "components/play/slot/slot";

import { useState } from "react";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import slot from "../../public/slot.png";

export default function Play() {
  const [gameName, setGameName] = useState("slot");
  const [openMenu, setOpenMenu] = useState(false);
  const gameContainer = () => {
    switch (gameName) {
      case "slot":
        return <Slot />;
      default:
        return null;
    }
  };
  const menuContainer = (gameTitle, imgPath) => {
    return (
      <div
        onClick={() => {
          setGameName(gameTitle);
          setOpenMenu(!openMenu);
        }}
        className={gameName == gameTitle ? styles.selected : null}
      >
        <Image src={imgPath} alt="" />
        <h3>{gameTitle}</h3>
      </div>
    );
  };

  return (
    <div className={styles.container} id="Play">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>P</span>lay
      </h1>
      <div className={styles.game_container}>{gameContainer()}</div>
      <div className={styles.game_menus}>
        <button
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        >
          ゲーム一覧
        </button>
        {openMenu ? (
          <div className={styles.game_menus_container}>
            <div className={styles.game_menus_content}>
              <div
                onClick={() => {
                  setOpenMenu(!openMenu);
                }}
                className={styles.close_button}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </div>
              <h2 className={styles.menu_title}>ゲーム一覧</h2>
              <nav>
                {menuContainer("slot", slot)}
                {menuContainer("slot", slot)}
                {/* {menuContainer("slot", slot)}
                {menuContainer("slot", slot)}
                {menuContainer("slot", slot)}
                {menuContainer("slot", slot)}
                {menuContainer("slot", slot)} */}
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
