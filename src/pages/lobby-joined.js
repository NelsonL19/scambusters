import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'


const Lobby_Joined = (props) => {
    const history = useHistory();
    const startGame = () => {history.push("/level1")}

return (
    <>
      <h1>Lobby Joined!</h1>
      <button onClick={() => startGame()}>Start Game</button>
    </>
  )
}

export default Lobby_Joined