import { MediaSlider, NavItem } from '../../components'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { useContext, useEffect, useRef } from 'react'
import { LoadContext } from '../../context/LoadContext'
import Slider from 'react-slick';

const Section2 = () => {
    const workingMode = useWorkingMode()

return (
    <section id='magic-mirror'>
        {workingMode === 'PC' ? (
        <div className='service2Container'>
            <p>¡ÉCHATE UNAS RISAS!</p>
            <h1>ESTOS PODRÍAIS SER VOSOTROS</h1>
            <h2> Revive de nuevo la boda del dia siguiente </h2>   
            <p>Este boton debe llevar al formulario de reserva</p>
            <button>
                <NavItem href='#contacto' label='¡LO QUIERO EN MI BODA!' colorText='var(--accent)' page='home'/>
            </button> 
            <img src="public/img/Extra/FrasesLoop/testFrase.png" alt="fraseBoda" />
            <img src="public/img/telefonoaudiolibro/telf03.webp" alt="fotoBoda" />
        </div>
        ) : 
        (
        <div className='service2Container'>
            <p>¡ÉCHATE UNAS RISAS!</p>
            <h1>ESTOS PODRÍAIS SER VOSOTROS</h1>
            <h2> Revive de nuevo la boda del dia siguiente </h2>   
            <p>Este boton debe llevar al formulario de reserva</p>
            <button>
                <NavItem href='#contacto' label='¡LO QUIERO EN MI BODA!' colorText='var(--accent)' page='home'/>
            </button> 
            <img src="public/img/Extra/FrasesLoop/testFrase.png" alt="fraseBoda" />
            <img src="public/img/telefonoaudiolibro/telf03.webp" alt="fotoBoda" />
        </div>
        )}
    </section>
)
}

export const LazySection2 = () => {
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
            {show ? <Section2 /> : null}
        </section>
    )
}
