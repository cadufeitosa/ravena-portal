import React, {useContext, useState, useEffect} from "react";
import CurrentGuildContext from "../../context/CurrentGuildContext";

import './styles.css'
import rvnAPI from "../../axios/instance";


export default function ExitMessage(props) {

    const {currentGuild, setCurrentGuild} = useContext(CurrentGuildContext)

    const [apiCalled, setApiCalled] = useState(1)

    useEffect(() => {
        rvnAPI.get(`/public/getGuild/${props.guild}`).then(response => {
            const data = response.data.guild
            setCurrentGuild(data)
        })
    }, [apiCalled])

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
                    setTimeout(function () {
                        setApiCalled(apiCalled + 1)
                    }, 500);
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
                setTimeout(function () {
                    setApiCalled(apiCalled + 1)
                }, 500);
            }
            }>Alterar canal!
            </button>
            <button onClick={() => {
                rvnAPI.put('/public/welcomeMessageDesligar', {guild_id: props.guild})
                setTimeout(function () {
                    setApiCalled(apiCalled + 1)
                }, 500);
            }
            }>Desligar mensagem
            </button>
        </div>
    )
}