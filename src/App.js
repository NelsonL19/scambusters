import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index.js'
import Lobby_Created from './pages/lobby-created'
import Lobby_Joined from './pages/lobby-joined'
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
    }
  ]
  //Function is returning the location and levels that are being played in our app
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/lobby-created" component = {Lobby_Created}></Route>
        <Route path = "/lobby-joined" component = {Lobby_Joined}></Route>
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
      </Switch>
    </Router>
  );
}

export default App;
