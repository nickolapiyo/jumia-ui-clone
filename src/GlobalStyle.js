import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    :root {
        --maxWidth: 1184px;
        --darkGrey: #1c1c1c;
        --white: #ffffff;
    }

    * {
        box-sizing: border-box;
        font-family: Roboto,-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;
    }
`;
