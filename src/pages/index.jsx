import Home from "./home";
import About from "./about";

export default function Index() {
  return (
    <div>
      <Home />
      <About />
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
