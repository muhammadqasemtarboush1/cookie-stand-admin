import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

export default function LoginForm() {
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');

    const { login } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        console.log({
            username,
            password
        });
        login({
            username,
            password
        });
    }

    function handleUserName(e) {
        setUserName(e.target.value);
    }
    function handleUserPassword(e) {
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Login</h1>
                {/* title */}
            </div>
            <div>
                {/* title */}
                <lable>
                    USER NAME
                </lable>
                <input onChange={handleUserName} type="text" name="username" placeholder="Username" />
            </div>
            <div>
                <lable>
                    PASSWORD
                </lable>
                <input onChange={handleUserPassword} type="password" name="password" placeholder="Password" />
            </div>
            <div>
                <button type="submit" className="mb-0 mt-3 text-white dark:bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-24 h-16 px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

            </div>
        </form>
    )
}