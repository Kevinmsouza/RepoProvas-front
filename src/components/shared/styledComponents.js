import styled from "styled-components";

const Title = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    text-align: center;
`;

const SquareButton = styled.div`
    width: ${props => props.width || "200px"};
    height: ${props => props.height || "200px"};
    background-color: #005050;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 20px 0;
    font-size: 28px;
    text-align: center;
    border-radius: 5px;
`;

const Select = styled.select`
    max-width: ${props => props.width || "290px"};
    width: 100%;
    height: 44px;
    background-color: #005050;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    padding-left: 6px;
    margin-bottom: 7px;
    & > option{
        background-color: #005050;
        color: #fff;
        font-weight: bold;
    }
    &:focus{
        outline: none;
    }
`;

const FormWrapper = styled.form`
    max-width: 290px;
`;

const Input = styled.input`
    max-width: ${props => props.width || "290px"};
    width: 100%;
    height: 44px;
    background-color: #005050;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    padding-left: 6px;
    border: none;
    font-family: Roboto;
    color: #fff;
    margin-bottom: 7px;
    &::placeholder{
        color: #777777; 
    }
    &:disabled{
        opacity: 0.7;
    }
    &:focus{
        outline: none;
    }
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
`;

const Button = styled.button`
    width: ${props => props.width || "202px"};
    height: ${props => props.height || "45px"};
    background-color: #005050;
    font-size: ${props => props.font || "18px"};
    font-weight: 700;
    border: none;
    border-radius: 10px;
    color: #fff;
    margin-top: ${props => props.marginTop || "0px"};
`;

export {
    SquareButton,
    Title,
    Select,
    FormWrapper,
    Input,
    Wrapper,
    Button
};
