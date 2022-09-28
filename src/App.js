import React from "react";
import styled from "styled-components";
import Action from "./Action";
import GlobalStyle from "./GlobalStyle";
import Cards from "./Cards";
import listaPerguntas from "./listaPerguntas";

import logo from "./assets/img/logo.png";


export default function App() {
    const [perguntasClicadas,setPerguntasClicadas] = React.useState([]);  
    const [listaRespostasNao,setListaRespostasNao] = React.useState([]);  
    const [listaRespostasQuaseNao,setListaRespostasQuaseNao] = React.useState([]);  
    const [listaRespostasZap,setListaRespostasZap] = React.useState([]);  
    const [nomeIcone,setNomeIcone] = React.useState("play-outline");

    return (
        <Deck>
            <GlobalStyle />
            <Header>
                    <img src = {logo} alt="logo"></img>
                    <h1>ZapRecall</h1>
            </Header>

            <Cards  listaPerguntas = {listaPerguntas} perguntasClicadas = {perguntasClicadas} setPerguntasClicadas = {setPerguntasClicadas} /* nomeBotao ={nomeBotao} *//>
            <Action listaPerguntas ={listaPerguntas} setNomeIcone ={setNomeIcone} perguntasClicadas = {perguntasClicadas} setPerguntasClicadas = {setPerguntasClicadas}/>
            
        </Deck>
    )

}

const Header = styled.div`

     img {
        width: 52px;
        height: 60px;
        z-index:2;
        margin-right:20px;
        }

        position: fixed;
        height: 80px;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        font-size: 36px;
        color: white;
        font-family: "Righteous";
        z-index: 1;
        background-color: var(--cor-fundo);
       

`

const Deck = styled.div`

    display: flex;
    flex-direction: column;


    .main::-webkit-scrollbar {
    display: none;
    }

    .main {
        max-height: 400px;
        overflow-y: auto;
    }


`