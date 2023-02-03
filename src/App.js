import "./App.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaEtsy, FaBandcamp } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="mailto:martinkralovec65@gmail.com">
          <div className="contactButton">Contact</div>
        </a>
      </nav>
      <div className="header">
        <h1>Martin Kralovec</h1>
        <h4>Dark Art & Illustration</h4>
        <p>Commission Work Available with Inquiry</p>
        <div className="icons">
          <a a href="https://www.instagram.com/martin.kralovec/" target="blank">
            <AiFillInstagram />
          </a>
          <a
            a
            href="https://www.etsy.com/shop/martinkralovecart/"
            target="blank"
          >
            <FaEtsy />
          </a>
          <a a href="https://bladderboys.bandcamp.com/" target="blank">
            <FaBandcamp />
          </a>
        </div>
      </div>

      <div className="portfolio">
        <img src="/images/hooded-city.jpg" alt="" />
        <img src="/images/invader.jpg" alt="" />
        <img src="/images/three-on-three.jpg" alt="" />
        <img src="/images/lookout.jpg" alt="" />
        <img src="/images/burried.jpg" alt="" />
      </div>
    </div>
  );
}

export default App;
