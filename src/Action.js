import styled from "styled-components";
import listaPerguntas from "./listaPerguntas";

function fechaOutrosCards(listaPerguntas) {
    listaPerguntas.forEach((n) => {
      n.aberto = false;
    });
  
    
  }

function doNothing(){
    return;
}

function buscaCardAberto(listaPerguntas){
    let cardAberto = -1;
    listaPerguntas.forEach((n,i) => n.aberto === true ? cardAberto = i :  doNothing());
    return cardAberto;
}

function botaClicado(nameIcone, setNomeIcone, listaPerguntas,perguntasClicadas,setPerguntasClicadas,setApresentaResposta) {
    //busca o card aberto
    let indice_card_aberto = buscaCardAberto(listaPerguntas);
    
    //coloca nome do icone no objeto
    if(indice_card_aberto!==-1){
        listaPerguntas[indice_card_aberto].icone_name = nameIcone;
        setNomeIcone(nameIcone);
    }

    perguntasClicadas =[];
    setPerguntasClicadas(perguntasClicadas);
    setApresentaResposta(false);
    /* fechaOutrosCards(listaPerguntas); */
}



export default function Action(props) {
    return (
        <Action_footer >
            <div className="footer">
                <ButtonContainer >
                    {/* close-circle help-circle checkmark-circle */}
                    <Button className="error" onClick={() => botaClicado("close-circle", props.setNomeIcone,props.listaPerguntas,props.perguntasClicadas,props.setPerguntasClicadas,props.setApresentaResposta)}>Não lembrei</Button>
                    <Button className="almost" onClick={() => botaClicado("help-circle", props.setNomeIcone,props.listaPerguntas,props.perguntasClicadas,props.setPerguntasClicadas,props.setApresentaResposta)} >Quase não lembrei</Button>
                    <Button className="zap" onClick={() => botaClicado("checkmark-circle", props.setNomeIcone,props.listaPerguntas,props.perguntasClicadas,props.setPerguntasClicadas,props.setApresentaResposta)}>Zap!</Button>
                </ButtonContainer>
                {/* <Result>{numeroRespondidas(props.listaPerguntas)}/{props.listaPerguntas.length} CONCLUÍDOS</Result> */}
            </div>
        </Action_footer>
    );
}

const Action_footer = styled.div`

    display: flex;
    flex-direction:row;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    

    .footer {
    width:100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    z-index: 1;
    width: 100%;
    min-height: 70px;
    padding: 14px 10px 40px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 20px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }


`

const ButtonContainer = styled.div`
    width:300px;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Button = styled.div`   
    width: 100%;
    height: 40px;
    background-color: green;
    color: white;
    font-size: 12px;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0px 5px;

    &:hover {
    filter: brightness(0.7)
    }
    &.error {
    background-color: var(--cor-nao-lembrei);
    }

    &.almost {
    background-color: var(--cor-quase-nao-lembrei);
    }

    &.zap {
    background-color: var(--cor-zap);
    }
`

/* const Result = styled.div`
    opacity:0.8;
` */