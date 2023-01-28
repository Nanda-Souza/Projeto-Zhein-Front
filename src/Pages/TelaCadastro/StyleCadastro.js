import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  outline: none;
  input {
    margin-top: 10px;
    width: 300px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-family: "El Messiri", sans-serif;
  }
`;

export const Tela = styled.div`
  min-width: 375px;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #3d3d3d;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    margin-top: 25px;
    cursor: pointer;
  }
  img {
    width: 232px;
    height: 160px;
    animation: slide-bottom 1s ease-in-out both;
    animation-name: slide-bottom;
  }

  @-webkit-keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
  }
  @keyframes slide-bottom {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
  }
`
  export const Registro = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    background-color: #cdf2d6;
    width: 225px;
    height: 45px;
    border: none;
    border-radius: 5px;
    outline: none;
    button {
      outline: none;
      border: none;
      background-color: #cdf2d6;
      width: 225px;
      height: 45px;
      border-radius: 5px;
      color: #3d3d3d;
    }
`
