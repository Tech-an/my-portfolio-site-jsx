export default function ComingSoon({ clr }) {
  return (
    <div
      style={{
        color: "#fff",
        textShadow: `1px 1px 2px ${clr}, 0 0 1em ${clr}, 0 0 0.2em ${clr}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 97.2px - 50px)",
      }}
    >
      <h1>Coming Soon...</h1>
    </div>
  );
}
