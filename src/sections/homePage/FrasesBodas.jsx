import { useContext, useEffect, useRef } from 'react'
import { InfiniteLoop } from '../../components'
import { LoadContext } from '../../context/LoadContext'

const FrasesBodas = () => {
return (
    <section> 
        <div className="logo">  
            <InfiniteLoop 
            urlImg='public/img/Extra/FrasesLoop/testFrase.png'
            nameImg='FraseMotivadora1'
            equal = {true}
            className='mediaEqual'
            />
            <InfiniteLoop 
            urlImg='public/img/Extra/FrasesLoop/testFrase.png'
            nameImg='FraseMotivadora2'
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
