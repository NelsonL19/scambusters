import React, {Component, useEffect, useState, Suspense} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {firebase} from '../firebase-config/config'
import { Button } from 'antd';

const Credits = (props) => {
    const history = useHistory();
    const returnToMain = () => {history.push({pathname: "/"})}

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
      <p>The Better Business Buearu of Raleigh, NC.</p>

      <h2>Licenses and Attributions</h2>
      <p>Leopard Print Elevator by Kevin MacLeod<br/>
          Link: https://incompetech.filmmusic.io/song/3974-leopard-print-elevator<br/>
          License: https://filmmusic.io/standard-license</p>
      <button onClick={() => returnToMain()}>Return to Main Menu</button>
    </>
  )
}

export default Credits