import React, {useContext, useEffect, useState} from 'react';

import '../Sidebar/styles.css'
import userContext from '../../context/UserContext'

import SideIcons from "../SideIcons";
import GuildContext from "../../context/GuildContext";

export default function Sidebar() {
    const {user} = useContext(userContext)
    const {setGuild} = useContext(GuildContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(user !== 1) {
            setLoading(false)
        }
    }, [user])

    if (loading) {
        return <p>LOADING</p>
    }



    return (
        <div className="body">
            <div className="userProfile">
                <img src={`https://cdn.discordapp.com/avatars/${user.user_id}/${user.profilePicture}`} alt="HIHIHI" className="profilePhoto" onClick={() => setGuild(3)}/>
            </div>
            <div>
            {user.guilds.map(a => {
                if (a.owner) {
                    return <div>
                        <SideIcons photo={a.icon} id={a.id} name={a.name} key={a.id}/>
                    </div>
                }
            })}
            </div>
        </div>
    )
}