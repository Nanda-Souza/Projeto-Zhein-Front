import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { Tela, Form} from "./StyleCadastro";
import { Container } from "../../Components/Container";
import { useState } from "react";
//import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function Login() {
  //const [loading, setLoading] = useState(false)
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmeSenha, setConfirmeSenha] = useState("");
  const navigate = useNavigate();

  const envioRegistro = async (e) => {
    e.preventDefault()

    const dadosCadastro = {nome, email, senha, confirmeSenha}
    //setLoading(true)

    try{    

    await axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, dadosCadastro)
    
    } catch (err){
        if (err.response?.status === 422){
            alert("Senha e confirmação de senha devem ser iguais!")
        } else if (err.response?.status === 409){
            alert("Usuário ou email já cadastrados!")
        } else {
            alert("Não foi possível fazer o cadastro, favor tentar novamente mais tarde!")
        }        
        //setLoading(false)
        return;
    }    
    
    //setLoading(false)
    navigate("/")
    
    
    

}


  return (
    <Container>
      <Tela>
        <img src={logo} alt="logo" />

    <Form onSubmit={envioRegistro}>
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
            value={confirmeSenha}
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
