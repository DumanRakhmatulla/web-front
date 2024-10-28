// jsx
import BgImg from "./images/pattern-background-desktop.svg";
import Card from "./components/card";

const App = () => {
  return (
    <div
      style={{
        height: "100vh",
        background: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card />
    </div>
  );
};

export default App;
