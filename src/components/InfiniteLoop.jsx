import FrasesData from '../assets/mocks/frasesData.json'
import PropTypes from 'prop-types'

export const InfiniteLoop = ({ urlImg, nameImg, equal, className }) => {
    const frasesData = FrasesData
    const numImages = Array(32).fill(null)

    let content = equal 
        ? numImages.map((_, index) => (
            <img key={index} src={urlImg} alt={nameImg} />
        ))
        : frasesData.map((data, index) => (
            <img key={index} src={data.url} alt={data.phrase} />
        )) 
    
return (
    <div className={className}>
        {content}
    </div>
)
}

InfiniteLoop.propTypes = {
    urlImg: PropTypes.string.isRequired,
    nameImg: PropTypes.string.isRequired,
    equal: PropTypes.bool.isRequired
}
