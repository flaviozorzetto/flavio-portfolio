import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
        appearance: none;
        border: none;
        outline: none;
        font-size: 1rem;
    }

    button {
        background: inherit;
        cursor: pointer;
    }

    body {
        height: 100vh;
        overflow: hidden;
    }

    #root {
        height: 100%;
    }
`;

export default GlobalStyle;
