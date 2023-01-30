import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// declarar modulo para que o styled-components entenda as cores globais definidas
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
