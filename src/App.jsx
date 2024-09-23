import { Guide } from './components/guide'

function App() {

  return (
    <>
      <h1>telefonoaudiolibro.es</h1>
      <Guide txtSide={'left'} srcImg={'public/img/step1.png'} nameImg={'Paso1'} txtTittle={'¡Descuento!'} txtL1={'Este es el paso 1'}  />
      <Guide txtSide={'left'} srcImg={'public/img/step1.png'} nameImg={'Paso1'} txtTittle={'¡Descuento!'} txtL1={'Este es el paso 1'} txtL3={'Este es el paso 3'}  />
    </>
  )
}

export default App
