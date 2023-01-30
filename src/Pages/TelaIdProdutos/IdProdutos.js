import { Container } from "../../Components/Container";
import Header from "../../Components/Header.js";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router";
import { Buttons } from "../../Components/Buttons";
import { useEffect, useState } from "react";
import axios from "axios";


export default function IdProdutos(){
    const [nome, setNome] = useState("");
    const [url, setUrl] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");

    const {id_do_produto} = useParams();
    const token = "93653d4f-9b9e-4c25-aea6-7785ec5a7cfa";

    const navegate = useNavigate();

    useEffect(() =>{
        const config = {
            headers: {
            Authorization: `Bearer ${token}`,
            },
            };

            const promise = axios.get(`${process.env.REACT_APP_API_URL}/produto/${id_do_produto}`, config);

            promise.then((res) => {
                setNome(res.data.nome);
                setUrl(res.data.imagem);
                setDescricao(res.data.descricao);
                setPreco(res.data.preco);


            })

            promise.catch((err) => console.log(err.response.data.message));

    }, []);

    function addInfo(e){
        e.preventDefault();

        const config = {
            headers: {
            Authorization: `Bearer ${token}`,
            },
            };

        const body = {url, nome, preco};

        const promisse = axios.post(`${process.env.REACT_APP_API_URL}/carrinho`, body, config);

        promisse.then(() => {
            alert("Intem adicionado ao carrinho");
            navegate("/home");
        });

        promisse.catch((err) => {
            alert(err.response.data.message)
        })
    }
    return(
        <Container>
            <Header/>
            <CaixaTitulo>
                <p>
                    {nome}
                </p>
            </CaixaTitulo>
            <CaixaImg>
                <img src={url} alt="img"/>
            </CaixaImg>
            <CaixaSubTotal>
                <p>
                    Subtotal:
                </p>
                <p>
                    R$ {Number(preco).toFixed(2)}
                </p>
            </CaixaSubTotal>
            <CaixaDescricao>
                <p>
                    {descricao}
                </p>
            </CaixaDescricao>
            <Buttons>
                <button onClick={addInfo}>
                    Adicionar à sacola
                </button>
            </Buttons>

        </Container>
    )
};

const CaixaImg = styled.div`
        justify-content: center;
        align-items: center;
        width: 314px;
        height: 326px;
        background-color: #ffffff;
        margin-top: 19px;
        margin-bottom: 16px;
        border-radius: 10px;

        img{
            width: 278px;
            height: 292px;
        }
`;

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
            p{
                font-family: 'El Messiri';
                font-weight: 400;
                font-size: 24px;
            }
`;

const CaixaDescricao = styled.div`
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 314px;
            height: 100px;
            background-color: #ffffff;
            border-radius: 10px;
            margin-top: 16px;
            p{
                font-family: 'El Messiri';
                font-weight: 400;
                font-size: 24px;
            }
`;