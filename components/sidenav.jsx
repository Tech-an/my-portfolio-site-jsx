import Image from "next/image";
import Logo from "../public/logo_2.jpg";

export default function SideNav() {
  return (
    <div style={{ height: "100vh", width: "20vw", backgroundColor: "green" }}>
      <div className="logo">
        <Image src={Logo} alt="logo" width={"20vw"} height={200} />
      </div>
      <div className="nav">
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
