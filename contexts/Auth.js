

import { createContext, useState } from "react";
import axios from 'axios';
// 1.1  create the context 
export const AuthContext = createContext();
// 1.2  create the context wrapper // provider


export function AuthWrapper({ children }) {
    // I need tokens and login funciton to be global
    const [globalState, setGlobalState] = useState({
        tokens: null,

        login,
    })
    // create login function that will send request to the server and recive a token, I need to update the state
    async function login(userInfo) {
        const url = "https://cookie-api-1.herokuapp.com/api/token/";
        const res = await axios.post(url, userInfo);
        console.log(11111, res)
        setGlobalState({
            tokens: res.data,
            login,
        })
    }

    return (
        <>
            <AuthContext.Provider value={globalState}>
                {children}
            </AuthContext.Provider>
        </>
    )
}