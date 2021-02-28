import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index.js'
import Level_0 from './pages/level_0'
import Level_Prototype from './components/level_prototype.jsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/">
          <Home></Home>
          <Level_Prototype/>
        </Route>
        <Route path = "/level0">
          <Level_0></Level_0>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
