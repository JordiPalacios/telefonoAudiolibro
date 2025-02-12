import { FormContact } from '../../components/FormContact';

export const ContactUs = () => {

  const content = (
    <section id="comprobar-disponibilidad">
        <div className="contactoContainer">
          <h2>¡Enhorabuena! Quedan libres dos teléfonos en color Blanco</h2>
          <p>Ahora, solo necesitamos 4 datos para el contrato de reserva</p>
          <div className="elementsContainer">
            <div className="formContainer">       
              <FormContact />
            </div>
            <div className="mediaContainer">
              <img style={{ borderRadius: '50%', width: '300px', filter: 'drop-shadow(0 0 2px var(--accent-2)'}} src="./img/servicios/LogoVisualShow.webp" alt="logoVSwebp" />
            </div>
          </div>
        </div>
    </section>
  )
    
return (
    <>
      {content}
    </>
)
}