import styles from "../styles/works.module.css";
import Image from "next/image";

import Modal from "components/modal/modal";
import workData from "public/works/data/works.json";

import { useState } from "react";

export default function Works() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const workItem = ({
    title,
    text,
    subtext,
    img_path,
    img_width,
    img_height,
    grid_column,
    grid_row,
    about,
    imgs,
  }) => {
    return (
      <div
        className={styles.box}
        onClick={() => {
          setModalContent({ title, text, subtext, about, imgs });
          setShowModal(true);
        }}
        style={{
          "grid-column": `span ${grid_column}`,
          "grid-row": `span ${grid_row}`,
        }}
        key={title}
      >
        <div className={styles.content}>
          <Image
            src={img_path}
            alt="portfolio-site"
            width={img_width}
            height={img_height}
          />
          <p className={styles.content_title}>{title}</p>
          <p className={styles.description}>{text}</p>
        </div>
      </div>
    );
  };

  const workContents = () => {
    return workData.map((data) => workItem(data));
  };

  return (
    <div className={styles.container} id="Works">
      <h1 className={`${styles.title} ${styles.sticky}`}>
        <span>W</span>orks
      </h1>
      <div className="app">
        {showModal && (
          <Modal modalContent={modalContent} setShowModal={setShowModal} />
        )}
      </div>
      <div className={styles.grid_container}>{workContents()}</div>
    </div>
  );
}
