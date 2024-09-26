import React from 'react'

export const Navbar = () => {
  const navItems = [
    {
      tittle: 'Inicio',
      label: 'inicio',
      url: '/#inicio'
    },
    {
      tittle: 'Guia de uso',
      label: 'guia de uso',
      url: '/#guia-de-uso'
    },
    {
      tittle: 'Eventos Reales',
      label: 'eventos reales',
      url: 'https://www.instagram.com/telefonoaudiolibro.es/',
      target: "_blank"
    }
  ]
  
  return (
    <nav>
      <img src="public/img/audiolibroVS.webp" alt="Telefonoaudiolibro Logo" style={{width: "100px", height: "auto"}} />
      {navItems.map((link) => (
        <a 
        aria-label={link.label}
        href={link.url}
        target={link.target}>
          {link.tittle}
        </a>
      ))}
    </nav>
  )
}
