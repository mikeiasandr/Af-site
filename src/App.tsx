import styled from 'styled-components'
import { Externo } from './container/Externo';
import { Header } from './container/header'
import { GlobalStyle } from './container/styles/global';

const Title = styled.h1`
  color: #110836;
`

export function App() {
  return (
    <>
      {/*<Header/>*/}
      <Externo/>
      <GlobalStyle />
    </>
  );
}

