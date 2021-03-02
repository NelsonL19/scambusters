import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Game from './pages/index.js'
import Level_Prototype from './components/level_prototype.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/">
          <Game></Game>
          <Level_Prototype/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
