import styled from "styled-components";
import sacola from "../../Assets/sacola.png";

export default function Header() {
  return (
    <Cabecalho>
      <h1>Zhein</h1>
      <img src={sacola} alt="sacola" className="sacola"/>
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
  position: fixed;

  .sacola{
    width:30px;
    height: 28px;
    margin-right: 10px;

  }
  h1 {
    font-family: "El Messiri";
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 63px;
    margin-left:140px;
  }
`;
