import styles from "../styles/home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <div className={styles.container} id="Home">
      <div className={styles.slideshow}>
        <div className={styles.title}>
          <h1>Tetsuya Sato.</h1>
          <p>welcome to my portfolio site!</p>
          <figure className={styles.arrowdown}>
            <Link
              // activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              // offset={-70}
              duration={500}
            >
              <FontAwesomeIcon icon={faCircleChevronDown} />
            </Link>
          </figure>
        </div>
      </div>
    </div>
  );
}
