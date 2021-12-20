import styled from "styled-components";
import { Title } from "./styledComponents";
import Test from "./Test";

export default function Category({name, tests, sortBy, target}) {
    tests = tests.filter(test => sortBy == 0 ? test.subject.id == target : test.teacher .id == target )

    if(!tests.length) return ''

    return (
        <div>
            <Title>{name}</Title>
            <Container>
                {tests.map(test => (
                <Test 
                    key={test.id}
                    name={test.name} 
                    url={test.url} 
                    sortBy={sortBy} 
                    teacher={test.teacher.name} 
                    subject={test.subject.name}
                />))}
            </Container>
        </div>
    )
}

const Container = styled.div`
    border-top: 5px solid #707070;
    width: 90vw;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;