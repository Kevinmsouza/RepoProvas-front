import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { SquareButton, Title } from "../shared/styledComponents";

export default function See() {
    let history = useHistory();

    return (
        <SeeStyle>
            <Title>Escolha por qual metodo deseja procurar provas:</Title>
            <SquareButton onClick={() => history.push('/see/subjects')}>Disciplinas</SquareButton>
            <SquareButton onClick={() => history.push('/see/teachers')}>Professores</SquareButton>
        </SeeStyle>
    );
}

const SeeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
`;

