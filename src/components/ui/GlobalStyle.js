import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset};

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    color: #262626;
};

h1,h2,h3{
    font-weight: bold;
}

input{
    outline: 1px solid lightgrey;
    border:none;
    border-radius: 5px;
    padding: 5px;
}

button{
    outline: none;
    border:none;
    border-radius: 5px;
    cursor: pointer;
};
    
`;

export default GlobalStyle;
