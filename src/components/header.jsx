import React from "react";
import { Button } from "./index";

export const Header = () => {
    return (
        <header>
            <img
                src="public/img/headerImg.png"
                alt="Teléfono Audiolibro imagen portada"
            />
            <h1>Lo primero que se olvida de una persona es su voz</h1>
            <h2>Escucha y guarda para siempre las voces de tus invitados</h2>
            <Button text={"Reservar"} />
        </header>
    );
};
