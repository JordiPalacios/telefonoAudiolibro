import { useContext, useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { ReviewsCard } from '../../components'
import ReviewsData from '../../assets/mocks/reviewsData.json'
import { LoadContext } from '../../context/LoadContext';

const Reviews = () => {
    const reviewsData = ReviewsData

    const [sliderSettingsReviews, setSliderSettingsReviews] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    })

    useEffect (() => {      
        const handleResizeReviews = () => {
        const newSetttingsReviews = window.innerWidth < 1300
        ? {...sliderSettingsReviews, slidesToShow: 1, dots: true}
        : {...sliderSettingsReviews, slidesToShow: 3, dots: true}

        setSliderSettingsReviews(newSetttingsReviews)
        }

        window.addEventListener('resize', handleResizeReviews)

        handleResizeReviews()

        return () => {
            window.removeEventListener('resize', handleResizeReviews)
        }
    }, [])

return (
    <section>
        <div className="reviewsContainer">
            <h2><span style={{ color: 'var(--accent)' }}>Qué</span> piensan de nosotros</h2>
            <hr className="line"></hr>
            <div className="fotomatonImgReviews">                       
                    <Slider {...sliderSettingsReviews}>
                        {reviewsData.map((data) => (
                            <ReviewsCard
                            key={data.id}
                            id={data.id}
                            tittle={data.tittle}
                            client={data.client}
                            description={data.description}
                            imgUrl= {data.imgUrl}
                            cardClassName={data.cardClassName}
                            />
                            ))}
                    </Slider>
            </div>
            <a 
            href="https://www.bodas.net/animacion/360-&-magic-mirror-visualshow360--e218488/opiniones" 
            target="_blank" 
            rel='noreferrer'            
            aria-label='Enlace a las opiniones de VisualShow360 en Bodas.net'>
                Ver más
            </a>
            <div className="reviewsMediaContainer">
            <a 
            href="https://www.bodas.net/animacion/360-&-magic-mirror-visualshow360--e218488/opiniones" 
            target="_blank" 
            rel='noreferrer'            
            aria-label='Enlace a las opiniones de VisualShow360 en Bodas.net'>
                <img src="./img/reviews_equipo/bodasNetSVG.svg" alt="bodas.net" />
            </a>                
            </div>
        </div>
        </section>
)
}

export const LazyReviews = () => {
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
            {show ? <Reviews /> : null}
        </section>
    )
}
