import PropTypes from "prop-types";

export const ImgSlider = ({ url, name, styleType, isVideo }) => {
    let className;

    switch (styleType) {
        case "services":
            className = "imgServices";
            break;

        case "companies":
            className = "imgCompanies";
            break;

        default:
            className = "imgStandard";
            break;
    }

    const handleMouseEnter = (e) => {
        if (isVideo) {
            e.target.style.pointerEvents = "auto"; // Permite interactuar con el video
        }
    };

    const handleMouseLeave = (e) => {
        if (isVideo) {
            e.target.style.pointerEvents = "none"; // Evita que el slider detecte los eventos
        }
    };

    return (
        <div className={className}>
            {isVideo ? (
                <video
                    src={url}
                    alt={name}
                    controls
                    style={{ pointerEvents: "none" }} // Por defecto no permite eventos
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            ) : (
                <img src={url} alt={name} />
            )}
        </div>
    );
};


ImgSlider.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    styleType: PropTypes.string,
    isVideo: PropTypes.bool.isRequired,
};
