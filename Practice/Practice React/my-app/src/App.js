import "./App.css";
import Header from "./Header";
import { Home, About } from "./ContentComponent";

function App() {
  function clickMe() {
    console.log("you click me");
  }
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <button onClick={clickMe} style={{ backgroundColor: "green" }}>
        Click me
      </button>
    </div>
  );
}

export default App;
