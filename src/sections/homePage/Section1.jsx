import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TelefonoAudiolibroData from "../../assets/mocks/telefonoAudiolibroData.json";
import { MediaSlider } from "../../components";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useWorkingMode } from "../../assets/Customhooks/useWorkingMode";

export const Section1 = () => {
    const telefonoAudiolibroData = TelefonoAudiolibroData
    const workingMode = useWorkingMode('mobile')

    useEffect(() => {
        const handleResize = () => {
            const newSetttings =
                window.innerWidth < 1024
                    ? { ...sliderSettings, slidesToShow: 1 }
                    : { ...sliderSettings, slidesToShow: 3 }

            setSliderSettings(newSetttings)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => {
            window.removeEventListener("resize", handleResize)
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
        <div className="sliderContainer">
            <Slider {...sliderSettings}>
                {telefonoAudiolibroData.map((data) => (
                    <MediaSlider
                    key = {data.id}
                    name={data.name}
                    url={data.url}
                    styleType={workingMode}
                    isVideo={data.isVideo}
                    />
                ))}
            </Slider>
        </div>
    )
}
