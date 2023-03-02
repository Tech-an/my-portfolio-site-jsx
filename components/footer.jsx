export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "rgb(30, 30, 30)",
        color: "#fff",
        textAlign: "center",
        height: "50px",
        lineHeight: "50px",
        position: "sticky",
        bottom: "0",
        zIndex: "1000",
      }}
    >
      <small>&copy; 2023 Tetsuya Sato.</small>
    </div>
  );
}
