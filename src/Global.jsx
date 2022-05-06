import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        height: 100vh;
        background: #021f1f;
    }

    #root {
        height: 100%;
    }
`;

export default GlobalStyle;
