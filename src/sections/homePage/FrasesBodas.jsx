import { useContext, useEffect, useRef } from 'react'
// import FrasesData from '../../assets/mocks/frasesData.json'
import { InfiniteLoop } from '../../components'
import { LoadContext } from '../../context/LoadContext'

const FrasesBodas = () => {
    // const frasesData = FrasesData
return (
    <section> 
        <div className="logo">  
            {/* {frasesData.map((data) => (
                <InfiniteLoop 
                    key={data.key} 
                    urlImg={data.url} 
                    nameImg={data.phrase} 
                    equal={false}/>
                ))}
            {frasesData.map((data) => (
                <InfiniteLoop 
                    key={data.key} 
                    urlImg={data.url}
                    nameImg={data.phrase} 
                    equal={false}/>
                ))} */}
            <InfiniteLoop 
            urlImg='public/img/empresas/Acciona.webp'
            nameImg='Acciona'
            equal = {true}
            className='mediaEqual'
            />
            <InfiniteLoop 
            urlImg='public/img/empresas/Acciona.webp'
            nameImg='Acciona'
            equal = {true}
            className='mediaEqual'
            />
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
            rootMargin: '10px'
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
