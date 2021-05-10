import {Link} from "react-router-dom"
import {useHistory} from 'react-router-dom'
import {firebase} from '../firebase-config/config'
import {useState, useEffect} from 'react'
import { Button, Popover, notification, Space } from 'antd';
import '../styles/lobby-created.css'

const Lobby_Created = (props) => {
    const history = useHistory();
    const db = firebase.firestore()
    const [players, setPlayers] = useState({})
    const [sortedPlayers, setSortedPlayers] = useState({})
    const [popoverVisible, setPopoverVisible] = useState(false) 
    const [lobbyActive, setLobbyActive] = useState(true)
    const openNotificationWithIcon = type => {
      notification[type]({
        message: 'Deleting Lobby...',
        duration: 2,
        onClose: deleteLobby
      });
    };

    useEffect(() => { 
      const unsubscribe = db.collection("lobbies").doc(props.location.state.pass).onSnapshot(snap => {
        setPlayers(snap.data())
        console.log(snap.data())
      });

      //remember to unsubscribe from your realtime listener on unmount or you will create a memory leak
      return () => unsubscribe()
    }, []);

    useEffect(() => {
      //sort players after fetching
      if(players != undefined){
        var arr = []
        for(var i = 0; i < Object.keys(players).length; i++){
          console.log("LLL", Object.keys(players)[i], players[Object.keys(players)[i]])
          arr.push({
            name: Object.keys(players)[i],
            score: players[Object.keys(players)[i]]
          })
        }
        arr.sort((a,b) => b.score - a.score);
        var finalSorted = {}
        for(var k in arr){
          console.log(k)
          finalSorted[arr[k].name] = arr[k].score
        }
        setSortedPlayers(finalSorted)
      }
    }, [players])

    const showDeletePopover = () => {
      openNotificationWithIcon('warning')
    }
    const deleteLobby = () => {
      setLobbyActive(false)
      db.collection("lobbies").doc(props.location.state.pass).delete().then(() => {
        history.push("/");
      }).catch((error) => {
        console.error("problem deleting lobby: ", error);
      })
    }

    const showPopover = () => {
      setPopoverVisible(true)
    }

    const hidePopover = () => {
      setPopoverVisible(false)
    }

    const popoverTitle = <span>Are you sure?</span>
    const popoverBody = (
      <div>
        <Space>
          <Button className="adminBtn" type="primary" shape="round" size="medium" style={{ background: "#ff0000", borderColor: "white"}}  onClick = {showDeletePopover}>Yes, delete lobby</Button>
        </Space>
        <Button className="adminBtn" type="primary" shape="round" size="medium" style={{ background: "#55cc55", borderColor: "white"}}  onClick = {hidePopover}>No, nevermind</Button>
      </div>
      )
    
    const playersToCSV = () => {
      const csv = [
        ('name,score'), // header row first
        ...Object.keys(sortedPlayers).map(player => `${player},${sortedPlayers[player]}`)
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
                {Object.keys(sortedPlayers).map((player, i) => {
                  return(
                    <p className="playerName">{player}</p>
                  )
                })}
              </div>
            </div>

            <div className="statsDiv">
              <h2>Player Stats</h2>
              <div className="statsBodyDiv">
                {Object.keys(sortedPlayers).map((player, i) => {
                  return(
                    <div className="playerRow">
                      <p className="playerName">{player}</p>
                      <p className="playerScore" style={{fontWeight: "lighter", fontSize: "larger"}}>{sortedPlayers[player]}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="buttonContainer">
              <Popover placement="bottom" title={popoverTitle} content={popoverBody} trigger="click" visible={popoverVisible}>
                <Button className="adminBtn" type="primary" shape="round" size="large" style={{ background: "#ff0000", borderColor: "white"}}  onClick = {showPopover}>Delete Lobby</Button>
              </Popover>
              <Button className="adminBtn" type="primary" shape="round" size="large" style={{ background: "#55cc55", borderColor: "white"}}  onClick = {playersToCSV}>Download Lobby CSV</Button>
            </div>
        </>
        }
      </>
    )
  }
  
  export default Lobby_Created