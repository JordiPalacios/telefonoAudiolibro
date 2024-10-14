import React, { useState } from "react";
import { NavItems } from "./index";

export const NavbarMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className="bg-accent text-textBlack ">
            <img src="https://via.placeholder.com/150" alt="logo" />
            <NavItems 
                href={"inicio"} 
                item={"Nuestros Teléfonos"} />
            <NavItems 
                href={"reseñas"} 
                item={"Reseñas"} />
            <NavItems 
                href={"guia-de-uso"} 
                item={"Guia de Uso"} />
            <div className="border-r border-white h-6"></div>
            <NavItems 
                href={"reservar"} 
                item={"Reservar Ahora"} />
            <NavItems
                href={"https://www.instagram.com/telefonoaudiolibro.es/"}
                item={"Experiencias sin filtros"}
                tBlank={true}
            />
        </header>
    );
};
