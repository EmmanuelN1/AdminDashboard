import { GiWallet } from 'react-icons/gi';
function Cards() {
  return (
    <div className="card-container flex m-7 space-x-6 ">
        <div className="card w-1/2 bg-white p-4"> 
            <div className=''>
                <GiWallet 
                    className='text-red-500 w-10 h-10
                '/>
            <div className='font-bold text-xl text-gray-700'>
                Super Plus 
            <div>

            </div>

                </div>
            </div>

         </div>

        <div className="card w-1/2 bg-white p-4">
            Card2

        </div>
    </div>
  )
}

export default Cards