import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./paginas/Home";
import SaoPaulo from "./paginas/SaoPaulo";
import MinasGerais from "./paginas/MinasGerais";
import EspiritoSanto from "./paginas/EspiritoSanto";
import RioJaneiro from "./paginas/RioJaneiro";
import Parana from "./paginas/Parana";
import Goias from "./paginas/Goias";
import MatoGrosso from "./paginas/MatoGrosso";
import MatoGrossodoSul from "./paginas/MatoGrossodoSul";
import DistritoFederal from "./paginas/DistritoFederal";
import Acre from "./paginas/Acre";
import Amapa from "./paginas/Amapa";
import Amazonas from "./paginas/Amazonas";
import Para from "./paginas/Para";
import Rondonia from "./paginas/Rondonia";
import Roraima from "./paginas/Roraima";
import Tocantins from "./paginas/Tocantins";
import Alagoas from "./paginas/Alagoas";
import Bahia from "./paginas/Bahia";
import Ceara from "./paginas/Ceara";
import Maranhao from "./paginas/Maranhao";
import Paraiba from "./paginas/Paraiba";
import Pernambuco from "./paginas/Pernambuco";
import Piaui from "./paginas/Piaui";
import RioGrandedoNorte from "./paginas/RioGrandedoNorte";
import Sergipe from "./paginas/Sergipe";

export default function App()
{
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/estados/sp" element={<SaoPaulo />} />
        <Route path="/estados/mg" element={<MinasGerais />} />
        <Route path="/estados/rj" element={<RioJaneiro />} />
        <Route path="/estados/es" element={<EspiritoSanto />} />
        <Route path="/estados/go" element={<Goias/>} />
        <Route path="/estados/mt" element={<MatoGrosso/>} />
        <Route path="/estados/ms" element={<MatoGrossodoSul />} />
        <Route path="/estados/df" element={<DistritoFederal />} />
        <Route path="/estados/ac" element={<Acre />} />
        <Route path="/estados/ap" element={<Amapa />} />
        <Route path="/estados/am" element={<Amazonas />} />
        <Route path="/estados/pa" element={<Para/>} />
        <Route path="/estados/ro" element={<Rondonia/>} />
        <Route path="/estados/rr" element={<Roraima />} />
        <Route path="/estados/to" element={<Tocantins />} />
        <Route path="/estados/al" element={<Alagoas />} />
        <Route path="/estados/ba" element={<Bahia />} />
        <Route path="/estados/ce" element={<Ceara />} />
        <Route path="/estados/ma" element={<Maranhao />} />
        <Route path="/estados/pb" element={<Paraiba />} />
        <Route path="/estados/pe" element={<Pernambuco/>} />
        <Route path="/estados/pi" element={<Piaui/>} />
        <Route path="/estados/rn" element={<RioGrandedoNorte />} />
        <Route path="/estados/se" element={<Sergipe />} />
        

      </Routes>
    </BrowserRouter>
  );
}