import React from 'react';
import "./homepage.scss"

import Directory from '../../components/directory/directory';


export default function HomePage(){
    // using a functional component because this function don't need any lifecycle and store any state.
    return(
    <div className="homepage">
        <Directory />
    </div>
    )
}
