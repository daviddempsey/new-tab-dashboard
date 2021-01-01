import React, { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import night from './night.mp4';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  const [affirmation, setAffirmation] = useState("");
  const [loading, setLoading] = useState(true);


  const getAffirmation = async () => {
    const response = await fetch('https://www.affirmations.dev/');
    const myJson = await response.json(); //extract JSON from the http response
    return myJson["affirmation"];
  }

  useEffect(() => {
    if (loading) {
      setLoading(false);
      getAffirmation().then((response) => {
        setAffirmation(response)
      });
    }
    console.log(affirmation)
  });

  if (loading) { return null; }
  return (
    <div className="App">
      <div className='video-container'>
        <video autoPlay loop muted>
          <source src={night} type='video/mp4' />
        </video>
      </div>
      <div className="overlay">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/pages/Newtab/Newtab.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <h1>{affirmation}</h1>
          <h6>The color of this paragraph is defined using SASS.</h6>
        </header>
      </div>
    </div>
  );
};

export default Newtab;
