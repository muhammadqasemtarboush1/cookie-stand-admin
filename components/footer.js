import Image from "next/image";
import Logo from '../public/logo.png'

export default function Footer() {
    return (
        <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="#" className="flex items-center mb-4 sm:mb-0">
                    <Image src={Logo}
                        alt="Landscape picture"
                        width={100}
                        height={100} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Cookie Stand</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Home</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">Report</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 Cookie Stand™  All Rights Reserved.
            </span>
        </footer>
    )
}