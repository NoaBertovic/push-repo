import React, { Component } from "react";
import { Link } from "react-router-dom";
import ygo2 from "./Slike/yugioh2.jpg"

export class Druga extends Component {
  state = {
    ime: "ime",
    zvijezde:"zvijezde",
    effect:"effect",
    napad: "napad",
    obrana: "obrana"
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <form>
        <h3>Naprvi svoju vlastitu kartu</h3>
        <div id="Druga">
        <img src={ygo2} alt="ne radi" id="ygo2" />
        <table>
          <tr>
            <th>Napiši ime za svoju kartu</th>
            <th><input
              placehholder="ime"
              value={this.state.ime}
              onChange={(e) => this.setState({ ime: e.target.value })}/></th>
          </tr>
          <tr>
            <th>Napiši broj zvijezda za svoju kartu</th>
            <th><input
              placehholder="zvijezde"
              value={this.state.zvijezde}
              onChange={(e) => this.setState({ zvijezde: e.target.value })}/></th>
          </tr>
          <tr>
            <th>Napiši effect za svoju kartu</th>
            <th><input
              placehholder="effect"
              value={this.state.effect}
              onChange={(e) => this.setState({ effect: e.target.value })}/></th>
          </tr>
          <tr>
            <th>Napiši napad za svoju kartu</th>
            <th><input
              placehholder="napad"
              value={this.state.napad}
              onChange={(e) => this.setState({ napad: e.target.value })}/></th>
          </tr>
          <tr>
            <th>Napiši obranu za svoju kartu</th>
            <th><input
              placehholder="obrana"
              value={this.state.obrana}
              onChange={(e) => this.setState({ obrana: e.target.value })}/></th>
          </tr>
          </table>
          <button onClick={(e) => this.onSubmit(e)} id="btn1">Potvrdi</button>
          </div>
          <br/>
        <Link to="/">Početna stranica</Link>
      </form>
    );
  }
}
export default Druga;
