import React, {Component, useEffect, useState, Suspense} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {firebase} from '../firebase-config/config'
import { Button } from 'antd';

const Game_End = (props) => {
    const history = useHistory();
    const returnToMain = () => {history.push({pathname: "/"})}

    //      <p>Your Lobby was: {props.location.state.pass}</p>
    //TODO: Adjust app.js in order to pass in length of levels array. When Level_End.jsx loads and it's at the end of the array, it should link here
return (
    <>
      <h1>You've completed the game!</h1>
      <p>Your Lobby was: WIP</p>
      <p>Your Final Score is: WIP</p>
      <h1>You are a Super Scambuster!</h1>
      <button onClick={() => returnToMain()}>Return to Main Menu</button>
    </>
  )
}

export default Game_End