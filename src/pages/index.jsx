import Home from "./home";
import About from "./about";
import Career from "./career";

export default function Index() {
  return (
    <div>
      <Home />
      <About />
      <Career />
      <h1
        style={{
          height: "200vh",
          width: "80vw",
          backgroundColor: "blue",
        }}
      >
        メインコンテンツ部
      </h1>
    </div>
  );
}
