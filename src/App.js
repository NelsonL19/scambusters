import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Game from './pages/index.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/">
          <Game></Game>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
