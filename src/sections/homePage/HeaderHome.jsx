import { NavbarMenu, NavItem } from '../../components'


export const HeaderHome = () => {

return (
    <header>
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
            <p>Este boton que nos lleve al WhatsApp</p>
            <button>
                <NavItem href='#comprobar-disponibilidad' label='¡Agenda tu reunión!' colorText='var(--accent)' page='paginaReservas'/>
            </button>
            <p className='text-bold'>
                El 99% de las personas que no lo tienen
                en su boda se arrepienten. 
            </p>
        </div>
        <img className='w-xs h-auto' src="public/img/telefonoaudiolibro/telf01.webp" alt="telefonoaudiolibro"/>           
    </header>
)
}
