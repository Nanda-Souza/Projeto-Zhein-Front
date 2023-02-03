import styled from "styled-components";

export const TelaHome = styled.div`
  min-width: 375px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  .produtos {
    background-color: #cdf2d6;
    width: 350px;
    height: 40px;
    margin-top: 65px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    
  }
  .produtos > p {
    font-family: "El Messiri";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
  }
`

export const TelaProdutos = styled.div`
  min-width: 375px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 120px;
    `

export const ProdutosSpace = styled.div`
width: 163px;
height: 230px;
display: flex;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
justify-content: center;
background-color: #FFFFFF;
border-radius: 5px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
margin-left: 15px;
margin-bottom: 12px;
img {
    width: 133px;
    height: 169px;
    /* margin-left: 19px; */
    margin-top:19px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
}
p{
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-family: "El Messiri";
  font-style: normal;
  margin-top:5px;
  margin-bottom: 15px;
}

`;
