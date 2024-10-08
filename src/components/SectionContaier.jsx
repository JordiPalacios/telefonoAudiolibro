import React from 'react'

export const SectionContaier = ({children, device, id}) => {
    let containerClasses = 'p-5 mx-auto'

    switch (device) {
        case 'mobile':
            containerClasses += 'max-w-full'
            break
        case 'tablet':
            containerClasses += 'max-w-screen-md'
            break
        case 'pc':
            containerClasses += 'max-w-screen-lg'
            break
        default:
            containerClasses += 'max-w-screen-lg'
    }
    return (
        <section id={id} className={containerClasses} >
            {children}
        </section>
    )
}
