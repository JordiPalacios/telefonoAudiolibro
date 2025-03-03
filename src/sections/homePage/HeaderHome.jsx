import { NavbarMenu, NavItem, WhatsAppMessage } from '../../components'


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
            <button className='mt-8'>
                <WhatsAppMessage
                msg="https://wa.me/34653781239?text=¡Quiero%20más%20información%20sobre%20telefonoaudiolibro.es!"
                label='¡Agenda tu reunión!'/>
            </button>
            <p className='text-bold'>
                El 99% de las personas que no lo tienen
                en su boda se arrepienten.
            </p>
            <img className='w-xs h-auto' src="public/img/telefonoaudiolibro/telf01.webp" alt="telefonoaudiolibro"/>
        </div>
    </header>
)
}
