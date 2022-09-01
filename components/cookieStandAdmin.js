import { useState, useEffect } from 'react';
import { h_seales } from '../components/data/data'
import { Header, HomeTitle, ReportTable, CreateForm, Footer } from '.';
import useSWR from 'swr'
import axios from 'axios';
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react';
import { useStands } from '../http-hook/http-hook'
import Loading from './loading';
const url = process.env.NEXT_PUBLIC_BACKEND_URL + 'api/v1/cookie_stand/'

export default function CookieStandAdmin() {
    const { createStand, fetchStands, deleteStand, data_stand } = useStands()
    const { tokens, logout, userData } = useContext(AuthContext)


    const [cookiesStands, setCookiesStands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const config = {
        headers: {
            'Authorization': `Bearer ${tokens.access}`
        }
    }

    const fetcher = url => axios.get(url, config).then(res => res.data)
    const { data, error } = useSWR(url, fetcher)


    async function handleDelete(id) {
        setIsLoading(true)

        await deleteStand(id)
        const data = await fetchStands()
        if (data) {
            data.map(stand => {
                stand.hourlySales = h_seales
                stand.total = 0

            })
            setIsLoading(false)
        }
        setCookiesStands(data)
    }

    useEffect(() => {

        async function getStands() {
            const data = await fetchStands()
            if (data) {
                data.map(stand => {
                    stand.hourlySales = h_seales
                    stand.total = 0

                })
                setIsLoading(false)
            }
            setCookiesStands(data)
        }
        getStands()
    }, [])
    async function handleStandData(e) {
        e.preventDefault();
        const cookieStandData = {
            location: e.target.location.value,
            minCustomers: e.target.minimum_pre_hour.value,
            maxCustomers: e.target.maximum_pre_hour.value,
            avgCustomer: e.target.average_cookies_pre_sale.value,
            number: cookiesStands.length + 1,
            hourlySales: h_seales,


        }
        setIsLoading(true)
        await createStand(cookieStandData)
        const data = await fetchStands()
        if (data) {
            data.map(stand => {
                stand.hourlySales = cookieStandData.hourlySales
                stand.total = 0

            })
            setIsLoading(false)
        }

        setCookiesStands(data)
    }
    if (tokens && !data) return <Loading />
    return (
        <>
            <HomeTitle />
            <Header onLogout={logout} userData={userData} />
            <main className='flex flex-col '>
                <div>
                    <CreateForm handleStandData={handleStandData} />
                </div>

                <div className="flex justify-center mb-5" >
                    {cookiesStands.length > 0 && <ReportTable cookiesStands={cookiesStands} isLoading={isLoading} handleDelete={handleDelete} data_stand={data_stand} /> || <p> No data added yet</p>}
                </div>``
            </main>

            <Footer cookiesStands={cookiesStands} />
        </>
    )
}