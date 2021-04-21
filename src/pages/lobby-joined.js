import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Button } from 'antd';
import '../styles/join.css'


const Lobby_Joined = (props) => {
    const history = useHistory();
    const startGame = () => {history.push({pathname: "/level1", state: {user: props.location.state.user, pass: props.location.state.pass}})}


return (
    <>
    <center>
      <h1 className="joined">Lobby Joined!</h1>
      <p>Your Username is: {props.location.state.user}</p>
      <p>Your Room Code is: {props.location.state.pass}</p>
      <Button type="primary" onClick={() => startGame()}>Start Game</Button>
      </center>
    </>
  )
}

export default Lobby_Joined