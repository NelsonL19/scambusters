import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index.js'
import Level_0 from './pages/level_0'
import Level_1 from './pages/level_1'
import Level_2 from './pages/level_2'
import Level_Prototype from './components/level_prototype.jsx'
import './App.css'

function App() {

  //store in firebase?
  const levelInfo = [
    {
      levelNum: 0,
      type:"scamOrNot",
      isScam: false,
      url: "URL HERE"
    },
    {
      levelNum: 1,
      type: "scamOrNot",
      isScam: true,
      url: "https://neftlix.com"
    },
    {
      levelNum: 2,
      type: "evidenceCollect",
      isScam: true,
      url: "https://mail.google.com/mail/u/0/#inbox"
    }
  ]
  //Function is returning the location and levels that are being played in our app
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/level0">
          <Level_Prototype level = {levelInfo[0]}/>
        </Route>
        <Route path = "/level1">
          <Level_Prototype level = {levelInfo[1]}/>
        </Route>
        <Route path = "/level2">
        <Level_Prototype level = {levelInfo[2]}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
