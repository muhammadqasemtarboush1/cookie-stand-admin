import { CreateForm } from '../components'
import { ReportTable } from '../components'

export default function Main({ cookiesStands, handleStandData }) {
    return (
        <main className='flex flex-col '>
            <div>
                <CreateForm handleStandData={handleStandData} />
            </div>

            <div className="flex justify-center mb-5" >

                {/* {
                    cookiesStands &&
                        cookiesStands.length === 0 ? <p className='mx-auto'>
                        Report table coming soon
                    </p> : <ReportTable />} */}
                <ReportTable />
            </div>
            {cookiesStands[0] ? cookiesStands[0].location : <p>no data yes</p>}

            {/* <div className="mb-6 " >
                <ul className="flex flex-wrap items-center justify-center w-1/2 mx-auto my-4 text-gray-900 dark:text-white ">
                    {cookiesStands.length > 0 &&
                        cookiesStands.map(item => {
                            return (
                                <>
                                    <li className='flex dark:text-black w-' key={item.number} >
                                        {`{ Location: ${item.location}, minCustomers: ${item.minCustomers}, maxCustomers: ${item.maxCustomers},avgCustomer: ${item.avgCustomer}}`}
                                    </li> <br />
                                </>
                            )
                        })
                    }
                </ul>

            </div> */}

        </main>

    )
}