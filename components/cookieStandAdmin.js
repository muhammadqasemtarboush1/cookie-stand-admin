import { useState } from 'react';
import { h_seales } from '../components/data/data'
import { Header, HomeTitle, Main, Footer } from '.';
import useSWR from 'swr'
import axios from 'axios';
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';
const url = 'https://cookie-api-1.herokuapp.com/api/v1/cookie_stand/'

export default function CookieStandAdmin() {
    const [cookiesStands, setCookiesStands] = useState([]);
    const { tokens } = useContext(AuthContext)

    const config = {
        headers: {
            'Authorization': `Bearer ${tokens.access}`
        }
    }

    const fetcher = url => axios.get(url, config).then(res => res.data)
    const { data, error } = useSWR(url, fetcher)


    function handleStandData(e) {
        e.preventDefault();
        const cookieStandData = {
            location: e.target.location.value,
            minCustomers: e.target.minimum_pre_hour.value,
            maxCustomers: e.target.maximum_pre_hour.value,
            avgCustomer: e.target.average_cookies_pre_sale.value,
            number: cookiesStands.length + 1,
            hourlySales: h_seales,
            total: 0

        }

        setCookiesStands([...cookiesStands, cookieStandData])
    }
    if (tokens && !data) return <div>loading...</div>
    return (
        <>
            <HomeTitle />
            <Header />
            <Main handleStandData={handleStandData} cookiesStands={cookiesStands} />
            <Footer cookiesStands={cookiesStands} />
        </>
    )
}