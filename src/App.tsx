import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    // Provider que define o tema de cores padrão
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Transactions />
    </ThemeProvider>    
  )
}