import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StateMachineProvider, createStore } from "little-state-machine";
import useForm from "react-hook-form";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Result from "./Result";

createStore({
    data: {}
});

export default function App() {
    return (
        <StateMachineProvider>
            <h1>BC's New Form</h1>
            <Router>
                <Route exact path="/components/step1" component={Step1} />
                <Route exact path="/components/step2" component={Step2} />
                <Route path="/components/result" component={Result} />
            </Router>
        </StateMachineProvider>
    );
}