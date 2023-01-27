import styled from "styled-components";

export const Tela = styled.div`
  min-width: 375px;
  height: 670px;
  display: flex;
  flex-direction: column;

  .pagamento {
    background-color: #cdf2d6;
    width: 350px;
    height: 40px;
    margin-top: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
  }
  .pagamento > p {
    font-family: "El Messiri";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
  .resumo {
    font-size: 20px;
    margin-left: 20px;
    margin-top: 15px;
  }
  .insereDados {
    margin-top:50px;
    font-size: 20px;
    margin-left: 20px;
    margin-top: 15px;
  }
`;

export const Item = styled.div`
  width: 340px;
  height: 27px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  p {
    margin-left: 8px;
    margin-right: 8px;
    font-size: 15px;
  }
`;

export const Total = styled.div`
width: 340px;
  height: 27px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
  p{
    margin-left: 8px;
    margin-right: 8px;
    font-size: 15px;
    font-weight: bold;
  }
`

export const Form = styled.form`
 display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-top: 10px;
    width: 300px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-family: "El Messiri", sans-serif;
  }
  button{
    margin-top: 66px;
    background-color: #cdf2d6;
    color: #3D3D3D;
    width: 225px;
    height: 45px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'El Messiri', sans-serif;
    font-size:16px;
  }
`