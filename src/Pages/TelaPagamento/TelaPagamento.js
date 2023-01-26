import { Container } from "../../Components/Container"
import { Tela } from "./StylePagamento"
import Header from "../../Components/Header"

export default function Pagamento(){
    return (
        <Container>
            <Header/>
            <Tela>
                <div className="pagamento"><p>Pagamento</p></div>
                <p>Resumo do pedido:</p>

            </Tela>
        </Container>
    )
}