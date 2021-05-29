import React, {useContext, useState, useEffect} from 'react';

import '../SideIcons/styles.css'
import GuildContext from "../../context/GuildContext";
import rvnAPI from "../../axios/instance";

import "./styles.css"
import PrefixChange from "../PrefixChange";

export default function DashMain() {
    const {guild} = useContext(GuildContext)
    const [selectedGuild, setSelectedGuild] = useState("1")

    useEffect(() => {
        if (guild !== 1) {
            rvnAPI.get(`/public/getGuild/${guild}`).then(response => {
                if (response.status === 204) {
                    setSelectedGuild("2")
                } else {
                    setSelectedGuild(response.data.guild)
                }
            })
        }
    }, [guild])

    if (guild === 1) {
        return (
            <div className="mainSelect">
                <h1>Por favor, selecione um dos seus servidores ao lado!</h1>
            </div>)
    }

    if (selectedGuild === "2") {
        return (
            <div className="mainNotInServer">
                <h1>Não estou no seu servidor ainda! Clique no botão abaixo para me adicionar!</h1>
                <button onClick={() => {
                    window.location.assign(`https://discord.com/api/oauth2/authorize?client_id=704874746352893952&permissions=8&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&scope=bot&guild_id=${guild}`)
                }
                }>Adicionar ao servidor!
                </button>
            </div>)
    }

    return (
        <>
            <PrefixChange prefix={selectedGuild.prefix} guild={selectedGuild.guild_id}/>
        </>
    )
}