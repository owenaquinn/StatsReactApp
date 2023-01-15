import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function GetRosters(){


    const [rosters, setRosters] = useState([]);

    useEffect(() => {
        
        const fetchRosters = async () => {
            try{

                let res = await axios.get('http://localhost:8800/getRosters');
                setRosters(res.data); 
            } catch (err){
                console.log(err);
            }
        }

        fetchRosters();
    }, [])


    return (
        <ul>
            {rosters.map( roster => 
                <li>
                    <span>
                        {roster['name']}
                    </span>
                    <span>
                        {`<EDIT>`}
                    </span>
                </li> 
                 )}
            
            <li>
                <Link to='/createRoster'>{`<Create Roster>`}</Link>
            </li> 
        </ul>    
   )

}

export default GetRosters;