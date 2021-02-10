import './styles/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './pages/index.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path = "/">
          Home
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
