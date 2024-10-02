import React from 'react'

export const NavItems = ({href, item, tBlank}) => {
    const isBlank = tBlank ? "_blank" : "_self"
    return (
        <nav>
            <ul>
                <li>
                    <a 
                        href={href}
                        target={isBlank}
                    >
                        {item}
                    </a>
                </li>
            </ul>
        </nav>
    )
}
