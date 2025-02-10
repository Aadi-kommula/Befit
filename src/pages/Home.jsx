import React, { use, useState } from 'react'
import style from '../styles/Home.module.css'
import Button from '@mui/material/Button';

const Home = () => {

  const [weight, setWeight] = useState(50)
  const [feet, setFeet] = useState(5)
  const [inch, setInch] = useState(5)
  const [bmi, setBmi] = useState(0)
  const [bmiresult, setBmiResult] = useState()


  const calcBMI = () => {
    let f = parseInt(feet)
    let inches = parseInt(inch)
    let height = (f * 12 + inches) * 0.0254
    let w = parseInt(weight)
    let result = w / (height * height)
    setBmi(result.toFixed(2))
  }



  return (
    <>
      <div className={style.container}>

        <div className={style.bmi}>

          <h1>BMI Calculator</h1>

          <div className={style.bmi_first}>
            <div className={style.min_max} >
              <h2>Height</h2>
              <span className={style.value_box}> {feet} feet</span>
            </div>
            <input
              id={style.inp}
              min='2'
              max='7'
              type="range"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
            />
            <div className={style.min_max} >
              <span>2 feet</span>
              <span>7 feet</span>
            </div>

            <div className={style.min_max} >
              <h2>Height</h2>
              <span className={style.value_box}> {inch} inch</span>
            </div>
            <input
              id={style.inp}
              min='0'
              max='11'
              type="range"
              value={inch}
              onChange={(e) => setInch(e.target.value)}

            />
            <div className={style.min_max} >
              <h2>Weight</h2>
              <span className={style.value_box}> {weight} Kg</span>
            </div>

            <input
              value={weight}
              id={style.inp}
              type='range'
              min='0'
              max='120'
              step='0.1'
              onChange={(e) => setWeight(e.target.value)}

            />

            <Button onClick={calcBMI} variant="contained" color='success'>Calculate BMI</Button>

          </div>
          <div className={style.bmi_stats}>
            <h2>Body Mass Index : </h2>
            <h1> &nbsp;{bmi}</h1>
           <p>{bmiresult}</p>
          </div>
        </div>
        
        {/* resgistration page */}
        <div className={style.second}>

        </div>
      </div>
    </>
  )
}

export default Home