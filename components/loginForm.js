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
            username: e.target.username.value,
            password
        });
        login({
            username: e.target.username.value,
            password: e.target.password.value,
        });
    }

    function handleUserName(e) {
        setUserName(e.target.value);
    }
    function handleUserPassword(e) {
        setPassword(e.target.value)
    }

    return (
        // <form onSubmit={handleSubmit}>
        //     <div>
        //         <h1>Login</h1>
        //         {/* title */}
        //     </div>
        //     <div>
        //         {/* title */}
        //         <lable>
        //             USER NAME
        //         </lable>
        //         <input onChange={handleUserName} type="text" name="username" placeholder="Username" />
        //     </div>
        //     <div>
        //         <lable>
        //             PASSWORD
        //         </lable>
        //         <input onChange={handleUserPassword} type="password" name="password" placeholder="Password" />
        //     </div>
        //     <div>
        //         <button type="submit" className="mb-0 mt-3 text-white dark:bg-gray-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-24 h-16 px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

        //     </div>
        // </form>
        <div className="container max-w-full px-6 py-24 mx-auto">
            <div className="font-sans">
                <div className="max-w-sm px-6 mx-auto">
                    <div className="relative flex flex-wrap">
                        <div className="relative w-full">
                            <div className="mt-6">

                                <div className="font-semibold text-center text-black">
                                    Login
                                </div>

                                <form className="mt-8" onSubmit={handleSubmit} autoComplete="false"
                                >
                                    <div className="max-w-lg mx-auto">
                                        <div className="py-2">
                                            <span className="px-1 text-sm text-gray-600">Username</span>
                                            <input placeholder="" type="text" name="username"
                                                className="block w-full px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                                        </div>
                                    </div>
                                    <div className="max-w-lg mx-auto">
                                        <div className="py-2">
                                            <span className="px-1 text-sm text-gray-600">Password</span>
                                            <input placeholder="" type="password" name="password"
                                                className="block w-full px-3 py-2 placeholder-gray-600 bg-white border-2 border-gray-300 rounded-lg shadow-md text-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" />
                                        </div>
                                    </div>
                                    {/* </div> */}
                                    <div className="flex justify-between">
                                        <button type="submit" className="block w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-gray-800 rounded-lg shadow-xl hover:text-white hover:bg-black">
                                            Login
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    )
}