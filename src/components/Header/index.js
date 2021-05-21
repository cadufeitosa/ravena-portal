import React, {useContext, useEffect} from 'react';
import rvnAPI from '../../axios/instance';
import './styles.css'
import {useHistory} from "react-router-dom"
import UserContext from "../../context/UserContext";

export default function Header() {

    const {user, setUser} = useContext(UserContext)

    const history = useHistory()

    return (
        <div class="outer">
            <h1 class="title" onClick={() => history.push('/')}>RAVENA</h1>
            <div class="inner">
                <button onClick={() =>
                    history.push('/dashboard')
                }>DASHBOARD
                </button>
                <button onClick={() =>
                    window.location.assign('https://discord.gg/sVnxzCM6t8')}>RAVENA COMMUNITY
                </button>
                <button onClick={() =>
                    window.location.assign('http://localhost:5000/auth')
                }>LOGIN
                </button>
            </div>
        </div>
    )

}