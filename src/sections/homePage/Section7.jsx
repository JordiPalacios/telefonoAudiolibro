import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { useContext, useEffect, useRef } from 'react'
import { LoadContext } from '../../context/LoadContext'

const Section7 = () => {
    const workingMode = useWorkingMode()

return (
    <section id='magic-mirror'>
        {workingMode === 'PC' ? (
            <div>                
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
                <p className='text-bold'>
                    El 99% de las personas que no lo tienen
                    en su boda se arrepienten. 
                </p>
                </div>
                <div>
                    <img src="public/img/telefonoaudiolibro/telf01.webp" alt="telefonoaudiolibro"/>           
                </div>
            </div>
        ) : 
        (
        <div className='service2Container'>
            <div className="presentationContainer">              
                <h1>¿ES FÁCIL DE USAR?</h1>
                <h2>No podrá serlo más</h2>
                <p> Al pulsar el botón, tus invitados ya podrán dejar
                sus mensajes al descolgar.</p>
                <p> Éstos ya quedarán guardados  al colgar el
                teléfono. </p>
                <p>NO WIFI - NO cables - 15h de batería - Grabación ilimitada</p>
                <p>Aqui el boton lleva al WhatsApp</p>
                <button>
                    <a href="#contacto">COMPROBAR DISPONIBILIDAD</a>
                </button>
                </div>
                <div>
                    <img src="public/img/telefonoaudiolibro/telf01.webp" alt="telefonoaudiolibro"/>           
            </div>
        </div>
        )}
    </section>
)
}

export const LazySection7 = () => {
    const { show, setShow } = useContext(LoadContext)
    const elementRef = useRef()

    useEffect( function () {
        const onChange = (entries, observer) => {
            const element = entries[0]
            if (element.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '400px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return (
        <section ref={elementRef}>
            {show ? <Section7 /> : null}
        </section>
    )
}
