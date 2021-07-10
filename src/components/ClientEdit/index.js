import React, {useContext} from "react";
import UserContext from "../../context/UserContext";

export default function ClientEdit() {
    const {user} = useContext(UserContext)

    return(
    <div>
        <h1>{user.user_id}</h1>
    </div>
    )
}