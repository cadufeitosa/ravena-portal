import React, {useContext, useEffect, useState} from 'react';
import rvnAPI from "../../axios/instance"
import CurrentGuildContext from "../../context/CurrentGuildContext";
import GuildContext from "../../context/GuildContext";
import "./styles.css"

export default function PrefixChange(props) {
    const {guild} = useContext(GuildContext)
    const {setCurrentGuild} = useContext(CurrentGuildContext)
    const [apiCalled, setApiCalled] = useState(1)

    useEffect(() => {
        rvnAPI.get(`/public/getGuild/${guild}`).then(response => {
            const data = response.data.guild
            setCurrentGuild(data)
        })
    }, [apiCalled])


    const [newPrefix, setNewPrefix] = useState("")

    return (
        <div className="prefixMain">
            <h1 className="prefixAtual"> Prefixo atual do seu servidor: {props.prefix}</h1>
            <label>Mude o prefixo do seu servidor:   </label>
            <input onChange={event => setNewPrefix(event.target.value)}/>
            <button onClick={() => {
                rvnAPI.put(`/public/changePrefix`, {prefix: newPrefix, guild_id: props.guild}).then(response =>{
                    if (response.status === 200) {
                        setTimeout(function(){ setApiCalled(apiCalled + 1) }, 500);
                    }
                })
            }
            }>Atualizar prefixo!
            </button>
        </div>
    )
}