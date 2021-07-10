import React, {useContext, useState} from "react";
import CurrentGuildContext from "../../context/CurrentGuildContext";

import './styles.css'
import rvnAPI from "../../axios/instance";


export default function AutoRoleChange(props) {

    const {currentGuild, setCurrentGuild} = useContext(CurrentGuildContext)

    const [roleSelected, setRoleSelected] = useState("")

    if (props.ligado === false) {
        return (
            <div className="autoRoleMain">
                <h1>Seu servidor está com o Auto Role desligado!</h1>
                <select className="roleSelecionado" onChange={event => setRoleSelected(event.target.value)}>
                    {currentGuild.roles.map(a => <option value={a.id}>{a.name}</option>)}
                </select>
                <button onClick={() => {
                    rvnAPI.put('/public/autoRoleLigar', {guild_id: props.guild, cargo_id: roleSelected})

                    setCurrentGuild({...currentGuild, autorole: true, cargo_id: roleSelected});

                }
                }>Ligar com o cargo selecionado!
                </button>
            </div>
        )
    }

    return (
        <div className="autoRoleMain">
            <h1>Seu servidor está com auto role ligado!</h1>

            <select className="autoRoleSelecionado" onChange={event => setRoleSelected(event.target.value)}>
                {currentGuild.roles.map(a => <option value={a.id}>{a.name}</option>)}
            </select>
            <button onClick={() => {
                rvnAPI.put('/public/autoRoleLigar', {guild_id: props.guild, cargo_id: roleSelected})
                setCurrentGuild({...currentGuild, autorole: true, cargo_id: roleSelected});
            }
            }>Alterar cargo!
            </button>
            <button onClick={() => {
                rvnAPI.put('/public/autoRoleDesligar', {guild_id: props.guild})
                setCurrentGuild({...currentGuild, autorole: false, cargo_id: ""});
            }
            }>Desligar auto role
            </button>
        </div>
    )
}