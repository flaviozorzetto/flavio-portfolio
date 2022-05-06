import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle `
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        min-height: 100vh;
        max-height: 100vh;
    }
`

export default GlobalStyle