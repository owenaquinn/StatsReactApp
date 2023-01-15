import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Data(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('http://localhost:8800/test');
                setData(res.data);
            } catch (err){
                console.log(err);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}

export default Data;