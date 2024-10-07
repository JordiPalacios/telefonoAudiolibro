import React from 'react'
import { Desplegable } from './Desplegable'

export const QA = () => {
    return (
        <aside>            
            <p> Aquí van unas tarjetas que si tiene la opción de desplegable se abrén mostrando el texto </p>
            <Desplegable 
                open={false} 
                text={"Envío y recogida a domicilio"} 
                imgSrc={"public/img/ejemplo.png"} 
                name={"ejemplo1"} />
            <Desplegable 
                open={false} 
                text={"15% descuento para el próximo alquiler"} 
                imgSrc={"public/img/ejemplo.png"} 
                name={"ejemplo1"} />
            <Desplegable 
                open={true} 
                text={"Cheque regalo personalizado"} 
                textDesc={"Si necesitas el teléfono audilibro para regalar, ¡te enviaremos por whatsapp un cheque regalo personalizado!"} 
                imgSrc={"public/img/ejemplo.png"} 
                name={"ejemplo1"} />
            <Desplegable 
                open={false} 
                text={"Servicio atención 24h"} 
                imgSrc={"public/img/ejemplo.png"} 
                name={"ejemplo1"} />
            <Desplegable 
                open={false} 
                text={"Grabación de audio de bienvenida"} 
                imgSrc={"public/img/ejemplo.png"} 
                name={"ejemplo1"} />
            <Desplegable 
                open={true} 
                text={"Envío de audios en digital"} 
                textDesc={"Una vez nos llegue el teléfono de vuelta, os enviaremos una carpeta con todos los audios."} 
                imgSrc={"public/img/ejemplo.png"} 
                name={"ejemplo1"} />
            </aside>
    )
}
