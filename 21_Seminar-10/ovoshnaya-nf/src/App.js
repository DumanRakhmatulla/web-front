import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";

import ErnarOriginal from "./cons";
import { ernar1, ernar2, ernar3 } from "./cons";

function App() {
  // console.log(ErnarOriginal);
  // console.log(ernar1, ernar2, ernar3);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "50px 1fr 50px",
        height: "100vh",
      }}
    >
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
