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
            <div className="exitMessageMain">
                <h1>Seu servidor está com a mensagem de saída desligada!</h1>
                <select className="canalSelecionado" onChange={event => setChannelSelected(event.target.value)}>
                    {currentGuild.channels.map(a => <option value={a.id}>{a.name}</option>)}
                </select>
                <button onClick={() => {
                    rvnAPI.put('/public/exitMessageLigar', {guild_id: props.guild, exit_channel: channelSelected})
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
        <div className="exitMessageMain">
            <h1>Seu servidor está com a mensagem de saída ligada!</h1>
            <select className="canalSelecionado" onChange={event => setChannelSelected(event.target.value)}>
                {currentGuild.channels.map(a => <option value={a.id}>{a.name}</option>)}
            </select>
            <button onClick={() => {
                rvnAPI.put('/public/exitMessageLigar', {guild_id: props.guild, exit_channel: channelSelected})
                setTimeout(function () {
                    setApiCalled(apiCalled + 1)
                }, 500);
            }
            }>Alterar canal!
            </button>
            <button onClick={() => {
                rvnAPI.put('/public/exitMessageDesligar', {guild_id: props.guild})
                setTimeout(function () {
                    setApiCalled(apiCalled + 1)
                }, 500);
            }
            }>Desligar mensagem
            </button>
        </div>
    )
}