` // @refresh reset`
import { useState } from 'react';
import { Header, HomeTitle, Main, Footer } from '../components';
import { h_seales } from '../components/data/data'



export default function CookieStandAdmin() {

  const [cookiesStands, setCookiesStands] = useState([]);

  function handleStandData(e) {
    e.preventDefault();
    const cookieStandData = {
      location: e.target.location.value,
      minCustomers: e.target.minimum_pre_hour.value,
      maxCustomers: e.target.maximum_pre_hour.value,
      avgCustomer: e.target.average_cookies_pre_sale.value,
      number: cookiesStands.length + 1,
      hourlySales: h_seales

    }

    setCookiesStands([...cookiesStands, cookieStandData])

  }
  return (
    <>
      <HomeTitle />
      <Header />
      <Main handleStandData={handleStandData} cookiesStands={cookiesStands} />
      <Footer cookiesStands={cookiesStands} />

    </>

  )
}
