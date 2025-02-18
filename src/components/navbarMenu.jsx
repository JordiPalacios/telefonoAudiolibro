import { useContext, useEffect, useState } from 'react'
import { NavbarContext } from '../context/NavbarContext'
import { NewPage } from './NewPage'
import { NavItem } from './NavItem'
import { useWorkingMode } from '../assets/Customhooks/useWorkingMode'

export const NavbarMenu = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [isMoreProductsInfo, setIsMoreProductsInfo] = useState(false)
    const [isMoreWeddingsInfo, setIsMoreWeddingsInfo] = useState(false)
    const { navbarRef, headerRef} = useContext(NavbarContext)
    const workingMode = useWorkingMode()

    const handleWindowSizeChange = () => {
        if (window.innerWidth < 748) {
            setIsMenuToggled(false)
            setIsMoreProductsInfo(false)
            setIsMoreWeddingsInfo(false)
        }
    }

    useEffect (() => {
        window.addEventListener('resize', handleWindowSizeChange)
        handleWindowSizeChange()

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }

    }, [])

    const toggleClass = (className) => {
        if (workingMode !== 'PC'){        
            switch (className) {
            case 'menuOpen':
                setIsMenuToggled(!isMenuToggled)
                break;
                
            case 'products':
                setIsMoreProductsInfo(!isMoreProductsInfo)
                break;
                
            case 'weddings':
                setIsMoreWeddingsInfo(!isMoreWeddingsInfo)
                break;
                
            default:
                break;
            }
        }
    }

return (
    <div ref={headerRef}>
        <nav id='navbar' ref={navbarRef} className='navFixed'>
            <div className="menuResponsiveContainer">                
                <div className="logoMenu">
                    <button
                    id='AbrirCerrarElMenu'
                    aria-label='Se abrirá o cerrará el menú, según el estado en el que se encuentre'
                    className={isMenuToggled ? 'crossMenu' : 'hamburgerMenu'}
                    onClick={() => toggleClass('menuOpen')}>
                    </button>
                    <NewPage href='/' url='public/img/extra/logo.webp' label='logoTelefonoAudiolibro'/>
                </div>
                <div className={isMenuToggled ? 'menuOpened' : 'menuResponsive'}>
                    <ul>
                        <li>
                            <b><NewPage href='/' label='Inicio' /></b>
                        </li>
                        <li>
                            <b>
                                <a 
                                href="https://www.instagram.com/visualshow360?igshid=YmMyMTA2M2Y=" 
                                target="_blank" 
                                rel='noreferrer'                            
                                aria-label='Enlace al Instagram de VisualShow360 para ver más ejemplos de bodas en barcelona'>
                                    Otras historias grabadas
                                </a>
                            </b>
                        </li>
                        <b><NavItem href='#nosotros' label='Preguntas Frecuentes' page='home' /></b>
                        <b><NavItem href='#nosotros' label='Nosotros' page='home' /></b>
                        <b><NavItem href='#nosotros' label='Reservar ahora' page='home' /></b>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)
}
