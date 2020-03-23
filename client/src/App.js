import './App.css';
import React from 'react';
import {Route,Switch} from "react-router-dom";
import Bisection from './root/Bisection.js';
import Main from "./Main.js";
import Falseposition from "./root/Falseposition";


function App(){
    return (
      <div className="App">
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/Bisection" component={Bisection}/>
            <Route exact path="/Falseposition" component={Falseposition}/>
            
          </Switch>
        </React.Fragment>
      </div>
      
    )
}
export default App;
