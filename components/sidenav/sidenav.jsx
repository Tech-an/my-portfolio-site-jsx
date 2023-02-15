import Image from "next/image";
import Logo from "../../public/logo_3.jpg";
import styles from "./sidenav.module.css";

export default function SideNav() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src={Logo}
          alt="logo"
          style={{
            width: "90%",
            maxWidth: "130px",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.nav}>
        <nav>
          <ul>
            <li style={{ "--clr": "#00ade1" }}>
              <a href="#About" data-text="&nbsp;&nbsp;About&nbsp;">
                &nbsp;&nbsp;About&nbsp;
              </a>
            </li>
            <li style={{ "--clr": "#ff6493" }}>
              <a href="#Career" data-text="&nbsp;&nbsp;Career&nbsp;">
                &nbsp;&nbsp;Career&nbsp;
              </a>
            </li>
            <li style={{ "--clr": "#ffdd1c" }}>
              <a href="#Skills" data-text="&nbsp;&nbsp;Skills&nbsp;">
                &nbsp;&nbsp;Skills&nbsp;
              </a>
            </li>
            <li style={{ "--clr": "#00dc82" }}>
              <a href="#Products" data-text="&nbsp;&nbsp;Products&nbsp;">
                &nbsp;&nbsp;Products&nbsp;
              </a>
            </li>
            <li style={{ "--clr": "#dc00d4" }}>
              <a href="#Blog" data-text="&nbsp;&nbsp;Blog&nbsp;">
                &nbsp;&nbsp;Blog&nbsp;
              </a>
            </li>
            <li style={{ "--clr": "#7700e2" }}>
              <a href="#Hobbies" data-text="&nbsp;&nbsp;Hobbies&nbsp;">
                &nbsp;&nbsp;Hobbies&nbsp;
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="sns">
        <ul>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>GitHub</li>
        </ul>
      </div>
    </div>
  );
}
