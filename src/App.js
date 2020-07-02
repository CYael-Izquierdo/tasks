import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./components/auth/Login";
import SigIn from "./components/auth/SigIn";
import Projects from "./components/proyects/Projects";

import ProjectState from "./ context/projects/ProjectState"

function App() {
    return (
        <ProjectState>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/sign-in" component={SigIn}/>
                    <Route exact path="/projects" component={Projects}/>
                </Switch>
            </Router>
        </ProjectState>
    );
}

export default App;
