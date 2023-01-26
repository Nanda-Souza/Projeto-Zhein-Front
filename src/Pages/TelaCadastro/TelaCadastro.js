import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { Tela, Form } from "./StyleCadastro";
import { Container } from "../../Components/Container";
import { useState } from "react";

export default function Login() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmesenha, setConfirmeSenha] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <Tela>
        <img src={logo} alt="logo" />
        <Form>
        <input
            type="nome"
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirme a senha"
            required
            value={confirmesenha}
            onChange={(e) => setConfirmeSenha(e.target.value)}
          />
          <button type="submit">
            <strong>Cadastrar</strong>
          </button>
        </Form>
        <br />
        <Link to="/">
          <p>Já possui conta? Faça login!</p>
        </Link>
      </Tela>
    </Container>
  );
}
