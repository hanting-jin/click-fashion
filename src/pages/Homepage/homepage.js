import React from 'react';
import "./homepage.scss"

import Directory from '../../components/directory/directory';

const HomePage = () => (
    // using a functional component because this function don't need any lifecycle and store any state.
    <div className="homepage">
        <Directory />
    </div>
)


export default HomePage;
