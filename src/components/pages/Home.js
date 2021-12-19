import styled from "styled-components";
import { SquareButton, Title } from "../shared/styledComponents";
export default function Home() {

    return (
        <HomeStyle>
            <Title>Bem vindo! Selecione o que procura:</Title>
            <SquareButton>Ver provas antigas</SquareButton>
            <SquareButton>Enviar uma prova</SquareButton>
        </HomeStyle>
    );
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
`;

