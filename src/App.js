import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Benefits from "./pages/benefits";
import Plans from "./pages/plans";
import Profile from "./pages/profile";
import Home from './pages/home'
import Connections from "./pages/connections";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/benefit' component={Benefits} />
        <Route path='/plans' component={Plans} />
        <Route path='/connections' component={Connections} />
      </Switch>
    </Router>
  );
}

export default App;
