import React from 'react';
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function Application() 
{
  return(
    <div>
      <Router>
          <Switch>
              <Route exact path ="/" component = {WelcomePage}/> { /*exact yazmazsa her / gördüğünde WelcomePage i de açar*/ }
              <Route path ="/login" component = {LoginPage}/>
              <Route path ="/signup" component = {SignUpPage}/>
              <Route path ="/mainpage" component = {MainPage}/>
                { /*<Route path ='/user/:username' component = {UserPage} /> --> Sonradan eklenebilir*/ }
              <Redirect to ="/"/> { /*path lerden hiçbiri ile match olmazsa anasayfaya atacak*/ }
          </Switch> { /*Switch yazılmazsa redirect olunca diğerlerine dönmez çünkü sırayla çalışır*/ }
      </Router>
    </div>
  );
}

export default Application;