import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'
import Portal from "./layouts/Portal";

function App() {
  return (
    <Switch>
      <Route path="/" component={Portal}/>
    </Switch>
  );
}

export default App;
