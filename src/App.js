import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index.js'
import Level_0 from './pages/level_0'
<<<<<<< HEAD
import Level_1 from './pages/level_1'
=======
>>>>>>> 5cb4ff6d7a1ed80472fa32fd116a392ead2b4daa
import Level_Prototype from './components/level_prototype.jsx'
import './App.css'

function App() {

  //store in firebase?
  const levelInfo = [
    {
      levelNum: 0,
      type:"scamOrNot",
      isScam: true,
      url: "URL HERE"
    },
    {
      levelNum: 1,
      type: "scamOrNot",
      isScam: true,
      url: "https://neftlix.com"
    }
  ]

  return (
    <Router>
      <Switch>
<<<<<<< HEAD
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "/level0">
          <Level_Prototype level = {levelInfo[0]}/>
        </Route>
        <Route path = "/level1">
          <Level_Prototype level = {levelInfo[1]}/>
=======
        <Route path = "/">
          <Home></Home>
          <Level_Prototype/>
>>>>>>> 5cb4ff6d7a1ed80472fa32fd116a392ead2b4daa
        </Route>
        <Route path = "/level0">
          <Level_0></Level_0>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
