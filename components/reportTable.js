import { hours, h_seales } from './data/data'
export default function ReportTable({ cookiesStands, isLoading, handleDelete, data_stand }) {

    const handleDeleteStand = async (id) => {
        handleDelete(id)
    }
    // if (data_stand) {
    //     data_stand.map(stand => {
    //         stand.total = 0
    //         Object.keys(stand.hourly_sales).map(hour => {
    //             stand.total += stand.hourly_sales[hour]
    //         })

    //     })
    // }
    return (
        <div className="relative ">
            <table className="w-full text-sm text-left text-gray-500 rounded-l-lg dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 rounded-l-lg">
                            Location
                        </th>
                        {hours && hours.map(hour => {
                            return (
                                <th scope="col" key={hour} className="px-6 py-3">
                                    {hour}
                                </th>
                            )
                        })
                        }
                        <th scope="col" className="px-6 py-3 rounded-r-lg">
                            Total
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && cookiesStands && cookiesStands.map(stand => {
                        return (<tr scope="row" key={stand.location} className="bg-white dark:bg-gray-800">
                            <td scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {stand.location}
                                <button className="float-right btn btn-primary"

                                    onClick={(e) => {
                                        console.log(stand, "ssssssssssssss");
                                        handleDeleteStand(stand.id);
                                    }} >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                            </td>
                            {Object.keys(stand.hourlySales).map(hs => { return <td key={hs} className="px-6 py-4" >{stand.hourlySales[hs]}</td> })}
                            <td className="px-6 py-4">
                                {stand.total}
                            </td>
                        </tr>
                        )
                    }) || <tr scope="row" className="bg-white dark:bg-gray-800">
                            <td scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Pendding
                            </td>
                            {Object.keys(h_seales).map(hs => { return <td key={hs} className="px-6 py-4" >Pendding</td> })}
                            <td className="px-6 py-4">
                                Pendding
                            </td>
                        </tr>}
                </tbody>
                <tfoot>
                    <tr className="font-semibold text-gray-100 dark:bg-gray-500">
                        <th scope="row" className="px-6 py-3 text-base">Totals</th>
                        {h_seales && h_seales.map(hs => {
                            return (<td key={hs} className="px-6 py-4">
                                {0}
                            </td>)
                        })}
                        <td className="px-6 py-3">000</td>
                    </tr>
                </tfoot>
            </table >
        </div >
    )
}
