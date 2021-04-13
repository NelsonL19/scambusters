import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index.js'
import Level_0 from './pages/level_0'
import Level_1 from './pages/level_1'
import Level_2 from './pages/level_2'
import Level_3 from './pages/level_3'
import Level_4 from './pages/level_4'
import Level_5 from './pages/level_5'
import Lobby_Created from './pages/lobby-created'
import Lobby_Joined from './pages/lobby-joined'
import Game_End from './pages/game_end'
import Credits from './pages/credits'
import Level_Prototype from './components/level_prototype.jsx'
import './App.css'
function App() {

  //store in firebase?
  const levelInfo = [
    {
      levelNum: 0,
      type:"scamOrNot",
      isScam: false,
      url: "URL HERE",
      evidenceAmount: 0

    },
    {
      levelNum: 1,
      type: "scamOrNot",
      isScam: true,
      url: "https://neftlix.com",
      evidenceAmount: 0
    },
    {
      levelNum: 2,
      type: "evidenceCollect",
      isScam: true,
      url: "https://mail.google.com/mail/u/0/#inbox",
      evidenceAmount: 2
    },
    {
      levelNum: 3,
      type: "scamOrNot",
      isScam: true,
      url: "REMOVE_URL_BAR",
      evidenceAmount: 0
    },
    {
      levelNum: 4,
      type: "evidenceCollect",
      isScam: true,
      url: "REMOVE_URL_BAR",
      evidenceAmount: 3
    },
    {
      levelNum: 5,
      type: "scamOrNot",
      isScam: false,
      url: "REMOVE_URL_BAR",
      evidenceAmount: 0
    }
  ]
  //Function is returning the location and levels that are being played in our app
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/credits" component = {Credits}></Route>
        <Route path = "/lobby-created" component = {Lobby_Created}></Route>
        <Route path = "/lobby-joined" component = {Lobby_Joined}></Route>
        <Route path = "/game_end" component = {Game_End}></Route>
        <Route path = "/level0" render={(props) => (
              <Level_Prototype {...props} level = {levelInfo[0]}/>
        )}>
        </Route>
        <Route path = "/level1" render={(props) => (
              <Level_Prototype {...props} level = {levelInfo[1]}/>
        )}>
        </Route>
        <Route path = "/level2" render={(props) => (
              <Level_Prototype {...props} level = {levelInfo[2]}/>
        )}>
        </Route>
         <Route path = "/level3" render={(props) => (
              <Level_Prototype {...props} level = {levelInfo[3]}/>
        )}>
        </Route>
        <Route path = "/level4" render={(props) => (
              <Level_Prototype {...props} level = {levelInfo[4]}/>
        )}>
        </Route>
        <Route path = "/level5" render={(props) => (
              <Level_Prototype {...props} level = {levelInfo[5]}/>
        )}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
