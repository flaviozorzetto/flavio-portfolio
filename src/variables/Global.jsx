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
        background: radial-gradient(circle, rgba(1,89,88,1) 0% 10%, rgba(2,53,53,1) 100%);
    }

    #root {
        height: 100%;
    }
`;

export default GlobalStyle;
