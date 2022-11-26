import styled from 'styled-components'
import { Baseboard } from './container/baseboard';
import { Estudio } from './container/estudio';
import { Externo } from './container/Externo';
import { Header } from './container/header'
import { GlobalStyle } from './container/styles/global';
import { Inicial } from './container/top';

const Title = styled.h1`
  color: #110836;
`

export function App() {
  return (
    <>
      <Header/>
      <Inicial/>
      <Externo/>
      <Estudio/>
      <Baseboard/>
      <GlobalStyle />
    </>
  );
}

