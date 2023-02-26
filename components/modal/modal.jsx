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

import { Paper } from "@mui/material";
import styles from "./modal.module.css";

export default function Modal({ modalContent, setShowModal }) {
  window.document.body.style.overflow = "hidden";
  const closeModal = () => {
    setShowModal(false);
    window.document.body.style.overflow = "auto";
  };
  return (
    <div className={styles.contaner}>
      <div className={styles.modal_bg}>
        <Paper elevation={3} className={styles.modal_container}>
          <div className={styles.modal_content}>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.about_app}</p>
            <p>{modalContent.about_dev}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </Paper>
        <div className={styles.mask} onClick={closeModal}></div>
      </div>
    </div>
  );
}
