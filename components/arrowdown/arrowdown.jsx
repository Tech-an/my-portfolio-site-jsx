import styles from "./arrowdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

export default function ArrowDown({ id, clr }) {
  return (
    <figure className={styles.arrowdown} style={{ color: clr }}>
      <Link
        // activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        // offset={-70}
        duration={500}
      >
        <FontAwesomeIcon icon={faCircleChevronDown} />
      </Link>
    </figure>
  );
}
