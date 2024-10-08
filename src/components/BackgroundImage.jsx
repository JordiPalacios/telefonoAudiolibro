import React from 'react'

export const BackgroundImage = ({src, alt, children}) => {
    return (
        <div 
        className='relative bg-cover bg-center h-full w-full'>
            <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
            <div className='absolute inset-0 bg-black opacity-60'></div>
            <div className='relative z-10'>
                {children}
            </div>
        </div>
    )
}
