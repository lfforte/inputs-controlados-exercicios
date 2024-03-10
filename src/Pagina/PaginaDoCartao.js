import React, { useState } from "react";
import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import Formulario from "../Componentes/Formulario";


function PaginaDoCartao() {

    //declare os estados aqui
    const [inputTipoPag, setinputTipoPag] = useState('');
    const [inputNumCard, setinputNumCard] = useState('');
    const [inputNome, setinputNome] = useState('');
    const [inputCvc, setinputCvc] = useState('');
    const [inputValidade, setinputValidade] = useState('');


    //declare as funções de controle de inputs aqui
    const atualizaTipoDePagamento = (e) => {
        setinputTipoPag(e.target.value);
    }
    const atualizaNumeroCartao = (e) => {
        setinputNumCard(e.target.value);
    }
    const atualizaNome = (e) => {
        setinputNome(e.target.value);
    }
    const atualizaCvc = (e) => {
        setinputCvc(e.target.value);
    }
    const atualizaValidade = (e) => {
        setinputValidade(e.target.value);
    }

    return (
        <LayoutDaPagina>
            {/* Passe as variáveis de estado para o Cartão. Use Props. */}
            <Cartao
                pagamento={inputTipoPag}
                numero={inputNumCard}
                nome={inputNome}
                cvc={inputCvc}
                validade={inputValidade}
            />
            {/* Chame o Componente Formulário Aqui */}
            <Formulario
                atualizaTipoDePagamento={atualizaTipoDePagamento}
                atualizaNome={atualizaNome}
                atualizaNumeroCartao={atualizaNumeroCartao}
                atualizaCvc={atualizaCvc}
                atualizaValidade={atualizaValidade}
                inputTipoPag={inputTipoPag}
                inputNumCard={inputNumCard}
                inputNome={inputNome}
                inputCvc={inputCvc}
                inputValidade={inputValidade}
                setinputTipoPag={setinputTipoPag}
                setinputNumCard={setinputNumCard}
                setinputNome={setinputNome}
                setinputCvc={setinputCvc}
                setinputValidade={setinputValidade}
            />
            {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}


        </LayoutDaPagina>

    );
}

export default PaginaDoCartao;
