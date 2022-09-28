import styled from "styled-components";

export default function Action(){
    return(
        <Action_footer className="footer">
                <ButtonContainer>
                    <Button className="error">Não lembrei</Button>  
                    <Button className="almost">Quase não lembrei</Button>
                    <Button className="zap">Zap!</Button>
                </ButtonContainer>
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
    padding: 14px 10px;
    font-size: 18px;
    color: black;
    position: fixed;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
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

