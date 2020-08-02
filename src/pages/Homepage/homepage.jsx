import React from 'react';

import Directory from '../../components/directory/directory.component';

import "./homepage.scss"

const HomePage = () => {
    // using a functional component because this function don't need any lifecycle and store any state.
    return(
    <div className="homepage">
        <h1>welcome to homepage</h1>
        <Directory />
    </div>
    )
}
