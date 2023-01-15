import React from 'react';
import { Link } from 'react-router-dom';

function EditRoster(){

    return (
        <div>
            This is the Edit Roster Page
            <Link to="/">{`<Home>`}</Link>
        </div>
    )
}

export default EditRoster;