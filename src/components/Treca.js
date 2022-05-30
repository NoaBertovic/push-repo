import ygo3 from "./Slike/yugioh3.jpg";
import ygo4 from "./Slike/yugioh4.jpg";
import {Link} from "react-router-dom";
export default function Treca() {
  return (
  <div className="Treca">
    <h3>Yu-gioh! Master Duel igra</h3>
    <div id="Treča">
    <img src={ygo3} alt="ne radi" id="ygo3"/>
    <div id="p3">
    <p>Yu-Gi-Oh! Master Duel je besplatna kartaška igra koja je napravlja na temelju originalne Yu-Gi-Oh! Trading Card Game.
      Napravljena i objavljena od Konami-ja za Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Android, and iOS.
      Objavljena je 19. siječnja 2022. uz pozitivne kritike brzo se popeo na vrh Steam ljestvice. 
    </p>
    </div>
    </div>
    <h3>Yu-Gi-Oh! Duel Links igra</h3>
    <div id="Treča">
    <img src={ygo4} alt="ne radi" id="ygo4"/>
    <div id="p4">
    <p>Yu-Gi-Oh! Duel Links je besplatna kartaška igra napravljena od Konami-ja za iOS, Android i Microsoft Windows.
    Nakon početnog beta razdoblja, igra je prvi put objavljena u Japanu 17. studenog 2016., a zatim objavljena ostatku svijeta u 11. siječnja 2017.
    Windows verzija objavljena je širom svijeta putem Steam-a 17. studenog 2017.
    </p>
    </div>
    </div>
    <Link to="/">Početna stranica</Link>
  </div>
  );
}
