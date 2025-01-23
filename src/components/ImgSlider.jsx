
import PropTypes from 'prop-types'

export const ImgSlider = ({ urlImg, imgName , styleType }) => {
      //Decido con la clase a trabajar en el slider
    let className

    switch (styleType) {
        case 'services':
            className = 'imgServices'
            break;
        
        case 'companies':
            className = 'imgCompanies'
            break;

        default:
            className = 'imgStandard'
            break;
    }

    return (
        <div className={className}>
            <video src={urlImg} alt={imgName} muted controls/>
        </div>
    )

}

ImgSlider.propTypes = {
    urlImg: PropTypes.string,
    imgName: PropTypes.string,
    styleType: PropTypes.string
}