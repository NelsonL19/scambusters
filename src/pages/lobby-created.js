

import {firebase} from '../firebase-config/config'
import {useState, useEffect} from 'react'

const Lobby_Created = (props) => {

    const db = firebase.firestore()
    const [players, setPlayers] = useState([]) 

    useEffect(() => { 
      const unsubscribe = db.collection("lobbies").doc(props.location.state.pass).onSnapshot(snap => {
        setPlayers(Object.keys(snap.data()))
      });

      //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
      return () => unsubscribe()
    }, []);


    return (
      <>
        <h1>Lobby Created!</h1>
        <p>Your passcode is: {props.location.state.pass}</p>

        <p>Players in this lobby: {players.join(", ")} </p>
      </>
    )
  }
  
  export default Lobby_Created