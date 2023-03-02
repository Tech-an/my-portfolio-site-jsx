/**
 * modalで表示させる物、表示させるタイミングを親コンポーネントで制御する
 * Modalコンポーネントの役割 : 【 与えられた情報を元にモーダル画面を描画する 】こと
 *
 * 引数
 *  modalContent: state (親コンポーネントで以下を定義する必要がある → const [modalContent, setModalContent] = useState({});)
 *  setShowModal: setState (親コンポーネントで以下を定義する必要がある → const [showModal, setShowModal] = useState(false);)
 *
 * 親のstateを受け取れば、子要素から親要素の状態を管理できる
 */

import styles from "./modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWrench,
  faCircleXmark,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

export default function Modal({ modalContent, setShowModal }) {
  window.document.body.style.overflow = "hidden";
  const closeModal = () => {
    setShowModal(false);
    window.document.body.style.overflow = "auto";
  };
  const [mainModalImgPath, setMainModalImgPath] = useState("");
  const imgContainer = (imgPaths) => {
    if (!mainModalImgPath) {
      setMainModalImgPath(imgPaths[0] || "/noimage.png");
    }
    return (
      <div className={styles.imgs}>
        <Image
          src={mainModalImgPath}
          alt=""
          width={1000}
          height={1000}
          className={styles.main_img}
        />
        <nav>
          <ul>
            {imgPaths.map((path) => {
              return (
                <li
                  key={path}
                  onClick={() => setMainModalImgPath(path)}
                  className={mainModalImgPath == path ? styles.selected : null}
                >
                  <Image
                    src={path}
                    alt=""
                    width={1000}
                    height={1000}
                    className={styles.list_img}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  };
  return (
    <div className={styles.contaner}>
      <div className={styles.modal_bg}>
        <div className={styles.modal_container}>
          <div onClick={closeModal} className={styles.close_button}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
          <div className={styles.modal_content}>
            <div className={styles.text}>
              <h2>{modalContent.title}</h2>
              <p>{modalContent.about_app}</p>
              <p className={styles.dev}>
                <div className={styles.dev_content}>
                  <p className={styles.dev_title}>
                    {"< "}
                    <FontAwesomeIcon icon={faWrench} />
                    {" 開発言語 >"}
                    <br />
                  </p>
                  <p className={styles.dev_text}>{modalContent.about_dev}</p>
                </div>
                <div className={styles.dev_content}>
                  <p className={styles.dev_title}>
                    {"< "}
                    <FontAwesomeIcon icon={faClock} />
                    {" 開発期間 >"}
                    <br />
                  </p>
                  <p className={styles.dev_text}>{"2023/2/17 - 2023/3/3"}</p>
                </div>
              </p>
            </div>
            {imgContainer(modalContent.imgs)}
          </div>
        </div>
        <div className={styles.mask} onClick={closeModal}></div>
      </div>
    </div>
  );
}
