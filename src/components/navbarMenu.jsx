import React from "react";
import { NavItems } from "./index";

export const NavbarMenu = () => {
    return (
        <header>
            <img src="https://via.placeholder.com/150" alt="logo" />
            <NavItems href={"inicio"} item={"Inicio"} />
            <NavItems href={"guia-de-uso"} item={"Guia de Uso"} />
            <NavItems href={"reservar"} item={"Reservar"} />
            <NavItems
                href={"https://www.instagram.com/telefonoaudiolibro.es/"}
                item={"Eventos Reales"}
                tBlank={true}
            />
        </header>
    );
};
