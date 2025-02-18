import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

export const NewPage = ({ href, label, url }) => {
    const [isMedia, setIsMedia] = useState(false)

    const navigate = useNavigate()
    const handleClick = (event) => {
        event.preventDefault()
        navigate(href)
        window.scrollTo(0, 0)
    }

    useEffect (() => {
        setIsMedia(url ? true : false)
    }, [url])

return (
    <a 
    href={href} 
    onClick={handleClick} 
    aria-label={`Enlace a la página de ${label}`}>
    {isMedia ?
        <img className='w-1/2 h-auto' src={url} alt={label} />
        :
        label
    }
    </a>
)
}

NewPage.propTypes = {
    href: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}
