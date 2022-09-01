` // @refresh reset`
import { CookieStandAdmin, LoginForm } from '../components'
import { AuthContext } from '../contexts/Auth';
import { useContext } from 'react'
// import LoginForm from '../components'
export default function Home() {
  const { tokens } = useContext(AuthContext);

  return (
    <>
      {
        tokens ? <CookieStandAdmin /> : <LoginForm />
      }

    </>
  )
}
