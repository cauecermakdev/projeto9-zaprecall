import styled from "styled-components";

function doNothing(){
    return;
}

function numeroRespondidas(listaPerguntas){
    
    let numeroDePerguntasRespondidas = 0;

    listaPerguntas.forEach((n)=> 
        n.icone_name !== "play-outline" && n.icone_name !== ""  ?numeroDePerguntasRespondidas++:doNothing()
    );
 
    return numeroDePerguntasRespondidas;
}

export default function Result(props) {
    
    return (
        <Resultado data-identifier="flashcard-counter">
            {numeroRespondidas(props.listaPerguntas)}/{props.listaPerguntas.length} CONCLUÍDOS
        </Resultado>
    );
};

const Resultado = styled.div`
    
    width:100%;
    position:fixed;
    bottom:0px; 
    left:0px;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    z-index:3;
    padding:10px;
`