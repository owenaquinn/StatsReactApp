import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CreateRoster(){

    const [players, setPlayers] = useState([]);

    const addRoster = async () => {
        try{
            let res = await axios.post("http://localhost:8800/testInsert");
            console.log(res);
        } catch (err){
            console.log(err);
        }
    }

    return (
        <div>
            <p>
                This is the Create Rosters Page
            </p>
            <div>

                <input type="text" name="player1"></input>
                <input type="text" name="player2"></input>
                <input type="text" name="player3"></input>
                <input type="text" name="player4"></input>
            </div>
            <button onClick={addRoster}>Import</button>

            <Link to="/">{`<Home>`}</Link>
        </div>
    );
}

export default CreateRoster;