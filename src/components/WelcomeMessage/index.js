import React, {useContext, useState} from "react";
import CurrentGuildContext from "../../context/CurrentGuildContext";

import './styles.css'
import rvnAPI from "../../axios/instance";


export default function ExitMessage(props) {

    const {currentGuild, setCurrentGuild} = useContext(CurrentGuildContext)

    const [channelSelected, setChannelSelected] = useState("")

    if (props.ligado === false) {
        return (
            <div className="welcomeMessageMain">
                <h1>Seu servidor está com a mensagem de entrada desligada!</h1>
                <select className="canalSelecionado" onChange={event => setChannelSelected(event.target.value)}>
                    {currentGuild.channels.map(a => <option value={a.id}>{a.name}</option>)}
                </select>
                <button onClick={() => {
                    rvnAPI.put('/public/welcomeMessageLigar', {guild_id: props.guild, welcome_channel: channelSelected})
                    setCurrentGuild({...currentGuild, welcome_message: true, welcome_channel: channelSelected})
                }
                }>Ligar no canal selecionado!
                </button>
            </div>
        )
    }

    return (
        <div className="welcomeMessageMain">
            <h1>Seu servidor está com a mensagem de entrada ligada!</h1>
            <select className="canalSelecionado" onChange={event => setChannelSelected(event.target.value)}>
                {currentGuild.channels.map(a => <option value={a.id}>{a.name}</option>)}
            </select>
            <button onClick={() => {
                rvnAPI.put('/public/welcomeMessageLigar', {guild_id: props.guild, welcome_channel: channelSelected})
                setCurrentGuild({...currentGuild, welcome_channel: channelSelected})
            }
            }>Alterar canal!
            </button>
            <button onClick={() => {
                rvnAPI.put('/public/welcomeMessageDesligar', {guild_id: props.guild})
                setCurrentGuild({...currentGuild, welcome_message: false, welcome_channel: ""})
            }
            }>Desligar mensagem
            </button>
        </div>
    )
}