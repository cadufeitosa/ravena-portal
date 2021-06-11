import React from "react";
import UserContext from "../../context/UserContext";

export default function ClientEdit() {
    const {user} = useContext(UserContext)

    return(
    <>
        <p>{user}</p>
    </>
    )
}