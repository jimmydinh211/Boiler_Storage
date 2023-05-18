import React from 'react';
import Home from './Components/Home/home'
import Login from './Components/Authentication/Login'
import Signup from './Components/Authentication/Signup'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/home/:authenticated/:name' Component={Home} />
        <Route path='/login' Component={Login}/>
        <Route path='/signup' Component={Signup} />
        <Route path='/failed' Component={Error}/>
      </Routes>
    </Router>
  );
}

export default App;
