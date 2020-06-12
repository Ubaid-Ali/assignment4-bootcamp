
import React, { useState } from 'react';
import { Weather } from './weather'
import './App.css'



export default function App() {

  let [count, setCount] = useState(1);
  let [weather, setWeather] = useState(false);

  return (
    <div className={`box ${weather ? 'box' : 'sunny'}`} >
      <h1>Weather <br /> {weather ? 'Cloudy' : 'Sunny'} </h1>

      <Weather counter={count} />
      <br />
      <button onClick={() => { setCount(count + 1) }}>
        Update Counter
      </button>
      <br />
      <br />
      <button onClick={() => { setWeather(!weather) }} > Update Weather </button>
    </div>
  );
}