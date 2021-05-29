import React, {useContext, useEffect, useState} from 'react';

import '../Sidebar/styles.css'
import userContext from '../../context/UserContext'

import SideIcons from "../SideIcons";

export default function Sidebar() {
    const {user} = useContext(userContext)
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
            {user.guilds.map(a => {
                if (a.owner) {
                    return <div>
                        <SideIcons photo={a.icon} id={a.id} name={a.name} key={a.id}/>
                    </div>
                }
            })}

        </div>
    )
}