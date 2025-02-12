import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { LoadContext } from '../context/LoadContext'

export const NavItem = ({ href, label, page }) => {
  const navigate = useNavigate()
  const { setShow } = useContext(LoadContext)
  let offset

  const handleClick = ( event ) => {
    event.preventDefault()
    setShow(true)

    if (page === 'home') {
      navigate('/')
    } else if (page === 'paginaReservas') {
      if (window.location.pathname !== '/comprobar-disponibilidad') {
        navigate('/comprobar-disponibilidad')
      }
    }

    setTimeout(() => {
      const section = href.startsWith('#')
        ? document.querySelector(href)
        : document.querySelector(href.split('#')[1])

        if (section) {
          if (page === 'home') {
            if ((window.innerWidth > 760) &&(window.innerWidth < 1330)) {
              offset = 
                    section.getBoundingClientRect().top + window.scrollY - 145
            } else {
              offset = 
                    section.getBoundingClientRect().top + window.scrollY - 100
            }
          } else if (page === 'otrosProductos') {
            if (href === '#telefono-audiolibro') {
              offset = 
              section.getBoundingClientRect().top + window.scrollY - 180
            } else {
              if ((window.innerWidth > 760) &&(window.innerWidth < 1330)) {
                offset = 
                section.getBoundingClientRect().top + window.scrollY - 145
              } else {                
                offset = 
                section.getBoundingClientRect().top + window.scrollY - 100
              }
            }
          }
          
          window.scrollTo ({
            top: offset,
            behavior : 'smooth'
          })
        }
      }, 250)
  }

  return (
    <li style={{ listStyleType: 'none' }}>
        <a 
        href={href} 
        onClick={handleClick}        
        aria-label={`Enlace hacia ${href.replace('#', '')}`}>
            {label}
        </a>
    </li>
  )
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired
}