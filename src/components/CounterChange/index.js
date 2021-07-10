import React, {useContext} from "react";
import rvnAPI from "../../axios/instance";

import './styles.css'
import CurrentGuildContext from "../../context/CurrentGuildContext";

export default function CounterChange(props) {

    const {currentGuild, setCurrentGuild} = useContext(CurrentGuildContext)


    if (props.ligado === false) {
        return (
            <div className="counterNotActiveMain">
                <h1>Seu servidor está com o contador desabilitado!</h1>
                <button onClick={() => {
                    rvnAPI.put('/public/counterActivate', {guild_id: props.guild})
                    setCurrentGuild({...currentGuild, counter_active: true})
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
                    // Checks if counter is active in channel
                    return (
                        <>
                            <p key={a.id}>{a.name}</p>
                            <input type="checkbox" key={a.id} checked
                                   onClick={() => {
                                       rvnAPI.put('/public/counterChannel', {
                                           guild_id: props.guild,
                                           counter_channels: a.id
                                       })
                                       setCurrentGuild({...currentGuild, counter_channels: currentGuild.counter_channels.filter(teste => teste !== a.id)})

                                   }}/>
                        </>
                    )
                }

                // writes channel that is not active
                return (
                    <>
                        <p key={a.id}>{a.name}</p>
                        <input type="checkbox" key={a.id} onClick={() => {
                            rvnAPI.put('/public/counterChannel', {
                                guild_id: props.guild,
                                counter_channels: a.id
                            })
                            setCurrentGuild({...currentGuild, counter_channels: currentGuild.counter_channels.concat(a.id)})

                        }}/>
                    </>
                )
            })}

            <button onClick={() => {
                rvnAPI.put('/public/counterDeactivate', {guild_id: props.guild})
                setCurrentGuild({...currentGuild, counter_active: false, counter_channels: []})
            }
            }>Desabilitar contador
            </button>

        </div>
    )
}