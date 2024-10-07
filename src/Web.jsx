import { Header, Instrucciones, NavbarMenu, QA, SectionContaier } from "./components/index"


function Web() {

  return (
    <>
      <NavbarMenu />
      <Header />   
      <SectionContaier>
        <p> Guarde mensajes de voz con nuestros teléfonos de disco impecablemente restaurados como una alternativa única a los libros de visitas escritos. </p>
        <p> ¿Y si te dijera que durante el evento puedes tener un teléfono encendido y tus invitados dejarte mensajes? Emocionante, ¿verdad? </p>
        <p> Aqui va un video </p>
      </SectionContaier>
      <SectionContaier>
        <p> ¿QUE ME INCLUYE? </p>
        <aside>          
          <QA />
        </aside>
        <img src="" alt="" />
      </SectionContaier>
      <SectionContaier>
        <p> ¿CÓMO FUNCIONA? </p>
        <Instrucciones />
      </SectionContaier>
      <SectionContaier>
        <p>Aqui va un componente en el que le pondremos imagenes de eventos reales a modo colage</p>
      </SectionContaier>
      <SectionContaier>
        <p>Aqui debe ir un carroussell como el que hicimos en visualshow al inicio de todo</p>
      </SectionContaier>
      <h1>Definir el método de pago, buscar información</h1>
      <h1>Definir en el footer si tendremos como en visualshow un apartado de contacto con formulario</h1>
      <h1>Definir en el footer el apartado legal y el link a mi web</h1>
    </>
  )
}

export default Web
