import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/TelaLogin/TelaLogin";
import Pagamento from "./Pages/TelaPagamento/TelaPagamento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/cadastro" element={}/>
        <Route path="/home" element={}/>
        <Route path="/:id_do_produto" element={}/> */}
        <Route path="/pagamento" element={<Pagamento />} />
        {/* <Route path="/sucesso" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
