import styled from "styled-components";
import seta from "../Assets/setinha.png";
import sacola from "../Assets/sacola.png";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <Cabecalho>
      <Link to="/home">
        <img src={seta} alt="voltar" className="seta" />
      </Link>
      <h1>Zhein</h1>
      <Link to="/carrinho">
        <img src={sacola} alt="sacola" className="sacola" />
      </Link>
    </Cabecalho>
  );
}

export const Cabecalho = styled.div`
  min-width: 376px;
  height: 55px;
  background-color: #d1e1f9;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;

  .seta {
    width: 34px;
    height: 34px;
    margin-left: 10px;
  }
  .sacola {
    width: 30px;
    height: 28px;
    margin-right: 10px;
  }
  h1 {
    font-family: "El Messiri";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 63px;
  }
`;
