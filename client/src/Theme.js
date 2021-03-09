import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
    :root {
        box-sizing: border-box;
        --header-color:#444;
        --card-green-color:hsl(11,73%,66%);
        font-size: 62.5%;
    }
    *,
    ::before,
    ::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {
        width: 100%;
        height: 100%;
    }
    main{
        padding: 0 2.4rem;
    }
    a{
        text-decoration:none;
    }
`;