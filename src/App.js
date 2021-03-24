import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index.js'
import Level_0 from './pages/level_0'
import Level_1 from './pages/level_1'
import Level_2 from './pages/level_2'
import Level_3 from './pages/level_3'
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
      type: "evidenceCollect",
      isScam: true,
      url: "REMOVE_URL_BAR",
      evidenceAmount: 3
    }
  ]
  //Function is returning the location and levels that are being played in our app
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        {levelInfo.map(function(level, i){
          return (
          <Route key={i} path = {`/level${level.levelNum}`}>
            <Level_Prototype level = {level}/>
          </Route>
          )
        })}
      </Switch>
    </Router>
  );
}

export default App;
