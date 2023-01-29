import { Link } from "react-router-dom";
import { Container } from "../../Components/Container";
import Header from "../../Components/Header";
import { Elipse, Tela } from "./StyleSucesso";

export default function Sucesso() {
  return (
    <Container>
      <Header />
      <Tela>
        <Elipse>
          <p>Pedido realizado com sucesso!</p>
        </Elipse>

        <Link to="/home">
          <button>Voltar para home</button>
        </Link>
      </Tela>
    </Container>
  );
}
