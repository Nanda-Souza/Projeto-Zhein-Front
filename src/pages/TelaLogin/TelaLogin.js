import { Link } from "react-router-dom";
// import logo from "../../assets/logo.jpeg";
import { Tela, Form } from "./StyleLogin";
import { Container } from "../../components/container";

export default function Login() {
  return (
    <Container>
      <Tela>
        {/* <img src={logo} alt="" /> */}
        <Form>
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">
            <strong>Entrar</strong>
          </button>
        </Form>
        <br />
        <Link to="/cadastro">
          <p>Ainda não possui uma conta? Cadastre-se!</p>
        </Link>
      </Tela>
    </Container>
  );
}
