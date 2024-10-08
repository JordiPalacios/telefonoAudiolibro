import React from 'react'

export const Button = ({text, device}) => {
    let buttonClasses = 'px-4 py-2 rounded-lg text-white font-semibold transition duration-300'

    if (device === 'pc') {
        buttonClasses += ' bg-blue-500 hover:bg-blue-700 active:bg-blue-800';
    } else {
        buttonClasses += ' bg-blue-500';
    }
    
    return (
        <button className={buttonClasses}>
            {text}
        </button>
    )
}
