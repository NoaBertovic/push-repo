import ygo1 from "./Slike/yugioh.jpg";
import { Link } from "react-router-dom";
export default function Prva() {
  return (
    <div className="Prva">
      <div id="Prva">
      <img src={ygo1} alt="ne radi" id="ygo1" />
      <div id="p1">
        <p>Yu-Gi-Oh! je svjetski popularna animirana serija iz Japana i broji
          mnogo sezona i nastavaka.
          <br />
          Po uzoru na nju napravljena je kartaška igra koja je distribuirana
          diljem svijeta.
          <br />
          <br />
          Igra počinje tako što oba igrača izmješaju svoj špil karata u kojem
          treba biti najmanje 40 i najviše 60 karata.
          <br />
          Nakon toga bacaju kockice da vidi tko ide prvi,a tko drugi.
          <br />
          Pa onda oba igrača izvlače 5 karata sa vrha svog špila i počinju
          igrati.
          <br />
          Cilj igre je spustiti protivnikove životne bodove do 0 sa svojim
          kartama ,a svaki igrač na početku igre ima 8000 životni bodova.
        </p>
      </div>
      </div>
      <footer id="footer">
        <table id="table">
          <tr>
            <th>Stranica za naprviti</th>
            <td><Link to="/Druga">Vlastitu kartu</Link></td>
          </tr>
          <tr>
            <th>Yu-Gi-Oh!</th>
            <td><Link to="/Treca">Igre</Link></td>
          </tr>
          <tr>
            <th>Stvari</th>
            <td><Link to="/Cetvrta">Serije</Link></td>
          </tr>
        </table>
        <p id="p2">sva prava pridržana 2022</p>
    </footer>
    </div>
  );
}
