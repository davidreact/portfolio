import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import App from './components/App';
import Header from './components/Header';
import Jokes from './components/Jokes';
import Projects from './components/Projects';
import { basename } from 'path';

// const history = createBrowserHistory(); 

ReactDOM.render(
  <HashRouter 
  // history={history} 
  // basename='/'
  >
    <Switch>
      <Route exact path='/' render={() => <Header><App /></Header>} />
      <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
      <Route path='/projects' render={() => <Header><Projects /></Header> } ></Route>
    </Switch>
  </HashRouter>, 
  document.getElementById('root'));
 