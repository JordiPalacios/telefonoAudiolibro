import React from 'react'

export const MediaSlider = ({key, name, url, styleType, isVideo}) => {
    let className

    switch (styleType) {
        case 'mobile':
            {isVideo ?
                className = 'w-3/4 rounded-3xl my-4 mx-0'
                :
                className = 'bg-red-400'
            }
            break;
        case 'tablet':
            {isVideo ?
                className = 'w-3/4 rounded-3xl mx-0'
                :
                className = 'bg-red-400'
            }
            break;
        case 'desktop':
            {isVideo ?
                className = 'w-3/4 rounded-3xl my-4 mx-0'
                :
                className = 'bg-red-400'
            }
            break;
    }
    return (
        <div>
            {isVideo ?
                <video key={key} src={url} alt={name} className={className} controls/>
            :
                <img key={key} src={url} alt={name} className={className}/>
            }
        </div>
    )
}