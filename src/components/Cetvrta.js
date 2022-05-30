import Cetvrta2 from "./Cetvrta2";
import ygo5 from "./Slike/yugioh5.jpg";
import {Link} from "react-router-dom";
export default function Cetvrta() {
  const Serije = {
    naziv_serije: "Yu-Gi-Oh!",
    platforma: "Netflix",
    broj_sezona: "7",
    godina_pocetka_emitiranja: "1998",
    žanr: "Kolekcionarska kartaška igra",
    trajanje_epizode: "20min"
  };
  return (
    <div className="Cetvrta">
      <img src={ygo5} alt="ne radi" id="ygo5"/>
      <Cetvrta2 salji={Serije} />
      <br/>
      <Link to="/">Početna stranica</Link>
    </div>
  );
}
