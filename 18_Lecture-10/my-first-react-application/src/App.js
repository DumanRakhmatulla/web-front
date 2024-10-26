import "./App.css";
import Header from "./Header";
import { Home, About } from "./ContentComponent.js";

function clickMe() {
  console.log("You click Me!");
}

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <button onClick={clickMe} style={{ backgroundColor: "green" }}>
        Click Me
      </button>
    </div>
  );
}

export default App;
