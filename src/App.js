import './App.css';
import React, {useState, useEffect} from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import UserContext from "./context/UserContext";
import GuildContext from "./context/GuildContext";

import ReactGA from 'react-ga';

import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import rvnAPI from "./axios/instance";

function App() {
    const [user, setUser] = useState(1)
    const [guild, setGuild] = useState(1)

    useEffect(() => {
        rvnAPI.get( 'http://localhost:5000/auth/info').then(response => {
            setUser(response.data)
        }).catch(err => console.log(err));
        }, []
    )

    useEffect(() => {
        const trackingId = "UA-53202416-1"; // Replace with your Google Analytics tracking ID
        ReactGA.initialize(trackingId);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <Router>
            <UserContext.Provider value={{user, setUser}}>
                <GuildContext.Provider value={{guild, setGuild}}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                </Switch>
                </GuildContext.Provider>
            </UserContext.Provider>
        </Router>
    );
}

export default App;