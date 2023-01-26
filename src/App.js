import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/TelaLogin/TelaLogin";
import Cadastro from "./Pages/TelaCadastro/TelaCadastro";
import Pagamento from "./Pages/TelaPagamento/TelaPagamento";
import Carrinho from "./Pages/TelaCarrinho/CarrinhoPages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        {/* 
        <Route path="/home" element={}/>
        <Route path="/:id_do_produto" element={}/> */}
        <Route path="/carrinho" element={<Carrinho />}/>
        <Route path="/pagamento" element={<Pagamento />} />
        {/* <Route path="/sucesso" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
