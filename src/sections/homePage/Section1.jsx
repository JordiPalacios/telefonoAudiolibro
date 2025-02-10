import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TelefonoAudiolibroData from "../../assets/mocks/telefonoAudiolibroData.json";
import { MediaSlider } from "../../components";
import Slider from "react-slick";

export const Section1 = () => {

    // useEffect(() => {
    //     const handleResize = () => {
    //         const newSetttings =
    //             window.innerWidth < 1024
    //                 ? { ...sliderSettings, slidesToShow: 1 }
    //                 : { ...sliderSettings, slidesToShow: 3 }

    //         setSliderSettings(newSetttings)
    //     }

    //     window.addEventListener("resize", handleResize)

    //     handleResize()

    //     return () => {
    //         window.removeEventListener("resize", handleResize)
    //     }
    // }, [])

    // const [sliderSettings, setSliderSettings] = useState({
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // })

    const carouselData = TelefonoAudiolibroData

    var sliderSettings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <div>
        <h1 className='font-semibold text-emerald-300 my-1'>Carousel</h1>
        <Slider {...sliderSettings}>
            {carouselData.map((data) => (
            <MediaSlider
            name={data.name}
            url={data.url}
            styleType="example3"
            isVideo={data.isVideo}
            />
            ))}
        </Slider>
        </div>
    )
}
