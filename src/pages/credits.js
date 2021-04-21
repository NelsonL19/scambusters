import React, { Component, useEffect, useState, Suspense } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { firebase } from '../firebase-config/config'
import { Button } from 'antd';
import '../styles/index.css';

const Credits = (props) => {
  const history = useHistory();
  const returnToMain = () => { history.push({ pathname: "/" }) }

  //TODO: Adjust app.js in order to pass in length of levels array. When Level_End.jsx loads and it's at the end of the array, it should link here



  return (
    <>
      <h1>Credits</h1>
      <h2>The Scambusters® Video Game Team:</h2>
      <p>Nelson Lopez</p>
      <p>Jerett Rende</p>
      <p>Savannah Evans</p>
      <p>Benjamin Bunze</p>
      <h2>Original Scambusters® Game:</h2>
      <p>Steve Fromme</p>
      <p>BBB Educational Foundation of Eastern NC, Inc.</p>
      <h2>Special Thanks:</h2>
      <p>Dr. Diane Pozefsky</p>
      <p>The Computer Science Department at the University of North Carolina at Chapel Hill</p>
      <p>You!</p>
      

      <h2>Licenses and Attributions</h2>
      <p>Leopard Print Elevator by Kevin MacLeod<br />
          Link: https://incompetech.filmmusic.io/song/3974-leopard-print-elevator<br />
          License: https://filmmusic.io/standard-license</p>
      <p>Blippy Trance by Kevin MacLeod<br />
      Link: https://incompetech.filmmusic.io/song/5759-blippy-trance<br />
      License: https://filmmusic.io/standard-license</p>
      <p>Computer Error Alert by Mike Koenig<br />
      Link: https://soundbible.com/1540-Computer-Error-Alert.html
      License: Attribution 3.0</p>
      <p>Text Message Alert 2 by Daniel Simion<br />
      Link: https://soundbible.com/2155-Text-Message-Alert-2.html
      License: Attribution 3.0</p>
      <p>Quick win video game notification<br />
      Link: https://mixkit.co/free-sound-effects/click/
      License: Mixkit Sound Effects Free License</p>
      <p>Failure arcade alert notification<br />
      Link: https://mixkit.co/free-sound-effects/video-game/
      License: Mixkit Sound Effects Free License</p>
      <Button type="primary" onClick={() => returnToMain()}>Return to Main Menu</Button>
    </>
  )
}

export default Credits