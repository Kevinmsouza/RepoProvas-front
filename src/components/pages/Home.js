import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { SquareButton, Title } from "../shared/styledComponents";

export default function Home() {
    let history = useHistory();

    return (
        <HomeStyle>
            <Title>Bem vindo! Selecione o que procura:</Title>
            <SquareButton onClick={() => history.push('/see')}>Ver provas antigas</SquareButton>
            <SquareButton onClick={() => history.push('/send')}>Enviar uma prova</SquareButton>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
`;

