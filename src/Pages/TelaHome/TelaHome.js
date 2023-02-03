import { Container } from "../../Components/Container"
import { TelaHome, ProdutosSpace, TelaProdutos } from "./StyleHome"
import HeaderHome from "./HeaderHome"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../Context/UserContext";

export default function Home(){
    const [produtos, setProdutos] = useState(undefined)
    const { usuarioLogado } = useContext(UserContext);
    const config = {
        headers: {
            Authorization: `Bearer ${usuarioLogado.token}`,
        },
        };

    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/get-produtos`;

        
        const promise = axios.get(URL, config);
        promise.then((res) => setProdutos(res.data));
        promise.catch(error => console.log(error.data.message))
      }, []);     


    return (
        <Container>
            <HeaderHome/>
            <TelaHome>
                <div className="produtos"><p>Produtos</p></div>

             <TelaProdutos>
                {produtos?.map((produtos) => (
                    <Link to={`/${produtos._id}`}>
                        <ProdutosSpace key={produtos._id}> 
                
                            <img src={produtos.imagem} alt=""/>
                            <p>{produtos.nome}</p>   

                        </ProdutosSpace>
                    </Link>

                ))}

            </TelaProdutos>



            </TelaHome>
        </Container>
    )
}