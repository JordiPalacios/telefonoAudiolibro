import { NavbarMenu } from '../../components'


export const Presentation = () => {

return (
    <header className=' flex flex-row'>
        <NavbarMenu />
        <div className="presentationContainer">              
            <h1>ESCUCHA Y GUARDA PARA
                SIEMPRE LA VOZ DE TUS
                INVITADOS
            </h1>
            <p>
                Cada dia no se tiene a toda la familia y amigos juntos
                Aprovecha para que todos te dejen sus mensajes
            </p>
            <button>
                <a href="#contacto">¡Agenda tu reunión!</a>
            </button>
            <p>
                El 99% de las personas que no lo tienen
                en su boda se arrepienten. 
            </p>
        </div>
        <div>
            <img src="public/img/telefonoaudiolibro/telf01.webp" alt="telefonoaudiolibro"/>           
        </div>
    </header>
)
}
