import React, {useContext, useState, useEffect} from "react";
import CurrentGuildContext from "../../context/CurrentGuildContext";

import './styles.css'
import rvnAPI from "../../axios/instance";


export default function AutoRoleChange(props) {

    const {currentGuild, setCurrentGuild} = useContext(CurrentGuildContext)

    const [apiCalled, setApiCalled] = useState(1)

    useEffect(() => {
        rvnAPI.get(`/public/getGuild/${props.guild}`).then(response => {
            const data = response.data.guild
            setCurrentGuild(data)
        })
    }, [apiCalled])

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

                    setTimeout(function () {
                        setApiCalled(apiCalled + 1)
                    }, 500);

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
                setTimeout(function () {
                    setApiCalled(apiCalled + 1)
                }, 500);
            }
            }>Alterar cargo!
            </button>
            <button onClick={() => {
                rvnAPI.put('/public/autoRoleDesligar', {guild_id: props.guild})
                setTimeout(function () {
                    setApiCalled(apiCalled + 1)
                }, 500);
            }
            }>Desligar auto role
            </button>
        </div>
    )
}