import styled from "styled-components";

const Title = styled.div`
    font-size: 20px;
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
`;

export {
    SquareButton,
    Title,
};
