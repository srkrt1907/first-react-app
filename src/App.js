import React from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './component/Todo';
import User from './component/User';

import { Provider } from "react-redux";
import store from "./redux/store";

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';


function App() {
  return (
    <div className="App">

    <Provider store={store}>

      <BrowserRouter>
        <Switch>


        <Route exact path="/" component = {() => <Redirect to='/todo' />}/>


          <Route exact  path="/todo" component={Todo} />
          <Route exact path="/user" component={User} />

          <Route  component={() => <div>404</div>} />


        </Switch>
      </BrowserRouter>

    </Provider>
    </div>
  );
}

export default App;
