import styled from "styled-components";
import { Container } from "../../Components/Container";
import Header from "../../Components/Header.js";
import { Buttons } from "../../Components/Buttons";
import { useEffect, useState } from "react";
import axios from "axios";
import lixo from "../../Assets/trash.png";

export default function CarrinhoPages(){
    const [listaCarrinho, setListaCarrinho] = useState([]);
    const [soma, setSoma] = useState("00.00");
    const token = "93653d4f-9b9e-4c25-aea6-7785ec5a7cfa"

    console.log(listaCarrinho);

    useEffect(() => {
        const config = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        };
        
        const promise = axios.get(`${process.env.REACT_APP_API_URL}/carrinho`, config);
        promise.then((res) => {
        let total = 0;
        res.data.map((item) => {
         total += item.preco
        });
        setSoma(total);
        setListaCarrinho(res.data);
        });
        promise.catch((err) => console.log(err.response.data.message));
        }, []);

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_API_URL}/carrinho`, {headers: {
    //         Authorization: `Bearer ${token}`,
    //     }
    // }).then((res) => {
    //         console.log(res.data);
    //         setListaCarrinho(res.data);
    //     }).catch((err) =>{
    //         alert(err.response.data);
    //     })},[]);

        if(listaCarrinho === undefined){
            return <div>Carregando...</div>
        }

        function deletarProduto( indice, preco){
            indice.preventDefault();

            // useEffect(() => {
            //     if(soma > preco){
            //         setSoma(soma-preco);
            //     } else{
            //         setSoma(preco-soma);
            //     }
            // })

            axios.delete(`${process.env.REACT_APP_API_URL}/carrinho/${indice}`).then(() => {
                alert("Intem deletado com sucesso!!!");
            }).catch((err) => {
                alert(err.response.data.message);
            });
        };
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
                            R${Number(l.preco).toFixed(2)}
                        </p>
                        <button onClick={() => deletarProduto(i, l.preco)}>
                            <img src={lixo} alt="lixo"/>
                        </button>
                    </Items>)};
                </ListaDoCarrinho>)}
            </Lista>
            <CaixaSubTotal>
                <p>
                    Subtotal:
                </p>
                <p>
                    R$ {Number(soma).toFixed(2)}
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
            display: flex;
            flex-direction: collum;
`;

const Items = styled.div`
        display: flex;
        flex-direction: row;
        width: 331px;
        height: 62px;
        background-color: #ffffff;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

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