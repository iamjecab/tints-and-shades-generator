import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 300;
}
body{
        font-family: 'Ubuntu', sans-serif;
        button, svg{
                cursor: pointer;
        }
        font-weight: 300;
       background-color: var(--white);
       color: var(--black)
}

:root{
        --white: ${({ theme }) => (theme === "white" ? "white" : "black")};
        --black: ${({ theme }) => (theme === "white" ? "black" : "white")}; 
}
`;

export default GlobalStyles;
