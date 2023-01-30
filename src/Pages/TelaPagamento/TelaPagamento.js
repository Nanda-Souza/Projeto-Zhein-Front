import { Container } from "../../Components/Container";
import { Tela, Item, Total, Form } from "./StylePagamento";
import Header from "../../Components/Header";
import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

export default function Pagamento() {
  const [total, setTotal] = useState("");
  const [nome, setNome] = useState("");
  const [cartao, setCartao] = useState("");
  const navigate = useNavigate()


  function pagamento(e) {
    e.preventDefault();
    const body = { nome, cartao };
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/pagamento`, body);
    promise.then((res) => {
      navigate("/sucesso");
    });
    promise.catch((err) => alert(err.response.data.message));
  }


  return (
    <Container>
      <Header />
      <Tela>
        <p className="insereDados">Insira seus dados:</p>
        <Form onSubmit={pagamento}>
          <input
            type="text"
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="number"
            placeholder="Nº do cartão"
            required
            value={cartao}
            onChange={(e) => setCartao(e.target.value)}
          />
          <button type="submit">Finalizar pedido</button>
        </Form>
      </Tela>
    </Container>
  );
}
