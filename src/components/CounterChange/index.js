import React, {useContext, useEffect, useState} from "react";
import rvnAPI from "../../axios/instance";

import './styles.css'
import CurrentGuildContext from "../../context/CurrentGuildContext";

export default function CounterChange(props) {

    const {currentGuild, setCurrentGuild} = useContext(CurrentGuildContext)
    const [apiCalled, setApiCalled] = useState(1)

    useEffect(() => {
        rvnAPI.get(`/public/getGuild/${props.guild}`).then(response => {
            const data = response.data.guild

            setCurrentGuild(data)
        })
    }, [apiCalled])


    if (props.ligado === false) {
        return (
            <div className="counterNotActiveMain">
                <h1>Seu servidor está com o contador desabilitado!</h1>
                <button onClick={() => {
                    rvnAPI.put('/public/counterActivate', {guild_id: props.guild})
                    setTimeout(function(){ setApiCalled(apiCalled + 1) }, 500);
                }}>Habilitar contador!
                </button>
            </div>
        )
    }


    return (
        <div className="counterNotActiveMain">
            <h1>Seu servidor está com o contador habilitado!</h1>
            {currentGuild.channels.map(a => {
                if (props.channels.find(element => element === a.id)) {
                    return (
                        <>
                            <p key={a.id}>{a.name}</p>
                            <input type="checkbox" key={a.id} checked
                                   onClick={() => {
                                       rvnAPI.put('/public/counterChannel', {
                                           guild_id: props.guild,
                                           counter_channels: a.id
                                       })
                                       setTimeout(function(){ setApiCalled(apiCalled + 1) }, 500);

                                   }}/>
                        </>
                    )
                }

                return (
                    <>
                        <p key={a.id}>{a.name}</p>
                        <input type="checkbox" key={a.id} onClick={() => {
                            rvnAPI.put('/public/counterChannel', {
                                guild_id: props.guild,
                                counter_channels: a.id
                            })
                            setTimeout(function(){ setApiCalled(apiCalled + 1) }, 500);

                        }}/>
                    </>
                )
            })}
            <button onClick={() => {
                rvnAPI.put('/public/counterDeactivate', {guild_id: props.guild})
                setTimeout(function(){ setApiCalled(apiCalled + 1) }, 500);
            }
            }>Desabilitar contador
            </button>
        </div>
    )
}