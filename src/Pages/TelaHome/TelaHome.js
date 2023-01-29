import { Container } from "../../Components/Container"
import { TelaHome, ProdutosSpace, TelaProdutos } from "./StyleHome"
import HeaderHome from "./HeaderHome"
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home(){
    const [produtos, setProdutos] = useState(undefined)
    const token = "2d3d6687-90c6-4f03-a312-e4705e4017ad"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        };

    useEffect(() => {
        const URL = `${process.env.REACT_APP_API_URL}/get-produtos`;

        
        const promise = axios.get(URL, config);
        promise.then((res) => setProdutos(res.data));
        promise.then(res => console.log(res.data))
      }, []);     


    return (
        <Container>
            <HeaderHome/>
            <TelaHome>
                <div className="produtos"><p>Produtos</p></div>

             <TelaProdutos>
                {produtos?.map((produtos) => (
                    <ProdutosSpace key={produtos._id}> 
                
                    <img src={produtos.imagem} alt=""/>
                    <p>{produtos.nome}</p>   
    
                 </ProdutosSpace>

                ))}

            </TelaProdutos>



            </TelaHome>
        </Container>
    )
}