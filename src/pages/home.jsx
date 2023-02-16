import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.slideshow}>
        <div className={styles.title}>
          <h1>Tetsuya Sato.</h1>
          <p>welcom to my portfolio site!</p>
          <figure className={styles.arrowdown}>
            <a href="#About">
              <FontAwesomeIcon icon={faCircleChevronDown} />
            </a>
          </figure>
        </div>
      </div>
    </div>
  );
}
