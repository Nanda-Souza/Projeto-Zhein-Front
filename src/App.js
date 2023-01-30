import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./Context/UserContext";
import Login from "./Pages/TelaLogin/TelaLogin";
import Cadastro from "./Pages/TelaCadastro/TelaCadastro";
import Home from "./Pages/TelaHome/TelaHome";
import Pagamento from "./Pages/TelaPagamento/TelaPagamento";
import Carrinho from "./Pages/TelaCarrinho/CarrinhoPages";
import Sucesso from "./Pages/TelaSucesso/TelaSucesso";
import IdProdutos from "./Pages/TelaIdProdutos/IdProdutos";

function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  return (
    <UserContext.Provider value={{ usuarioLogado, setUsuarioLogado }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:id_do_produto" element={<IdProdutos/>}/>
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/sucesso" element={<Sucesso />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
