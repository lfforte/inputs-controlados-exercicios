
import { createGlobalStyle } from 'styled-components'
import PaginaDoCartao from './Pagina/PaginaDoCartao';
import Formulario from './Componentes/Formulario'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Helvetica;
  }
`

function App() {
  return (
    <>
      <GlobalStyles />
      <PaginaDoCartao />
    </>
  );
}

export default App;
