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
      <h1>The Scambusters® Video Game Team:</h1>
      <h1>Nelson Lopez</h1>
      <h1>Jerett Rende</h1>
      <h1>Savannah Evans</h1>
      <h1>Benjamin Bunze</h1>
      <h1>Original Scambusters® Game:</h1>
      <h1>Steve Fromme</h1>
      <h1>The Better Business Buearu of Raleigh, NC.</h1>

      <h1>Licenses and Attributions</h1>
      <p>Leopard Print Elevator by Kevin MacLeod
          Link: https://incompetech.filmmusic.io/song/3974-leopard-print-elevator
          License: https://filmmusic.io/standard-license</p>
      <button onClick={() => returnToMain()}>Return to Main Menu</button>
    </>
  )
}

export default Credits