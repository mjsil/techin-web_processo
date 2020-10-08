import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    text-align: center;
    background: #282c34;
    min-height: 100vh;
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    img {
        height: 40vmin;
        pointer-events: none;

        animation: ${rotate} 20s linear infinite;
    }

    input {
        height: 40px;
        width: 400px;
        font-size: larger;
        margin: 10px;
        border-radius: 8px;
    }

    button {
        color: #61dafb;
    }
`;
