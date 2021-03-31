import React, { PureComponent, useState} from "react";
import {Link} from "react-router-dom"
import {useHistory} from 'react-router-dom'
import {firebase} from '../firebase-config/config'

//GameEngine takes a list of systems and an object of entities (described by renderers)
const Home = (props) => {

  const [passcode, setPasscode] = useState("")
  const [username, setUsername] = useState("")

  const db = firebase.firestore()
  const history = useHistory();

  const createLobby = () =>{

    const randomPass = generatePasscode()

    db.collection("lobbies").doc(randomPass).set({
    }).then(() => {
        history.push({pathname: "/lobby-created", state: {pass: randomPass}})
      }
    )


  }

  const joinLobby = () => {
    db.collection("lobbies").doc(passcode).update({
      [username]: 0
    })
    history.push("/lobby-joined")    
  }

  const generatePasscode = () => {
    let pass = "" 
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < 4; i++ ) {
       pass += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return pass
  }

  return (
    <>
      <h1>Welcome to Scambusters®: The Video Game</h1>
      <Link to = "/level0">Level 0</Link>
      <Link to = "/level1">Level 1</Link>
      <Link to = "/level2">Level 2</Link>

      <button className = "lobby-button" onClick = {createLobby}>Create New Lobby</button>
      <br></br>
      <input className = "lobby-input" value = {username} onChange = {(e) => setUsername(e.target.value)} placeholder = "Username"></input>
      <input className = "lobby-input" value = {passcode} onChange = {(e) => setPasscode(e.target.value)} placeholder = "Room Code"></input>
      <button className = "lobby-button" onClick = {joinLobby}>Join Lobby</button>
    </>
  )
}

export default Home