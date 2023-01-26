import styled from "styled-components";
import { Container } from "../../Components/Container";
import Header from "../../Components/Header.js";
import { Buttons } from "../../Components/Buttons";

export default function CarrinhoPages(){
    return(
        <Container>
            <Header/>
            <CaixaTitulo>
                <p>
                Carrinho
                </p>
            </CaixaTitulo>
            <CaixaSubTotal>
                <p>
                    Subtotal:
                </p>
                <p>
                    R$ 00.00
                </p>
            </CaixaSubTotal>
            <Buttons>
                <p>
                    Fechar pedido
                </p>
            </Buttons>
        </Container>
    )
}

const CaixaTitulo = styled.div`
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            width: 351px;
            height: 38px;
            justify-content: center;
            align-items: center;
            background-color: #CDF2D6;
            border-radius: 10px;

            p{
                font-family: 'El Messiri';
                font-weight: 400;
                font-size: 24px;
            }
`;

const CaixaSubTotal = styled.div`
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 314px;
            height: 62px;
            background-color: #ffffff;
            border-radius: 10px;
            margin-top: 128px;
            p{
                font-family: 'El Messiri';
                font-weight: 400;
                font-size: 24px;
            }
`;
