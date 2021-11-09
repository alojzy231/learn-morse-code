import { createGlobalStyle } from 'styled-components';
import { Header1, Header2, Header3, Paragraph } from './Typography.styles';

const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Noto Sans', sans-serif;
        background-color: ${({ theme: { colors } }) => colors.background};
    }

    h1{
        ${Header1};
    }
    h2{
        ${Header2};
    }
    h3{
        ${Header3};
    }
    p{
        ${Paragraph};
    }
`;

export default GlobalStyles;
