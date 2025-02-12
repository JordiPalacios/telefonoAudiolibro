import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { useContext, useEffect, useRef } from 'react'
import { LoadContext } from '../../context/LoadContext'

const Section4 = () => {
    const workingMode = useWorkingMode()

return (
    <section id='instructions'>
        {workingMode === 'PC' ? (
        <div className='service2Container'>
            <div className="service2ContentContainer">
                <div className="service2DescriptionContainer">  
                    <h1>¿CÓMO FUNCIONA?</h1>
                    <hr className='line'></hr>    
                    <p>Aquí van las 3 cartas de instrucciones</p>
                </div>
            </div>
        </div>
        ) : 
        (
        <div className='service2Container'>
            <h1>¿CÓMO FUNCIONA?</h1>
            <hr className='line'></hr>    
            <p>Aquí van las 3 cartas de instrucciones</p>
        </div>
        )}
    </section>
)
}

export const LazySection4 = () => {
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
            {show ? <Section4 /> : null}
        </section>
    )
}
