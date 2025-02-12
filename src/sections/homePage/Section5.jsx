import { useWorkingMode } from '../../assets/Customhooks/useWorkingMode'
import { useContext, useEffect, useRef } from 'react'
import { LoadContext } from '../../context/LoadContext'

const Section5 = () => {
    const workingMode = useWorkingMode()

return (
    <section id='instructions'>
        {workingMode === 'PC' ? (
        <div className='service2Container'>
            <div className="service2ContentContainer">
                <div className="service2DescriptionContainer">  
                    <h1>¿CON CUAL TE QUEDAS?</h1>   
                    <p>Aquí van una imagen que esta en el pdf</p>
                </div>
            </div>
        </div>
        ) : 
        (
        <div className='service2Container'>
            <h1>¿CON CUAL TE QUEDAS?</h1>   
            <p>Aquí van una imagen que esta en el pdf</p>
        </div>
        )}
    </section>
)
}

export const LazySection5 = () => {
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
            {show ? <Section5 /> : null}
        </section>
    )
}
