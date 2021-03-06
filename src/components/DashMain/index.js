import React, {useContext, useEffect, useState} from 'react';

import '../SideIcons/styles.css'
import GuildContext from "../../context/GuildContext";
import rvnAPI from "../../axios/instance";

import "./styles.css"
import PrefixChange from "../PrefixChange";
import CurrentGuildContext from "../../context/CurrentGuildContext";
import WelcomeMessage from "../WelcomeMessage";
import ExitMessage from "../ExitMessage";
import CounterChange from "../CounterChange";
import AutoRoleChange from "../AutoRoleChange";
import ClientEdit from "../ClientEdit";

export default function DashMain() {
    const {guild} = useContext(GuildContext)
    const {currentGuild, setCurrentGuild} = useContext(CurrentGuildContext)

    useEffect(() => {
        if (guild !== 1) {
            rvnAPI.get(`/public/getGuild/${guild}`).then(response => {
                if (response.status === 204) {
                    setCurrentGuild("2")
                } else {
                    setCurrentGuild(response.data.guild)
                }
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [guild])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (currentGuild !== 1) {
            setLoading(false)
        }
    }, [currentGuild])

    if (guild === 3) {
        return (
            <div className="dashInner">
                <ClientEdit/>
            </div>
        )
    }

    if (guild === 1) {
        return (
            <div className="dashInner">
                <div className="selectServer">
                    <h1>Por favor, selecione um dos seus servidores!</h1>
                </div>
            </div>)
    }

    if (loading) {
        return <p>LOADING</p>
    }


    if (currentGuild === "2") {
        return (
            <div className="dashInner">
                <div className="notInServer">
                    <h1>Não estou no seu servidor ainda! Clique no botão abaixo para me adicionar!</h1>
                    <button onClick={() => {
                        window.location.assign(`https://discord.com/oauth2/authorize?client_id=704874746352893952&permissions=8&redirect_uri=https%3A%2F%2Fapi.ravenabot.com%2Fauth%2Fredirect&response_type=code&scope=identify%20email%20guilds%20bot&guild_id=${guild}`)
                    }
                    }>Adicionar ao servidor!
                    </button>
                </div>
            </div>)
    }

    return (
        <div className="dashInner">
            <PrefixChange prefix={currentGuild.prefix} guild={currentGuild.guild_id}/>
            <WelcomeMessage ligado={currentGuild.welcome_message} channel={currentGuild.welcome_channel}
                            guild={currentGuild.guild_id}/>
            <ExitMessage ligado={currentGuild.exit_message} channel={currentGuild.exit_channel}
                         guild={currentGuild.guild_id}/>
            <CounterChange ligado={currentGuild.counter_active} channels={currentGuild.counter_channels}
                           guild={currentGuild.guild_id}/>
            <AutoRoleChange ligado={currentGuild.autorole} role={currentGuild.cargo_id} guild={currentGuild.guild_id}/>
        </div>
    )
}