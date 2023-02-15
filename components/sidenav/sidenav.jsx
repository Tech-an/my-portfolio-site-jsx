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
            <li>About</li>
            <li>Career</li>
            <li>Skills</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Hobbies</li>
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
