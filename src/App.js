import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home/Home/Home';
import { Blog } from './Components/Home/Blog/Blog';

function App() {
  return (
      <Router>
      <Switch>
     <Route exact path="/">
     <Home/>
     </Route> 
     <Route path="/blog">
     <Blog/>
     </Route> 
      </Switch>
      </Router>
  );
}

export default App;
