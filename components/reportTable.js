import { hours, h_seales } from './data/data'
export default function ReportTable({ cookiesStands }) {

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
                    {cookiesStands && cookiesStands.map(stand => {
                        return (<tr scope="row" key={stand.location} className="bg-white dark:bg-gray-800">
                            <td scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {stand.location}
                            </td>
                            {Object.keys(stand.hourlySales).map(hs => { return <td key={hs} className="px-6 py-4" >{stand.hourlySales[hs]}</td> })}
                            <td className="px-6 py-4">
                                {stand.total}
                            </td>
                        </tr>
                        )
                    })}
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
