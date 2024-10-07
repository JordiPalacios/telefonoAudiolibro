import React from 'react'

export const Desplegable = ({ open, text, textDesc, imgSrc, name}) => {
    return (
        <div>
            <div>
                <img src={imgSrc} alt={name} />
                <p>{text}</p>
                <p>{textDesc}</p>
            </div>
        </div>
    )
}
