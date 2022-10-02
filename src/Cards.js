import styled from "styled-components";
import React from "react";
import Action from "./Action";
/* import GlobalStyle from "./GlobalStyle"; */ //usando pelo display-none

function doNothing() {
  return;
}

function fechaOutrosCards(listaPerguntas) {
  listaPerguntas.forEach((n) => {
    n.aberto = false;
  });


}

function clickCard(i, setPerguntasClicadas, perguntasClicadas, listaPerguntas) {
  
  listaPerguntas[i].icone_name = "";
  console.log(listaPerguntas[i].icone_name);
  perguntasClicadas = [];

  if (!perguntasClicadas.includes(i)) { setPerguntasClicadas([...perguntasClicadas, i]) };

  fechaOutrosCards(listaPerguntas);
  
  listaPerguntas[i].aberto === false ? listaPerguntas[i].aberto = true : listaPerguntas[i].aberto = false;
}

function mostrarResposta(card,apresentaResposta,setApresentaResposta){
  const boolMostraResposta = true;
  setApresentaResposta(boolMostraResposta);
}


function mostraPerguntaResposta(listaPerguntas, props, i, card,apresentaResposta,setApresentaResposta) {
  if(apresentaResposta === true && card.aberto == true){
    return card.resposta;
  }

  if (props.perguntasClicadas.includes(i) && props.perguntasClicadas.length === 1) {

    return (
      card.pergunta
    );

  } else {
    /* return card.pergunta; */
    return `Pergunta ${i}`;
  }
}

function mostrarIcone(i, listaPerguntas) {

  if (listaPerguntas[i].icone_name !== "") {
    {/* close-circle help-circle checkmark-circle play-outline*/ }
    return (
      <Icone cor={listaPerguntas[i].icone_name}>
        <ion-icon class="" name={listaPerguntas[i].icone_name}></ion-icon>
      </Icone>
    );
  } else {
    return;
  }

}



function mostrarIconeMostraResposta(i, listaPerguntas, perguntasClicadas,card,apresentaResposta,setApresentaResposta) {
  
  if (perguntasClicadas.includes(i) == true) {
    return (
      <ContainerIconeVira >
        <Icone cor={listaPerguntas[i].icone_name} onClick={()=> mostrarResposta(card,apresentaResposta,setApresentaResposta)}>
          <ion-icon class="repeat" name="repeat"></ion-icon>
        </Icone>
      </ContainerIconeVira>
    );
  } else {
    return;
  }

  /*  */

}




export default function Cards(props) {//Perguntas({setpPerguntasClicadas, perguntasClicadas})


  return (

    <ContainerFlashCard>
      {/* <GlobalStyle></GlobalStyle> */}
      {props.listaPerguntas.map((card, i) =>
        <Flashcard
          className={props.perguntasClicadas.includes(i) === true ? "aberto" : ""}
          key={i}
          onClick={() => clickCard(i, props.setPerguntasClicadas, props.perguntasClicadas, props.listaPerguntas)}>
          <ContentCard className={props.listaPerguntas[i].icone_name}>
            {mostraPerguntaResposta(props.listaPerguntas, props, i, card,props.apresentaResposta,props.setApresentaResposta)}
            {mostrarIcone(i, props.listaPerguntas)}
          </ContentCard>
          {/* {iconeResposta(i,props.listaPerguntas,props.perguntasClicadas)} */}

      {/*     <ContainerIconeVira i={i}  listaPerguntas={props.listaPerguntas}>
            aqui */}
            {mostrarIconeMostraResposta(i, props.listaPerguntas, props.perguntasClicadas,card,props.apresentaResposta,props.setApresentaResposta)}
        {/*   </ContainerIconeVira> */}

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


/* close-circle help-circle checkmark-circle play-outline */

&.checkmark-circle {
  color: var(--cor-zap);
  text-decoration: line-through;
}

&.help-circle {
  color: var(--cor-quase-nao-lembrei);
  text-decoration: line-through;
}

&.close-circle {
  color: var(--cor-nao-lembrei);
  text-decoration: line-through;
}


`

const ContainerFlashCard = styled.div`
  margin: 80px 0px 120px 0px;  
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

const Icone = styled.div`

  color: var(--preto);
  width: 23px;
  height: 23px;

  /* close-circle help-circle checkmark-circle play-outline */
/* 
.close-circle{
  color: var(--nao-lembrei);  
}

 .help-circle {
  color: var(--cor-quase-nao-lembrei);
}

.checkmark-circle {
  color: var(--cor-zap);
} */


/* cor dos icones dos cards */
&:first-child{
  color:${props => {
    if (props.cor === "close-circle") {
      return "red;"
    } else if (props.cor === "help-circle") {
      return "var(--cor-quase-nao-lembrei);"
    } if (props.cor === "checkmark-circle") {
      return "var(--cor-zap)";
    }
  }};

}
`

const ContainerIconeVira = styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
  padding-right:10px;

`