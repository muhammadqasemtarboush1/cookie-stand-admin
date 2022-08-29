import { CreateForm } from '../components'
import { ReportTable } from '../components'

export default function Main({ cookiesStands, handleStandData }) {
    return (
        <main className='flex flex-col '>
            <div>
                <CreateForm handleStandData={handleStandData} />
            </div>

            <div className="flex justify-center mb-5" >
                {cookiesStands.length > 0 && <ReportTable cookiesStands={cookiesStands} /> || <p> No data added yet</p>}
            </div>``
        </main>

    )
}