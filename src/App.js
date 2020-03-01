import React from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './component/Todo';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>


        <Route exact path="/" component = {() => <Redirect to='/todo' />}/>


          <Route exact path="/todo" component={Todo} />
          <Route exact path="/user" component={() => <div>User</div>} />



        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
