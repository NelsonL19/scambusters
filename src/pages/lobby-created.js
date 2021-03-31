import {Link} from "react-router-dom"
import {useHistory} from 'react-router-dom'
import {firebase} from '../firebase-config/config'
import {useState, useEffect} from 'react'
import { Button } from 'antd';
import '../styles/lobby-created.css'

const Lobby_Created = (props) => {
    const history = useHistory();
    const db = firebase.firestore()
    const [players, setPlayers] = useState({}) 
    const [lobbyActive, setLobbyActive] = useState(true)

    useEffect(() => { 
      const unsubscribe = db.collection("lobbies").doc(props.location.state.pass).onSnapshot(snap => {
        setPlayers(snap.data())
        console.log(snap.data())
      });

      //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
      return () => unsubscribe()
    }, []);

    const deleteLobby = () => {
      setLobbyActive(false)
      db.collection("lobbies").doc(props.location.state.pass).delete().then(() => {
        history.push("/");
      }).catch((error) => {
        console.error("problem deleting lobby: ", error);
      })
    }
    
    const playersToCSV = () => {
      const csv = [
        ('name,score'), // header row first
        ...Object.keys(players).map(player => `${player},${players[player]}`)
      ].join('\r\n')
      console.log(csv)

      //to download the csv, we create a faux <a> tag and simulate a click on it. Weird, but this is how you do it.
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURI(csv));
      element.setAttribute('download', `lobby_${props.location.state.pass}_data.csv`);
      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element)

    }
    


    return (
      <>
        {lobbyActive &&
          <> 
            <h1 className="godTitle">Lobby Created!</h1>
            <div className="roomCodeDiv">
              <h2>Room Code</h2>
              <h2 className="roomCode">{props.location.state.pass}</h2>
            </div>

            <div className="usersInLobbyDiv">
              <h2>Players in this lobby</h2>
              <div className="lobbyBodyDiv">
                {Object.keys(players).map((player, i) => {
                  return(
                    <p className="playerName">{player}</p>
                  )
                })}
              </div>
            </div>

            <div className="statsDiv">
              <h2>Player Stats</h2>
              <div className="statsBodyDiv">
                {Object.keys(players).map((player, i) => {
                  return(
                    <div className="playerRow">
                      <p className="playerName">{player}</p>
                      <p style={{fontWeight: "lighter", fontSize: "larger"}}>{players[player]}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="buttonContainer">
              <Button className="adminBtn" type="primary" shape="round" size="large" style={{ background: "#ff0000", borderColor: "white"}}  onClick = {deleteLobby}>Delete Lobby</Button>
              <Button className="adminBtn" type="primary" shape="round" size="large" style={{ background: "#55cc55", borderColor: "white"}}  onClick = {playersToCSV}>Download Lobby CSV</Button>
            </div>
        </>
        }
      </>
    )
  }
  
  export default Lobby_Created