

import { createContext, useState } from "react";
import axios from 'axios';
import jwt from 'jsonwebtoken'
export const AuthContext = createContext();



export function AuthWrapper(props) {

    const [globalState, setGlobalState] = useState({
        tokens: null,
        userData: null,
        login,
        logout,
    })

    async function login(userInfo) {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + "api/token/";
        const res = await axios.post(url, userInfo);
        const decodedToken = jwt.decode(res.data.access)

        setGlobalState({
            tokens: res.data,
            login,
            userData: {
                username: userInfo.username,
                id: decodedToken.user_id
            }
        })
    }

    function logout() {
        // setGlobalState({
        //     tokens: null,
        //     userData: null
        // })
        console.log(logout);

    }

    return (
        <>
            <AuthContext.Provider value={globalState}>
                {props.children}
            </AuthContext.Provider>
        </>
    )
}