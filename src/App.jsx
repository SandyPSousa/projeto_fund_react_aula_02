import "./App.css"

import Card from "./Components/Card"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

import coxinha from "./imgs/coxinha.png"
import feijoada from "./imgs/feijoada.png"
import cocacola from "./imgs/cocacola.png"
import tortalimao from "./imgs/tortalimao.png"
import camarao from "./imgs/camarao.png"

export default function App() {
    return (
        <div>
            <Header />
            <h2 className="subtitle">Fast-Food Infnet</h2>

            <div className="container_cards">
                <Card titulo="Feijoada" descricao="Prato típico brasileiro" img={feijoada} />
                <Card titulo="Coxinha" descricao="Prato típico brasileiro" img={coxinha} />
                <Card titulo="Torta de Limão" descricao="Sobremesa" img={tortalimao} />
                <Card titulo="Camarão" descricao="Prato típico brasileiro" img={camarao} />
                <Card titulo="Coca Cola" descricao="Bebida" img={cocacola} />
                <Card />
            </div>
            <Footer descricao="Todos os direitos reservados - 2024" />
        </div>
    )
};

