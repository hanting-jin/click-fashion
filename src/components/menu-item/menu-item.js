import React from 'react';
import  './menu-item.scss'
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, linkUrl, history, match}) => (
        <div className= {`${size} menu-item`} 
             onClick={()=>history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);