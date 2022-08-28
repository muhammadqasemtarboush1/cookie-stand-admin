export default function CreateForm({ handleStandData }) {
    return (
        <form className="flex-col-reverse p-2 mx-auto my-4 bg-gray-200 rounded-lg w-86 " onSubmit={handleStandData} >
            <div className="justify-center p-2 mb-6">
                <label htmlFor="location" className="block mb-2 text-sm font-medium">Location</label>
                <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amman" required />
            </div>

            <div className="flex justify-center p-2 mb-6" >
                <div className="p-2 ">
                    <label htmlFor="minimum_pre_hour" className="block mb-2 text-sm font-medium ">Minimum Customers Per Hour</label>
                    <input type="number" id="minimum_pre_hour" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />

                </div>
                <div className="p-2 ">
                    <label htmlFor="maximum_pre_hour" className="block mb-2 text-sm font-medium"> Maximum Customers Per Hour</label>
                    <input type="number" id="maximum_pre_hour" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0" required />

                </div >
                <div className="p-2 ">
                    <label htmlFor="average_cookies_pre_sale" className="block mb-2 text-sm font-medium">Average Cookies Per Sale</label>
                    <input type="float" id="average_cookies_pre_sale" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1.0" required />

                </div>

            </div>

            <button type="submit" className=" text-white bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>

        </form>
    )
}