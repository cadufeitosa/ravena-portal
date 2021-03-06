import React, {useContext, useState} from 'react';
import rvnAPI from "../../axios/instance"
import CurrentGuildContext from "../../context/CurrentGuildContext";
import "./styles.css"

export default function PrefixChange(props) {
    const {currentGuild, setCurrentGuild} = useContext(CurrentGuildContext)

    const [newPrefix, setNewPrefix] = useState("")

    return (
        <div className="prefixMain">
            <h1 className="prefixAtual"> Prefixo atual do seu servidor: {props.prefix}</h1>
            <label>Mude o prefixo do seu servidor:   </label>
            <input onChange={event => setNewPrefix(event.target.value)}/>
            <button onClick={() => {
                rvnAPI.put(`/public/changePrefix`, {prefix: newPrefix, guild_id: props.guild}).then(response =>{
                    if (response.status === 200) {
                        setCurrentGuild({...currentGuild, prefix:newPrefix})
                    }
                })
            }
            }>Atualizar prefixo!
            </button>
        </div>
    )
}