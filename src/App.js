import {MemoryRouter, Switch, Route} from 'react-router-dom'
import {useState} from 'react'

import Home from './pages/index.js'
import Level_0 from './pages/level_0'
import Level_1 from './pages/level_1'
import Level_2 from './pages/level_2'
import Level_3 from './pages/level_3'
import Level_4 from './pages/level_4'
import Level_5 from './pages/level_5'
import Level_6 from './pages/level_6'

import Review from './pages/review'
import Lobby_Created from './pages/lobby-created'
import Lobby_Joined from './pages/lobby-joined'
import Game_End from './pages/game_end'
import Credits from './pages/credits'
import Settings from './pages/settings'
import Level_Prototype from './components/level_prototype.jsx'
import './App.css'
function App() {

  const [settings, setSettings] = useState({soundToggle: true, soundVolume:100, musicToggle: true, musicVolume:100, fontSize: 'md'})

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
      url: "https://netflix.com",
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
    },
    {
      levelNum: 6,
      type: "evidenceCollect",
      isScam: true,
      url: "https://acme-adoptions.com",
      evidenceAmount: 4
    },
    {
      levelNum: 7,
      type: "scamOrNot",
      isScam: false,
      url: "https://mail.google.com/mail/u/0/#inbox",
      evidenceAmount: 0
    },
    {
      levelNum: 8,
      type: "evidenceCollect",
      isScam: true,
      url: "REMOVE_URL_BAR",
      evidenceAmount: 4
    },
  ]
  //Function is returning the location and levels that are being played in our app
  return (
    <MemoryRouter>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/settings" render={(props) => (
              <Settings {...props} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/review" render={(props) => (
              <Review {...props} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/credits" component = {Credits}></Route>
        <Route path = "/lobby-created" component = {Lobby_Created}></Route>
        <Route path = "/lobby-joined" component = {Lobby_Joined}></Route>
        <Route path = "/game_end" render={(props) => (
              <Game_End {...props} settings = {settings}/>
        )}>
        </Route>
        <Route path = "/level0" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[0]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/level1" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[1]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/level2" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[2]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
         <Route path = "/level3" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[3]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/level4" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[4]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/level5" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[5]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/level6" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[6]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/level7" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[7]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
        <Route path = "/level8" render={(props) => (
          <Level_Prototype {...props} level = {levelInfo[8]} settings = {settings} setSettings = {setSettings}/>
        )}>
        </Route>
      </Switch>
    </MemoryRouter>
  );
}

export default App;
