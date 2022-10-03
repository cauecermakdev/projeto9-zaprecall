import React from "react";
import styled from "styled-components";
import Action from "./Action";
import GlobalStyle from "./GlobalStyle";
import Cards from "./Cards";
import listaPerguntas from "./listaPerguntas";
import Result from "./Result";

import logo from "./assets/img/logo.png";


export default function App() {
    const [perguntasClicadas, setPerguntasClicadas] = React.useState([]);
    const [listaRespostasNao, setListaRespostasNao] = React.useState([]);
    const [listaRespostasQuaseNao, setListaRespostasQuaseNao] = React.useState([]);
    const [listaRespostasZap, setListaRespostasZap] = React.useState([]);
    const [nomeIcone, setNomeIcone] = React.useState("play-outline");
    const [logado, setLogado] = React.useState(false);
    const [apresentaResposta,setApresentaResposta] = React.useState(false);

    if (logado) {
        return (
            <Deck>
                <GlobalStyle />
                <Header>
                    <img src={logo} alt="logo"></img>
                    <h1>ZapRecall</h1>
                </Header>

                <Cards listaPerguntas={listaPerguntas} setNomeIcone={setNomeIcone} perguntasClicadas={perguntasClicadas} setPerguntasClicadas={setPerguntasClicadas} apresentaResposta={apresentaResposta} setApresentaResposta={setApresentaResposta}/> 
                <Action listaPerguntas={listaPerguntas} setNomeIcone={setNomeIcone} perguntasClicadas={perguntasClicadas} setPerguntasClicadas={setPerguntasClicadas} apresentaResposta={apresentaResposta} setApresentaResposta={setApresentaResposta}/> 
                <Result listaPerguntas= {listaPerguntas} />
            </Deck>
        )
    } else {
        return(
        <Home>
            <GlobalStyle />
                <img src={logo} alt="logo"></img>
                <h1>ZapRecall</h1>
                <button data-identifier="start-btn" onClick = {()=>setLogado(true)}>Iniciar Recall!</button>
        </Home>
        );
    }


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
const Home = styled.div`


  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  background-color: var(--cor-fundo);

  img{
    margin-bottom:30px;
    width:136px;
    height:161px;
  }



h1 {
  font-family: "Righteous", cursive;
  font-size: 36px;
  color: white;
  margin-bottom:60px;
}


button {
  width: 246px;
  height: 54px;
  padding: 16px 22px;
  border-radius: 5px;
  color: #D70900;
  border: 1px;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background-color: #cea2a0
}
`