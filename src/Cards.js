import styled from "styled-components";
import listaPerguntas from "./listaPerguntas";
import React from "react";
/* import GlobalStyle from "./GlobalStyle"; */ //usando pelo display-none

function clickCardPergunta(i, setPerguntasClicadas, perguntasClicadas) {
  perguntasClicadas = [];//quero elemento clicado, vou precisar de todos elementos clicados
  const arrayClicados = [...perguntasClicadas, i];
  if (!perguntasClicadas.includes(i)) { setPerguntasClicadas(arrayClicados) };
  console.log(perguntasClicadas);
}

function mostraPergunta(pergunta) {
  return pergunta;
}

function mostraResposta(resposta) {
  return resposta;
}

function mostraPerguntaResposta(props, i, card) {
  if (props.perguntasClicadas.includes(i) && props.perguntasClicadas.length === 1) {
    return card.resposta;

  } else {
    return card.pergunta;
  }
}

export default function Cards(props) {//Perguntas({setpPerguntasClicadas, perguntasClicadas})
  /* const [clicado, setClicado] = React.useState(false); */
  /* const {perguntasClicadas} = props; *///desestruturacao
  return (

    <ContainerFlashCard>
      {/* <GlobalStyle></GlobalStyle> */}
      {listaPerguntas.map((card, i) =>
        <Flashcard
          className={props.perguntasClicadas.includes(i) ? "aberto" : ""}
          key={i}
          onClick={() => clickCardPergunta(i, props.setPerguntasClicadas, props.perguntasClicadas)}>
          <ContentCard>
            {mostraPerguntaResposta(props, i, card)};
            
            {/* close-circle help-circle checkmark-circle */}
            { <ion-icon  name="play-outline"></ion-icon>}
          </ContentCard>
        </Flashcard>
      )}
      </ContainerFlashCard>
    );
}

const ContentCard = styled.div`
  /* ${props => props.color ? props.color : "white"}; */
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-between;

`

const ContainerFlashCard = styled.div`
  margin-top:80px;  
`

const Flashcard = styled.div`

  width: 300px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  padding: 10px 10px;
  cursor: pointer;
  font-family: 'Recursive', cursive;


&.acerto {
  color: var(--cor-zap);
  text-decoration: line-through;
}

&.help {
  color: var(--cor-quase-nao-lembrei);
  text-decoration: line-through;
}

&.erro {
  color: var(--cor-nao-lembrei);
  text-decoration: line-through;
}


&.aberto {
  min-height: 130px;
  display: flex;
  flex-direction: column;
  background-color: var(--cor-fundo-card);
  cursor: default;
  padding: 20px 10px;
}

.aberto div {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}



.aberto.resposta div {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aberto img {
  cursor: pointer;
}

`