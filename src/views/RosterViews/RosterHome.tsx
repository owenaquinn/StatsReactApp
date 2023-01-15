import React from 'react';
import Header from '../../components/roster/RosterHomeHeader';
import GetRosters from '../../components/roster/getRosters';
import CreateRoster from './CreateRoster';
import EditRoster from './EditRoster';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'

function RosterView(){

    return (
        <div>
            <Router>

            <Routes>
                <Route path="/" element={

                    <div>
                        <Header/>
                        <GetRosters/> 
                    </div>
                    
                    } />
                <Route path="/createRoster" element={

                    <CreateRoster/>

                    } />
                <Route path="/editRoster" element={
                    <EditRoster />
                } />
            </Routes>




            </Router>
        </div>
    );
}

export default RosterView;