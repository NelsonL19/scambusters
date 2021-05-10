import React, { Component, useEffect, useState, Suspense } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { firebase } from '../firebase-config/config'
import { Button } from 'antd';
import '../styles/end.css';
import bbbLogo from '../assets/bbbLogo.jpg'
import scambustersLogo from '../assets/scambustersMedal.png'
import ReactAudioPlayer from 'react-audio-player';
import victoryMusic from '../assets/blippyTrance.mp3'

//This is the victory end screen! This plays at the end of the game!
const Game_End = (props) => {
  const history = useHistory();
  const goToReview = () => { history.push({ pathname: "/review" }) }
  let prefix = "a"
  let result = ""

  //TODO: Adjust app.js in order to pass in length of levels array. When Level_End.jsx loads and it's at the end of the array, it should link here

  //This reads your final score, and see if the player was good or not.
  const loadPrefixs = () => {
    if (props.location.state.score > 0) { prefix = "a" };
    if (props.location.state.score > 20000) { prefix = "a Great" };
    if (props.location.state.score > 40000) { prefix = "an Amazing" };
    if (props.location.state.score > 50000) { prefix = "a Super" };
    if (props.location.state.pass == "GUEST") { props.location.state.pass = "Single Player Mode" }
    if (!props.location.state.hasFailed) {
      result = "Congratulations";
    } else {
      result = "Try again!";
    }

  }


  return (
    <>
      {props.settings.musicToggle && 
        <ReactAudioPlayer
          src={victoryMusic}
          autoPlay={true}
          loop={true}
          volume={(props.settings.musicVolume/100) * 0.5}
        />
      }
      <div className="endText">
        <div className="info">
        <h1 className="congrats" onLoad={loadPrefixs()}>{result}</h1>
        <p className="general">Your Lobby was:</p>
        <p className="lobby">{props.location.state.pass}</p>
        <p className="general">Your Final Score is:</p>
        <p className="score">{props.location.state.score} Points</p>
        <h1 className="result">You are {prefix} Scambuster!</h1>
        </div>
        <br/>
        <Button className="return" type="primary" onClick={() => goToReview()}>Go to Review!</Button>
        <br/>
        <br/>
        <img src={scambustersLogo} alt="scambusters picture" height="500px"></img>
      </div>
    </>
  )
}

export default Game_End