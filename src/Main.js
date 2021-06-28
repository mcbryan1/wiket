import "./App.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home'
import Error404 from './pages/error'
import RouteWithNavbar from "./components/Routes/RouteWithNavbar";

function Main() {
  return (
    <Router>
      <Switch>
        <RouteWithNavbar path='/' exact component={Home} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default Main;
