import React from 'react'

export const MediaSlider = ({name, url, styleType, isVideo}) => {
    let className

    switch (styleType) {
        case 'mobile':
            {isVideo ?
                className = 'w-3/4 rounded-3xl my-4'
                :
                className = 'bg-red-400'
            }
            break;
        case 'tablet':
            {isVideo ?
                className = 'w-3/4 rounded-3xl'
                :
                className = 'bg-red-400'
            }
            break;
        case 'desktop':
            {isVideo ?
                className = 'w-3/4 rounded-3xl my-4'
                :
                className = 'bg-red-400'
            }
            break;
    }
    return (
        <div className='flex items-center justify-center'>
            {isVideo ?
                <video src={url} alt={name} className={className} controls/>
            :
                <img src={url} alt={name} className={className}/>
            }
        </div>
    )
}