import Image from "next/image";
import Logo from "../../public/logo_5.jpg";
import styles from "./sidenav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

export default function SideNav() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="Home" spy={true} smooth={true} duration={500}>
          <Image
            src={Logo}
            alt="logo"
            style={{
              width: "90%",
              maxWidth: "130px",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li style={{ "--clr": "#00ade1" }}>
              <Link
                to="About"
                spy={true}
                smooth={true}
                duration={500}
                data-text="&nbsp;&nbsp;About&nbsp;"
              >
                &nbsp;&nbsp;About&nbsp;
              </Link>
            </li>
            <li style={{ "--clr": "#ff6493" }}>
              <Link
                to="Career"
                spy={true}
                smooth={true}
                duration={500}
                data-text="&nbsp;&nbsp;Career&nbsp;"
              >
                &nbsp;&nbsp;Career&nbsp;
              </Link>
            </li>
            <li style={{ "--clr": "#ffdd1c" }}>
              <Link
                to="Skills"
                spy={true}
                smooth={true}
                duration={500}
                data-text="&nbsp;&nbsp;Skills&nbsp;"
              >
                &nbsp;&nbsp;Skills&nbsp;
              </Link>
            </li>
            <li style={{ "--clr": "#00dc82" }}>
              <Link
                to="Works"
                spy={true}
                smooth={true}
                duration={500}
                data-text="&nbsp;&nbsp;Works&nbsp;"
              >
                &nbsp;&nbsp;Works&nbsp;
              </Link>
            </li>
            <li style={{ "--clr": "#dc00d4" }}>
              <Link
                to="Blog"
                spy={true}
                smooth={true}
                duration={500}
                data-text="&nbsp;&nbsp;Blog&nbsp;"
              >
                &nbsp;&nbsp;Blog&nbsp;
              </Link>
            </li>
            <li style={{ "--clr": "#7700e2" }}>
              <Link
                to="Play"
                spy={true}
                smooth={true}
                duration={500}
                data-text="&nbsp;&nbsp;Play&nbsp;"
              >
                &nbsp;&nbsp;Play&nbsp;
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.sns}>
        <ul>
          <li>
            <a href="https://www.instagram.com/teechan.s/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#About">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href="#About">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
