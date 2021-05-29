import React, {useState} from 'react';
import rvnAPI from "../../axios/instance"
export default function PrefixChange(props) {

    const [newPrefix, setNewPrefix] = useState("")
console.log(newPrefix)

    return(
        <div className="prefixMain">
            <h1>{props.prefix}</h1>
            <input onChange={event => setNewPrefix(event.target.value)}/>
            <button onClick={() => {
                rvnAPI.put(`/public/changePrefix`, {prefix: newPrefix, guild_id: props.guild})
            }
            }>Atualizar prefixo!</button>
        </div>
    )
}