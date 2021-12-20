import styled from "styled-components"

export default function Test({name, url, sortBy, teacher, subject}) {
    return(
        <a target="blank" href={url}>
            <TestStyle >
                <HalfBox>
                    Prova: {name}
                </HalfBox>
                <HalfBox>
                    {sortBy == 0 ?
                        `Professor(a): ${teacher}`
                        :
                        `Disciplina: ${subject}`
                    }
                </HalfBox>
            </TestStyle>
        </a>
    )
}

const TestStyle = styled.div`
    width: 260px;
    background-color: #005050;
    height: 80px;
    margin: 5px;
    border-radius: 5px;
`;

const HalfBox = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
`;