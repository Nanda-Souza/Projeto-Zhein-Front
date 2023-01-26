import styled from "styled-components";

export const Tela = styled.div`
  min-width: 375px;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pagamento {
    background-color: #cdf2d6;
    width: 350px;
    height: 40px;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    
  }
  .pagamento > p {
    font-family: "El Messiri";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }

`;
