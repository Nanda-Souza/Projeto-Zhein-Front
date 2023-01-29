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

    //FALTA USAR O USEEFFECT PARA PEGAR OS DADOS DO CARRINHO

  function pagamento(e) {
    e.preventDefault();
    const body = { nome, cartao };
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/`, body);
    promise.then((res) => {
      navigate("/sucesso");
    });
    promise.catch((err) => alert(err.response.data.message));
  }


  return (
    <Container>
      <Header />
      <Tela>
        <div className="pagamento">
          <p>Pagamento</p>
        </div>
        <p className="resumo">Resumo do pedido:</p>
        <Item>
          <p>Calça</p>
          <p>R$ 89,90</p>
        </Item>
        <Item>
          <p>Vestido</p>
          <p>R$ 69,90</p>
        </Item>
        <Item>
          <p>Blusa</p>
          <p>R$ 49,90</p>
        </Item>
        <Item>
          <p>Jaqueta</p>
          <p>R$ 119,90</p>
        </Item>
        <Item>
          <p>Short</p>
          <p>R$ 99,90</p>
        </Item>
        <Total>
          <p>Total da compra:</p>
          <p>
            {total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </Total>
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
