import React from 'react'

export const MediaSlider = ({name, url, styleType, isVideo}) => {
    let className

    switch (styleType) {
        case 'example1':
            className = 'bg-white'
            break;
        case 'example2':
            className = 'bg-green-400'
            break;
        case 'example3':
            className = 'bg-pink-400'
            break;
    }
    return (
        <div className={className}>
            {isVideo ?
                <video src={url} alt={name} className='w-full p-2 rounded-3xl' controls/>
            :
                <img src={url} alt={name} className='w-14 p-2 rounded-3xl'/>
            }
        </div>
    )
}