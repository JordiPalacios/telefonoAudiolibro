import React from "react";
import { BackgroundImage, Button } from "./index";
import { useWorkingMode } from "../assets/Customhooks/useWorkingMode";

export const Header = () => {
    const workingMode = useWorkingMode();

    return (
        <header>
            <BackgroundImage src={"public/img/headerImg.png"} alt={"Teléfono Audiolibro Evento"}>
                <h1>Lo primero que se olvida de una persona es su voz</h1>
                <h2>Escucha y guarda para siempre las voces de tus invitados</h2>
                <Button text={"Reservar"} device={workingMode} />
            </BackgroundImage>
        </header>
    );
};
