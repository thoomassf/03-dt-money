import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // Zerar espaçamentos padrões
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Definir estilização de focus padrão
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
  }

  // Definir cor de fundo da tela
  body {
    background-color: ${props => props.theme['gray-800']};
    color: ${props => props.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  // Definir estilo padrão da fonte
  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
`