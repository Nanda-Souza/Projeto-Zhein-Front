import { Link } from "react-router-dom";
import { Container } from "../../Components/Container";
import Header from "../../Components/Header";
import { Tela } from "./StyleSucesso";

export default function Sucesso() {
  return (
    <Container>
      <Header />
      <Tela>
        <p>Pedido realizado com sucesso!</p>
        <Link to="/home">
        <button>Voltar para home</button>
        </Link>
      </Tela>
    </Container>
  );
}
