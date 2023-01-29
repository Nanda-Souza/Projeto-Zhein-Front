import styled from "styled-components";

export const Tela = styled.div`
  min-width: 375px;
  height: 670px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin-top: 150px;
    background-color: #cdf2d6;
    color: #3d3d3d;
    width: 225px;
    height: 45px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: "El Messiri", sans-serif;
    font-size: 16px;
  }
`;
export const Elipse = styled.div`
  margin-top: 100px;
  width: 210px;
  height: 210px;
  border-radius: 100%;
  background-color: #cdf2d6;
  box-shadow: 0px 4px 6px 3px rgba(29, 179, 226, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: swirl-in-fwd;
  animation: swirl-in-fwd 0.6s ease-out both;
  @-webkit-keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}
@keyframes swirl-in-fwd {
  0% {
    -webkit-transform: rotate(-540deg) scale(0);
            transform: rotate(-540deg) scale(0);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate(0) scale(1);
            transform: rotate(0) scale(1);
    opacity: 1;
  }
}


  p {
    font-family: "El Messiri";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    text-align: center;
  }
`;
