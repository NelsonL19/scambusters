import React, { Component, useEffect, useState, Suspense } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { firebase } from '../firebase-config/config'
import { Button } from 'antd';
import '../styles/end.css';
import bbbLogo from '../assets/bbbLogo.jpg'
import scambustersLogo from '../assets/scambustersMedal.png'
import ReactAudioPlayer from 'react-audio-player';
import victoryMusic from '../assets/blippyTrance.mp3'

const Game_End = (props) => {
  const history = useHistory();
  const returnToMain = () => { history.push({ pathname: "/" }) }
  let prefix = "a"

  //TODO: Adjust app.js in order to pass in length of levels array. When Level_End.jsx loads and it's at the end of the array, it should link here

  const loadPrefix = () => {
    if (props.location.state.score > 0) { prefix = "a" };
    if (props.location.state.score > 5000) { prefix = "a Great" };
    if (props.location.state.score > 10000) { prefix = "an Amazing" };
    if (props.location.state.score > 15000) { prefix = "a Super" };

    if (props.location.state.pass == "GUEST") { props.location.state.pass = "Single Player Mode" }
  }


  return (
    <>
      <ReactAudioPlayer
        src={victoryMusic}
        autoPlay={true}
        loop={true}
        volume={0.5}
      />
      <div className="endText">
        <div className="info">
        <h1 className="congrats" onLoad={loadPrefix()}>Congratulations!</h1>
        <p className="general">Your Lobby was:</p>
        <p className="lobby">{props.location.state.pass}</p>
        <p className="general">Your Final Score is:</p>
        <p className="score">{props.location.state.score} Points</p>
        <h1 className="result">You are {prefix} Scambuster!</h1>
        </div>
        <br/>
        <Button className="return" type="primary" onClick={() => returnToMain()}>Return to Main Menu</Button>
        <br/>
        <br/>
        <img src={scambustersLogo} alt="scambusters picture" height="500px"></img>
      </div>
    </>
  )
}

export default Game_End