import { useContext, useEffect, useRef } from 'react'
import { InfiniteLoop } from '../../components'
import { LoadContext } from '../../context/LoadContext'

const Companies = () => {
return (
    <section>
        <div>
            <h2>Empresas que han confiado en VisualShow</h2>
            <hr className="line"></hr>
            <div>  
                <InfiniteLoop 
                equal = {false}
                className='mediaEqual'
                />
                <InfiniteLoop 
                equal = {false}
                className='mediaEqual'
                />
            </div>
        </div>
    </section>
)
}

export const LazyCompanies = () => {
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
            {show ? <Companies /> : null}
        </section>
    )
}
