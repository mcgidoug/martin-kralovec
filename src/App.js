import "./App.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Martin Kralovec</h1>
        <h4>Dark Art & Illustration</h4>
        <p>Commission work available with inquiry</p>
        <div className="icons">
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillYoutube />
        </div>
      </div>
    </div>
  );
}

export default App;
