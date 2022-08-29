import { hours, h_seales } from './data/data'
export default function ReportTable({ cookiesStands }) {
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }
    shuffle(h_seales)
    console.log(h_seales)
    return (
        <div className="relative overflow-y-auto">
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

                    {h_seales && h_seales.map(hs => {
                        <tr className="bg-white dark:bg-gray-800">
                            <th scope="col" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Jordan
                            </th>

                            return (<td key={hs} className="px-6 py-4">
                                {hs}
                            </td>)


                            < td className="px-6 py-4" >
                                $2999
                            </td>
                        </tr>
                    })}

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
        </div >


    )
}
