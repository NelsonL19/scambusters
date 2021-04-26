import React, { PureComponent, useState } from "react";
import { Link } from "react-router-dom"
import { useHistory } from 'react-router-dom'
import { firebase } from '../firebase-config/config'
import { Button } from 'antd';
import titleLogo from '../assets/scambustersLogoAlt.jpg'
import bbbLogo from '../assets/bbbLogo.jpg'


//GameEngine takes a list of systems and an object of entities (described by renderers)
const Home = (props) => {

  const [passcode, setPasscode] = useState("")
  const [username, setUsername] = useState("")

  const db = firebase.firestore()
  const history = useHistory();

  const createLobby = () => {

    const randomPass = generatePasscode()

    db.collection("lobbies").doc(randomPass).set({
    }).then(() => {
      history.push({ pathname: "/lobby-created", state: { pass: randomPass } })
    }
    )
  }

  const joinLobby = () => {
    db.collection("lobbies").doc(passcode).update({
      [username]: 0
    })
    let docu = document.documentElement;
    if (docu.requestFullscreen) {
      docu.requestFullscreen();
    } else if (docu.webkitRequestFullscreen) {
      docu.webkitRequestFullscreen();
    } else if (docu.msRequestFullscreen) {
      docu.msRequestFullscreen();
    }
    history.push({ pathname: "/lobby-joined", state: { user: username, pass: passcode } })
  }

  const joinLobby_SP = () => {
    // For joining single player lobbies only
    var tempUser = Math.random().toString(36).substring(6)
    setUsername(tempUser)
    db.collection("lobbies").doc('GUEST').update({
      [tempUser]: 0
    })

    let docu = document.documentElement;
    if (docu.requestFullscreen) {
      docu.requestFullscreen();
    } else if (docu.webkitRequestFullscreen) {
      docu.webkitRequestFullscreen();
    } else if (docu.msRequestFullscreen) {
      docu.msRequestFullscreen();
    }

    history.push({ pathname: "/level1", state: { user: tempUser, pass: "GUEST", connection: navigator.onLine } })
  }

  const generatePasscode = () => {
    let pass = ""
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < 4; i++) {
      pass += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return pass
  }

  const goToCredits = () => {
    history.push({ pathname: "/credits" })
  }

  const goToSettings = () => {
    history.push({ pathname: "/settings" })
  }

  const bbbClick = () => {
    window.open('https://www.bbb.org/local-bbb/bbb-of-eastern-north-carolina')
  }

  // <h1 className="gameTitle">Scambusters®</h1>
  // <h3 className="gameSubtitle">The Video Game</h3>
  // <p className="releaseVersion">Release Version: v0.5-Beta</p>

  return (
    <>
      <div className="backgroundColors">
      <img className="bbbImg" src={bbbLogo} alt="bbb Image" onClick={() => bbbClick()}></img>
        <div className="titleBlock">
          <img id="logoImg" src={titleLogo} alt="Logo Image" size="100px"></img>
        </div>
        <br/>
          <div className="playDiv">
            <div className="lobbyDiv">
              <h2 className="lobbyTitle">Create a new lobby</h2>
              <Button className="lobby-button" type="primary" size="large" onClick={createLobby}>Create New Lobby</Button>
            </div>
            <div className="vl"></div>
            <div className="lobbyDiv">
              <h2 className="lobbyTitle">Join an existing lobby</h2>
              <div className="lobbyInput">
                <input className="lobby-input" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                <input className="lobby-input" value={passcode} onChange={(e) => setPasscode(e.target.value)} placeholder="Room Code"></input>
              </div>
              <Button className="lobby-button" type="primary" size="large" onClick={joinLobby}>Join Lobby</Button>
            </div>
            <div className="vl"></div>
            <div className="lobbyDiv">
              <h2 className="lobbyTitle">Play single player</h2>
              <Button className="lobby-button" type="primary" size="large" onClick={joinLobby_SP}>Begin Single Player</Button>
            </div>
          </div>

        <br />
        <div className="settingDiv">
          <Button className="credits-button" type="primary" size="large" onClick={goToSettings}>Settings</Button>
          <Button className="credits-button" type="primary" size="large" onClick={goToCredits}>Credits</Button>
        </div>
        <br />
      </div>
    </>
  )
}

export default Home