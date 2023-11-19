import { Baseboard } from './container/baseboard';
import { Estudio } from './container/estudio';
//import { Gestacao } from './container/Gestacao';
import { Externo } from './container/Externo';
import { Header } from './container/header'
import { GlobalStyle } from './container/styles/global';
import { Inicial } from './container/top';

export function App() {
  return (
    <>
      <Header/>
      <Inicial/>
      <Externo/>
      {/*<Gestacao/>*/}
      <Estudio/>
      <Baseboard/> 
      <GlobalStyle />
    </>
  );
}

