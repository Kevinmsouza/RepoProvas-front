import { useEffect, useState } from "react";
import styled from "styled-components";
import { getSubjects, getTeachers, getTests } from "../../services/repoprovas";
import { sendAlert } from "../shared/alerts";
import Category from "../shared/Category";
import { Select, Title } from "../shared/styledComponents";

export default function See() {
    const [sortBy, setSortBy] = useState(0);
    const [target, setTarget] = useState(0);
    const [options, setOptions] = useState({});
    const [isLoading, setIsloading] = useState(false);

    useEffect(() => {
        getOptions();
    }, [])

    function getOptions() {
        getSubjects()
            .then(res => {
                let newOptions = {...options, subjects: res.data}
                setOptions(newOptions)
                getTeachers()
                    .then(res => {
                        newOptions = {...newOptions, teachers: res.data}
                        setOptions(newOptions);
                        getTests()
                        .then(res => {
                            newOptions = {...newOptions, categories: res.data}
                            setOptions(newOptions);
                        })
                        .catch(err => {
                            sendAlert({
                                type: "error",
                                title: "Ocorreu um erro!"
                            })
                        });
                    })
                    .catch(err => {
                        sendAlert({
                            type: "error",
                            title: "Ocorreu um erro!"
                        })
                    });
            })
            .catch(err => {
                sendAlert({
                    type: "error",
                    title: "Ocorreu um erro!"
                })
            });
    }

    if (!options.teachers || !options.subjects || !options.categories) return <SeeStyle>Loading...</SeeStyle>

    return (
        <SeeStyle>
            <Title>Escolha por qual metodo deseja procurar provas:</Title>
            <Select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                disabled={isLoading}
            >
                <option value={0}>Disciplinas</option>
                <option value={1}>Professores</option>
            </Select>
            <Select 
                value={target} 
                onChange={(e) => setTarget(e.target.value)}
                disabled={isLoading}
            >
                <option value={0}></option>
                {sortBy == 0 ?
                    options.subjects.map((option) => 
                        <option 
                            key={option.id} 
                            value={option.id}
                        >
                            {option.name} | {option.testsQtd} provas
                        </option>
                    )
                    :
                    options.teachers.map((option) => 
                        <option 
                            key={option.id} 
                            value={option.id}
                        >
                            {option.name} | {option.testsQtd} provas
                        </option>
                    )
                }
            </Select>
            <TestsContainer>
                {options.categories.map(option => (
                    <Category 
                        key={option.id} 
                        name={option.name} 
                        tests={option.tests} 
                        sortBy={sortBy} 
                        target={target}
                    />
                ))}
            </TestsContainer>
        </SeeStyle>
    );
}

const SeeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
`;

const TestsContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
