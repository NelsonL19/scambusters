import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'


const Lobby_Joined = (props) => {
    const history = useHistory();
    const startGame = () => {history.push({pathname: "/level1", state: {user: props.location.state.user, pass: props.location.state.pass}})}


return (
    <>
      <h1>Lobby Joined!</h1>
      <p>Your Username is: {props.location.state.user}</p>
      <p>Your Room Code is: {props.location.state.pass}</p>
      <button onClick={() => startGame()}>Start Game</button>
    </>
  )
}

export default Lobby_Joined