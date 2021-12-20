import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components"

export default function Header() {
    let history = useHistory();

    return(
        <HeaderStyle >
            <h1 onClick={() => history.push('/')}>RepoProvas</h1>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.header`
    height: 80px;
    width: 100vw;
    background-color: #303030;
    border-bottom: 1px solid #505050;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    color: #00ffff;
    font-weight: 700;
    position: fixed;
    left: 0;
    top: 0;
    cursor: initial;
    & h1 {
        cursor: pointer;
    }
`;