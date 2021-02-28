import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index.js'
import Level_0 from './pages/level_0'
import Level_Prototype from './components/level_prototype.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/">
          <Home></Home>
          <Level_Prototype/>
        </Route>
        <Route exact path = "/level0">
          <Level_0></Level_0>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
