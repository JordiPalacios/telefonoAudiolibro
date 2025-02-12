import { useContext, useEffect, useRef } from 'react'
import FrasesData from '../../assets/mocks/frasesData.json'
import { InfiniteLoop } from '../../components'
import { LoadContext } from '../../context/LoadContext'

const FrasesBodas = () => {
    const frasesData = FrasesData
return (
    <section>
        <div className="companiesContainer">
            <h2>Aquí van saliendo frases pero no me funciona</h2>
            <hr className="line"></hr>
            <div className="logoCompanies">  
                {frasesData.map((data) => (
                    <InfiniteLoop 
                        key={data.company} 
                        urlImg={data.url} 
                        nameImg={data.name} 
                        equal={false}/>
                    ))}
                {frasesData.map((data) => (
                    <InfiniteLoop 
                        key={data.company} 
                        urlImg={data.url}
                        nameImg={data.name} 
                        equal={false}/>
                    ))}
            </div>
        </div>
    </section>
)
}

export const LazyFrases = () => {
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
            {show ? <FrasesBodas /> : null}
        </section>
    )
}
