
import axios from "axios";
import useSWR from "swr";
const URL = process.env.NEXT_PUBLIC_BACKEND_URL

import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';

export function useStands() {
    const { tokens } = useContext(AuthContext)

    const { data, error, mutate } = useSWR([URL, tokens], fetchStands)

    async function fetchStands() {


        if (!tokens) {
            return
        }
        try {
            const response = await axios.get(URL + 'api/v1/cookie_stand/', config())
            return response.data
        }
        catch (error) {
            console.log('error', error)
        }
    }

    async function createStand(info) {
        try {
            await axios.post(URL + 'api/v1/cookie_stand/', info, config())
            mutate()
        }
        catch (error) {
            console.log('error', error)

        }

    }

    async function deleteStand(id) {
        try {

            await axios.delete(URL + 'api/v1/cookie_stand/' + id, config())
            mutate()

        }
        catch (error) {
            console.log('error', error)
        }
    }


    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            }
        }
    }
    return {
        data_stand: data,
        createStand,
        fetchStands,
        deleteStand
    }
}
