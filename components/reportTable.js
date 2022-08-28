import { hours, h_seales } from './data/data'
export default function ReportTable() {
    return (
        <div className="relative overflow-x-auto">
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
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Jordan
                        </th>
                        {h_seales && h_seales.map(hs => {
                            return (<td key={hs} className="px-6 py-4">
                                {hs}
                            </td>)
                        })}

                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="font-semibold text-gray-100 dark:bg-gray-500">
                        <th scope="row" className="px-6 py-3 text-base">Totals</th>
                        {h_seales && h_seales.map(hs => {
                            return (<td key={hs} className="px-6 py-4">
                                {hs}
                            </td>)
                        })}
                        <td className="px-6 py-3">21,000</td>
                    </tr>
                </tfoot>
            </table>
        </div>


    )
}



// import { hours, hourly_sales } from '../data/data'

// export default function ReportTable() {
//     return (

//         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//             <table className="w-1/3 text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                     <tr>
//                         <th scope="col" className="px-2 py-3">
//                             Location
//                         </th>
//                         {hours &&
//                             hours.map(hour => {
//                                 return (
//                                     <th key={hour} scope="col" className="px-3 py-3">
//                                         {hour}
//                                     </th>
//                                 )
//                             })
//                         }
//                         <th scope="col" className="px-6 py-3">
//                             Total
//                         </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                             Jo
//                         </th>
//                         {hourly_sales &&
//                             hourly_sales.map(hs => {
//                                 return (
//                                     <th key={hs} scope="col" className="px-3 py-3">
//                                         {hs}
//                                     </th>
//                                 )
//                             })
//                         }

//                         <td className="px-6 py-4">
//                             $2999
//                         </td>
//                     </tr>

//                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
//                         <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                             Totals
//                         </th>
//                         {hourly_sales &&
//                             hourly_sales.map(hs => {
//                                 return (
//                                     <th key={hs} scope="col" className="px-3 py-3">
//                                         {hs}
//                                     </th>
//                                 )
//                             })
//                         }

//                         <td className="px-6 py-4">
//                             $2999
//                         </td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>

//     )
// }