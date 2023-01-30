import styled from "styled-components";
import { Container } from "../../Components/Container";
import Header from "../../Components/Header.js";
import { Buttons } from "../../Components/Buttons";
import { useEffect, useState } from "react";
import axios from "axios";
import lixo from "../../Assets/trash.png";
import { useNavigate } from "react-router";

export default function CarrinhoPages(){
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [soma, setSoma] = useState("");
    const token = "93653d4f-9b9e-4c25-aea6-7785ec5a7cfa";

    const navegate = useNavigate();

    useEffect(() => {
        const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        };
        
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/carrinho`, config);
        promise.then((res) => {
        let total = 0;
        console.log(res.data);
        res.data.map((item) => {
         return total += Number(item.preco);
        });
        console.log(total);
        setSoma(total);
        setListaCarrinho(res.data);
        });
        promise.catch((err) => console.log(err.response.data.message));
        }, []);

        if(listaCarrinho === undefined){
            return <div>Carregando...</div>
        }

        function DeletarProduto(index){
            console.log(index._id);

            axios.delete(`${process.env.REACT_APP_API_URL}/carrinho/${index._id}`).then((res) => {
                console.log(res.data);
                alert("Item deletado com sucesso!!!");
            }).catch((err) => {
                alert(err.response.data.message);
            });
        };

        function ProximaFase(){
            return navegate("/pagamento");
        }
    return(
        <Container>
            <Header/>
            <CaixaTitulo>
                <p>
                Carrinho
                </p>
            </CaixaTitulo>
            <Lista>
                {listaCarrinho.length === 0?(<div className="listavazia">Seu carrinho está vazio!</div>):(<ListaDoCarrinho>
                    {listaCarrinho.map((l,i) => 
                    <Items key={i}>
                        <img src={l.url} alt="imagem do produto"/>
                        <p>
                            {l.nome}
                        </p>
                        <p>
                            R${l.preco}
                        </p>
                        <button onClick={() => DeletarProduto(l)}>
                            <img src={lixo} alt="lixo"/>
                        </button>
                    </Items>)}
                </ListaDoCarrinho>)}
            </Lista>
            <CaixaSubTotal>
                <p>
                    Subtotal:
                </p>
                <p>
                    R$ {soma}
                </p>
            </CaixaSubTotal>
            <Buttons>
                <button onClick={ProximaFase}>
                    <p>
                        Fechar pedido
                    </p>
                </button>
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


const Lista = styled.div`
        width: 331px;
        display: flex;
        justify-content: center;
        align-items: center;
        .listavazia{
            width: 243px;
            height: 38px;
            margin-top: 90px;
            margin-bottom: 112px;
            font-family: 'El Messiri';
            font-weight: 400;
            font-size: 24px;
        }
`;

const ListaDoCarrinho = styled.div`
            flex-direction: collum;
`;

const Items = styled.div`
        margin-top: 14px;
        margin-bottom: 14px;
        display: flex;
        width: 331px;
        height: 62px;
        background-color: #ffffff;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;

        button{
            width: 32px;
            height: 32px;

            img{
                width: 16px;
                height: 16px;
            }
        }

        img{
            width: 63px;
            height: 47px;
        }

        p{
            font-family: 'El Messiri';
            font-size: 14px;
            font-weight: 400;
        }
`;