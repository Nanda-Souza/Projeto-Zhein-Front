import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { Tela, Form } from "./StyleLogin";
import { Container } from "../../Components/Container";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  //   function login(e) {
  //     e.preventDefault();
  //     const body = { email, senha };
  //     const promise = axios.post(`${process.env.REACT_APP_API_URL}/`, body);
  //     promise.then((res) => {
  //       // console.log(res.data)
  //       alert("Login realizado com sucesso! :)");
  //       setUsuarioLogado(res.data);
  //       navigate("/home");
  //     });
  //     promise.catch((err) => alert(err.response.data.message));
  //   }

  return (
    <Container>
      <Tela>
        <img src={logo} alt="logo" />
        <Form>
          <input
            type="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
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
