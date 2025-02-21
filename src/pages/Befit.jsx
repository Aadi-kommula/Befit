import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from '../styles/Befit.module.css';

function Fitzz() {

  const apiKey = import.meta.env.VITE_API_KEY;
  const databaseUrl = import.meta.env.VITE_DATABASE_URL;
  const [exercises, setExercises] = useState([])
  const navigate = useNavigate();
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
      setExercises(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const handleNavigate = (exerciseId) => {
    navigate(`/explore/${exerciseId}`);
  }

  return (
    <>
      <div className={style.container}>
        <br /><br />
        <div className={style.header}>
          <h1>Empower Your Workouts with Actionable Exercise Insights</h1>
          <video
            src="https://curefit-content.s3.ap-south-1.amazonaws.com/image/test/cult-pass-live-animation/video/Cultpass+Live+session.mp4"
            autoPlay={true}
            loop={true}
            muted={true} />
        </div>
        <br /><br />

        <h2 className={style.letstry}>Let's try some workouts 💪</h2>
        <div className={style.grid}>
          {exercises.length > 0 ? (
            exercises.map((item, index) => (
              <div
                key={index}
                className={style.card}
                onClick={() => handleNavigate(index)}>

                <img src={item.gifUrl} alt="Exercise" />
                <h3 id={style.item_name}>{item.name}</h3>
                <p>Body part: {item.bodyPart}</p>
                <p>Equipment: {item.equipment}</p>
                <button onClick={() => handleNavigate(index)}>Explore</button>
              </div>
            ))
          ) : (
            <>
              <span id={style.circle}></span>
              <p className={style.loading}>Loading the data</p>
            </>
          )}
        </div>
        <br /> <br />
      </div>

    </>
  )
}

export default Fitzz;