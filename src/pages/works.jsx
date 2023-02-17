import styles from "../styles/works.module.css";
import Image from "next/image";
import portfolio from "../../public/portfolio.jpg";
import quizApp from "../../public/quizApp.jpg";
import unityGame from "../../public/unitygame.jpg";

import { Paper } from "@mui/material";

import { useState } from "react";

export default function Works() {
  const workItem = (title, text, imgSrc, modal_text, dev) => {
    return (
      <div
        className={styles.box}
        onClick={() => {
          toggleModal({ title, modal_text, dev });
        }}
      >
        <div className={styles.content}>
          <Image src={imgSrc} alt="portfolio-site" />
          <p>{title}</p>
          <p className={styles.description}>{text}</p>
        </div>
      </div>
    );
  };

  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const toggleModal = (modal_content) => {
    if (showModal) {
      closeModal();
    } else {
      openModal();
      setModalContent(modal_content);
    }
    setShowModal(!showModal);
  };
  const openModal = () => {
    window.document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    window.document.body.style.overflow = "auto";
  };
  const modal = () => {
    return (
      <div className={styles.modal_bg}>
        <Paper elevation={3} className={styles.modal_container}>
          <div className={styles.modal_content}>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.modal_text}</p>
            <p>{modalContent.dev}</p>
            <button onClick={toggleModal}>Close</button>
          </div>
        </Paper>
        <div className={styles.mask} onClick={toggleModal}></div>
      </div>
    );
  };

  return (
    <div className={styles.container} id="Works">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>W</span>orks
      </h1>
      <div className="app">{showModal && modal()}</div>
      <div className={styles.grid_container}>
        {workItem(
          "ポートフォリオサイト",
          "- 現在制作中です -",
          portfolio,
          "Next.jsをベースにHTML,CSS,JavaScripを駆使して制作しました。",
          "HTML/CSS/JavaScript/React/Next.js/Vercel"
        )}
        {workItem("県章クイズアプリ", "- 現在制作中です -", quizApp)}
        {workItem("サイドビューゲーム(Unity)", "- 現在制作中です -", unityGame)}
      </div>
    </div>
  );
}
