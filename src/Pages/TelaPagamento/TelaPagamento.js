import { Container } from "../../Components/Container"
import { Tela, Item, Total, Form } from "./StylePagamento"
import Header from "../../Components/Header"

export default function Pagamento(){
    return (
        <Container>
            <Header/>
            <Tela>
                <div className="pagamento"><p>Pagamento</p></div>
                <p className="resumo">Resumo do pedido:</p>
                <Item>
                    <p>Calça</p>
                    <p>R$ 89,90</p>
                </Item>
                <Item>
                    <p>Vestido</p>
                    <p>R$ 69,90</p>
                </Item>
                <Item>
                    <p>Blusa</p>
                    <p>R$ 49,90</p>
                </Item>
                <Item>
                    <p>Jaqueta</p>
                    <p>R$ 119,90</p>
                </Item>
                <Item>
                    <p>Short</p>
                    <p>R$ 99,90</p>
                </Item>
                <Total>
                    <p>Total da compra:</p>
                    <p>R$ 425,50</p>
                </Total>
                <p className="insereDados">Insira seus dados:</p>
                <Form>
                <input type="text" placeholder="Nome" required />
                <input type="number" placeholder="Nº do cartão" required />
                <button>Finalizar pedido</button>
                </Form>

            </Tela>
        </Container>
    )
}