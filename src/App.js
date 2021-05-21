import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import UserContext from "./context/UserContext";
import { createBrowserHistory } from 'history';

import ReactGA from 'react-ga';
import rvnAPI from './axios/instance'

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"

function App() {
    const [user, setUser] = useState({})

    const history = createBrowserHistory();

    useEffect(() => {
            const infos = rvnAPI.get('/auth')
            console.log(infos)
            setUser({
                infos
            })
        }, []
    )

    useEffect(() => {
        const trackingId = "UA-53202416-1"; // Replace with your Google Analytics tracking ID
        ReactGA.initialize(trackingId);
        history.listen(location => {
            ReactGA.set({page: location.pathname}); // Update the user's current page
            ReactGA.pageview(location.pathname); // Record a pageview for the given page
        });
    },[])

    return (
        <Router>
            <UserContext.Provider value={{user, setUser}}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
            </UserContext.Provider>
        </Router>
    );
}

export default App;