import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from '../styles/Explore.module.css';


const Explore = () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const databaseUrl = import.meta.env.VITE_DATABASE_URL;
    const [gymdata, setGymdata] = useState([])
    const { id } = useParams();

    const fetchData = async () => {
        try {
            const response = await fetch('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0', {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': apiKey,
                    'x-rapidapi-host': databaseUrl
                }
            })

            const data = await response.json()
            setGymdata(data)
            console.log(data)
            console.log(id)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);
    return (
        <div className={style.container}>
            {gymdata.length > 0 && ( // Check if gymdata has items
                <>
                    <div className={style.content} >
                        <h1></h1>
                        <h1>Lets try {gymdata[id].name}</h1>
                        <br />
                    </div>

                    <div className={style.imgContent}>

                        <img src={gymdata[id].gifUrl} alt="Exercise" />

                        <div className={style.details}>
                            <h3>{gymdata[id].name}</h3>
                            <p>Body part: {gymdata[id].bodyPart}</p>
                            <p>Equipment: {gymdata[id].equipment}</p>
                            <p>Secondary Muscles: {gymdata[id].secondaryMuscles[0]}</p>
                            <p>Target: {gymdata[id].target}</p>
                            <p className={style.instr}>Follow below instructions carefully for better experience  </p>
                        </div>
                    </div>

                    <br />
                    <div className={style.instructions}>
                        <div className={style.ins1}> </div>
                        <div className={style.ins12}>
                              <p>{gymdata[id].instructions.map((data, index) => {
                            return <p key={index}>{index + 1}.&nbsp;{data}</p>
                        })}</p></div>
                    </div>
                    <br/>
                </>
            )}
        </div>
    );
};


export default Explore;