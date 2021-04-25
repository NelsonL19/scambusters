import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Button } from 'antd';
import '../styles/join.css'


const Lobby_Joined = (props) => {
    const history = useHistory();
    const startGame = () => {history.push({pathname: "/level1", state: {user: props.location.state.user, pass: props.location.state.pass}})}


return (
    <>
    <div>
    <center>
      <h1 className="joined">Lobby Joined!</h1>
      <p className="general">Your Username is:</p>
      <p className="name">{props.location.state.user}</p>
      <p className="general">Your Room Code is:</p>
      <p className="lobby"> {props.location.state.pass}</p>
      <Button type="primary" onClick={() => startGame()}>Start Game</Button>
      </center>
      </div>
    </>
  )
}

export default Lobby_Joined