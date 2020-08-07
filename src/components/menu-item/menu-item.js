import React from 'react';
import  './menu-item.scss'

export default function MenuItem({title, imageUrl, size}){
    return(
        <div className= {`${size} menu-item`}>
                <div className="background-image"
                style = {{
                    backgroundImage : `url(${imageUrl})`
                }}>
                    <div className="content">
                    <div className="title">{title.toUpperCase()}</div>
                    {/* Invoke toUpperCase() function to uppercase letters. */}
                    <div className="subtitle">SHOP NOW</div>
                </div>
            </div>
        </div>
    )
}