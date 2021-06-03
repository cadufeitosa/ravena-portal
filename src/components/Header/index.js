import React, {useContext} from 'react';
import './styles.css'
import {useHistory} from "react-router-dom"
import UserContext from "../../context/UserContext";

export default function Header() {

    const {user} = useContext(UserContext)

    const history = useHistory()

    const isloggedin = user === 1
    return (
        <div className="outer">
            <h1 className="title" onClick={() => history.push('/')}>RAVENA</h1>
            <div className="inner">
                <button onClick={() => {isloggedin ? window.alert("Você deve estar logado para acessar o dashboard") :
                    history.push('/dashboard')
                }}>DASHBOARD
                </button>
                <button onClick={() =>
                    window.location.assign('https://discord.gg/sVnxzCM6t8')}>RAVENA COMMUNITY
                </button>
                {isloggedin ?
                <button onClick={() =>
                    window.location.assign('https://api.ravenabot.com/auth')
                }>LOGIN
                </button>
                : <button onClick={() =>
                        window.location.assign('https://api.ravenabot.com/auth/logout')
                    }>LOGOUT
                    </button> }
            </div>
        </div>
    )

}