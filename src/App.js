
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Components/Home/Home/Home';
import { Blog } from './Components/Home/BlogWrite/Blog';
import { AllBlog } from './Components/ShowBlog/ShowBlog';
import { Login } from './Components/Login/Login';

export const userContext=createContext()
function App() {
  const [loginUser,setLoginUser]=useState({})
  console.log(loginUser)
  return (
      <userContext.Provider value={[loginUser,setLoginUser]}>
      
      <Router>
      <Switch>
     <Route exact path="/">
     <Home/>
     </Route> 
     <Route path="/blogShow">
     <AllBlog/>
     </Route>
     <Route path='/blog'>
     <Blog/>
     </Route>
     <Route path='/log'>
     <Login/>
     </Route>
      </Switch>
      </Router>
      </userContext.Provider>
  );
}

export default App;
