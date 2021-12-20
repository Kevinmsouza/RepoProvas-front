import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { getCategories, getSubjects, postTest } from "../../services/repoprovas";
import { sendAlert } from "../shared/alerts";
import { Button, FormWrapper, Input, Select, Title, Wrapper } from "../shared/styledComponents";

export default function Send() {
    const [options, setOptions] = useState({});
    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState(0);
    const [subjectId, setSubjectId] = useState(0);
    const [teacherId, setTeacherId] = useState(0);
    const [url, setUrl] = useState("");
    const [isLoading, setIsloading] = useState(false);
    let history = useHistory();

    useEffect(() => {
        getOptions();
    }, [])

    function getOptions() {
        getCategories()
            .then(res => {
                const newOptions = {...options, categories: res.data}
                setOptions(newOptions);
                getSubjects()
                    .then(res => setOptions({...newOptions, subjects: res.data}))
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

    function subjectIndex() {
        return options.subjects.map(subject => subject.id).indexOf(Number(subjectId));
    }

    function sendTest(e) {
        e.preventDefault();
        if (categoryId < 1 || subjectId < 1 || teacherId < 1) return
        setIsloading(true);
        const body = {
            name,
            categoryId: Number(categoryId),
            subjectId: Number(subjectId),
            teacherId: Number(teacherId),
            url
        };
        postTest(body)
            .then(res => {
                sendAlert({
                    type: "success",
                    title: "Prova enviada! Obrigado pela ajuda!"
                });
                setIsloading(false);
                history.push('/');
            })
            .catch(err => {
                sendAlert({
                    type: "error",
                    title: "Ocorreu um erro!"
                });
                setIsloading(false);
            })
    }

    if (!options.categories || !options.subjects) return <SendStyle>Loading...</SendStyle>

    return(
        <SendStyle>
            <Title>Enviar uma prova: </Title>
            <FormWrapper>
            <Wrapper>
                <Input 
                    disabled={isLoading}
                    required
                    type="text"
                    placeholder="Nome ex: 2020.01" 
                    pattern={/^[0-9]{4}.*/}
                    title="Comece sempre com o ano da prova!"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    width="168px"
                />
                <Select 
                    value={categoryId} 
                    onChange={(e) => setCategoryId(e.target.value)}
                    disabled={isLoading}
                    width= "118px"
                >
                    <option value={0}>Categoria</option>
                    {options.categories.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
                </Select>
            </Wrapper>
            <Select 
                value={subjectId} 
                onChange={(e) => setSubjectId(e.target.value)}
                disabled={isLoading}
            >
                <option value={0}>Disciplina</option>
                {options.subjects.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
            </Select>
            <Select 
                value={teacherId} 
                onChange={(e) => setTeacherId(e.target.value)}
                disabled={isLoading}
            >
                <option value={0}>Professor(a)</option>
                {subjectIndex() >= 0 &&
                    options.subjects[subjectIndex()].teachers.map(option => 
                        <option key={option.id} value={option.id}>{option.name}</option>
                    )
                }
            </Select>
            <Input 
                disabled={isLoading}
                required
                type="text"
                placeholder="Link do pdf" 
                pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)"
                title="Apenas links são permitidos"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            </FormWrapper>
            <Button 
                type='submit'
                font='24px' 
                marginTop='12px'
                disabled={isLoading}
                onClick={sendTest}
            >
                {isLoading? "Loading" : "Enviar Prova"}
            </Button>
        </SendStyle>
    )
}

const SendStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
`;
