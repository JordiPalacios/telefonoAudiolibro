import { ImgSlider, NavItem } from '../../components'
import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { useContext, useEffect, useRef, useState } from 'react'
import { LoadContext } from '../../context/LoadContext'
import magicMirrorLedData from '../../assets/mocks/magicMirrorLedData.json'
import Slider from 'react-slick';

const Service2 = () => {
    const workingMode = useWorkingMode()

    const fotomatonData = magicMirrorLedData

    useEffect (() => {
        const handleResize = () => {
        const newSetttings = window.innerWidth < 1024
        ? {...sliderSettings, slidesToShow: 1}
        : {...sliderSettings, slidesToShow: 1}

        setSliderSettings(newSetttings)
        }
    
        window.addEventListener('resize', handleResize)

        handleResize()
        
        return () => {
        window.removeEventListener('resize', handleResize)
        }
    }, [])

    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    })

return (
    <section id='magic-mirror'>
        {workingMode === 'PC' ? (
        <div className='service2Container'>
            <div className="service2ContentContainer">
            <div className="fotomatonImgService2">            
                <Slider {...sliderSettings}>
                    {fotomatonData.map((data) => (
                        <ImgSlider 
                        key={data.id} 
                        urlImg={data.urlImg} 
                        imgName={data.id} 
                        styleType='services'/>
                        ))}
                </Slider>
            </div>
            <div className="service2DescriptionContainer">  
                <h1>Magic Mirror LED</h1>
                <h2> EL FOTOMATÓN QUE&nbsp;<span>NO SE ESPERAN</span></h2>    
                <hr className='line'></hr>    
                <p>
                    MAGIC MIRROR LED ES SÓLO  <span style={{ color: 'var(--accent)', background: 'none'}}>APTO</span> PARA <span style={{ color: 'var(--accent)', background: 'none'}}>PAREJAS</span> QUE QUIERAN <span style={{ color: 'var(--accent)', background: 'none'}}>DIFERENCIARSE</span> Y ALEJARSE DEL TÍPICO FOTOMATÓN DE HACE 10 AÑOS. <br />
                    <br />
                    AHORA, PREPÁRATE PORQUE TODOS <span style={{ color: 'var(--accent)', background: 'none'}}>TE VAN A PREGUNTAR</span> DE DÓNDE LO HAS SACADO. <br />
                    <br />
                    Asegúrate de que se lo cuenten a todos sus amigos, mira: <br />
                    <span className='citaReview'>&quot; Maria puso un fotomatón muy raro que fue la pxxx hostia, y vaya fiestón se montó &quot;</span>
                    </p>
                <div className="detailsService2"> 
                    <h2>¿Qué incluye?</h2>                   
                    <ul>
                        <li>• Alfombra roja</li>
                        <li>• Separadores de seguridad</li>
                        <li>• Impresión al momento</li>
                        <li>• Máxima calidad de imágen</li>
                        <li>• La mejor mesa de ATREZZO que verás nunca</li>
                    </ul>
                    <span> CREAREMOS EL FIESTÓN </span>
                </div>      
                <div className="buttonsContainer">
                    <button id='S2PcFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                        <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
                    </button>
                </div>
            </div>
            </div>
        </div>
        ) : 
        (
        <div className='service2Container'>
            <h1>Magic Mirror LED</h1>              
            <h2>EL FOTOMATÓN QUE&nbsp;<span>NO SE ESPERAN</span></h2> 
            <div className="service2ContentContainer">              
                <div className="fotomatonImgService2">            
                    <Slider {...sliderSettings}>
                        {fotomatonData.map((data) => (
                            <ImgSlider 
                            key={data.id} 
                            urlImg={data.urlImg} 
                            imgName={data.id} 
                            styleType='services'/>
                            ))}
                    </Slider>
                </div>
                <div className="service2DescriptionContainer">                             
                    <p>
                        MAGIC MIRROR LED ES SÓLO  <span style={{ color: 'var(--accent)', background: 'none'}}>APTO</span> PARA <span style={{ color: 'var(--accent)', background: 'none'}}>PAREJAS</span> QUE QUIERAN <span style={{ color: 'var(--accent)', background: 'none'}}>DIFERENCIARSE</span> Y ALEJARSE DEL TÍPICO FOTOMATÓN DE HACE 10 AÑOS. <br />
                        <br />
                        AHORA, PREPÁRATE PORQUE TODOS <span style={{ color: 'var(--accent)', background: 'none'}}>TE VAN A PREGUNTAR</span> DE DÓNDE LO HAS SACADO. <br />
                        <br />
                        Asegúrate de que se lo cuenten a todos sus amigos, mira: <br />
                        <br />
                        <span className='citaReview'>&quot; Maria puso un fotomatón muy raro que fue la pxxx hostia, y vaya fiestón se montó &quot;</span>
                        </p>
                    <div className="detailsService2"> 
                        <h2>¿Qué incluye?</h2>                   
                        <ul>
                            <li>• Alfombra roja</li>
                            <li>• Separadores de seguridad</li>
                            <li>• Impresión al momento</li>
                            <li>• Máxima calidad de imágen</li>
                            <li>• La mejor mesa de ATREZZO que verás nunca</li>
                        </ul>
                        <span> CREAREMOS EL FIESTÓN </span>
                    </div>
                    <div className="buttonsContainer">
                        <button id='S2OthersFormularioContacto' aria-label='Nos mueve hasta el formulario de contacto'>
                            <NavItem href='#contacto' label='¡Agenda tu reunión!' colorText='var(--accent)' page='home'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        )}
    </section>
)
}

export const LazyService2 = () => {
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
            rootMargin: '100px'
        })

        observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return (
        <section ref={elementRef}>
            {show ? <Service2 /> : null}
        </section>
    )
}
