import "./App.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaEtsy, FaBandcamp } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Martin Kralovec</h1>
        <h4>Dark Art & Illustration</h4>
        <p>
          I am an artist and illustrator located in Chicago. I work with pen and
          ink mostly but explore all different types of media; including but not
          limited to markers, watercolor, acrylic, and paint. I am stylistically
          versatile, which allows me to reach a larger clientele. I use my art
          to work out thoughts and convey emotion. I am inspired by googie art,
          books, art nouveau, nature, gothic, horror art, and movies. From this,
          I create projects, series, minicomics, and individual pieces of work.
        </p>
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
