export default function Cetvrta2({ salji }) {
  return (
    <div className="Cetvrta2" id="Cetvrta2">
      <p>Naziv serije: {salji.naziv_serije}</p>
      <p>Platforma: {salji.platforma}</p>
      <p>Broj sezona: {salji.broj_sezona}</p>
      <p>Godina početka emitiranja: {salji.godina_pocetka_emitiranja}</p>
      <p>Žanr: {salji.žanr}</p>
      <p>Trajanje epizode: {salji.trajanje_epizode}</p>
    </div>
  );
}
