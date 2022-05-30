import "./styles.css";
import Header from "./Header.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prva from "./components/Prva.js";
import Druga from "./components/Druga.js";
import Treca from "./components/Treca.js";
import Cetvrta from "./components/Cetvrta.js";
export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Prva />}></Route>
          <Route path="/Druga" element={<Druga />}></Route>
          <Route path="/Treca" element={<Treca />}></Route>
          <Route path="/Cetvrta" element={<Cetvrta />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
