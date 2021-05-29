import React, {useContext} from 'react';

import '../SideIcons/styles.css'
import GuildContext from "../../context/GuildContext";

export default function SideIcons(props) {
    const {setGuild} = useContext(GuildContext)


    let str = props.name;
    let acronym = str.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')



    return (
        <div className="imagemSide">{ props.photo ?
        <img src={`https://cdn.discordapp.com/icons/${props.id}/${props.photo}`} className="imagemServidor" alt="Imagem" onClick={() => {setGuild(props.id)}}/>
        : <div className="circle" onClick={() => {setGuild(props.id)}}>{acronym}</div>}
        </div>
    )}