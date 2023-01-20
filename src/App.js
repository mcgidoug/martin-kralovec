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

      <div className="portfolio">
        <img src="/images/hooded-city.jpg" alt="" />
        <img src="/images/invader.jpg" alt="" />
        <img src="/images/three-on-three.jpg" alt="" />
      </div>
    </div>
  );
}

export default App;
