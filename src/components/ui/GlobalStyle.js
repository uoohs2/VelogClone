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

input, textarea{
    outline: 1px solid lightgrey;
    border:none;
    border-radius: 5px;
    padding: 5px;
}

input:focus{
    outline:2px solid lightgrey;
}

button{
    outline: none;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    background-color: white;
};
    
`;

export default GlobalStyle;
