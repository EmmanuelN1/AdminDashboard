import { GiWallet } from 'react-icons/gi';
function Cards() {
  return (
    <div className="card-container flex m-7 space-x-6 ">
        <div className="card w-1/2 bg-white p-4"> 
            <div className="">
                <div>
                    <GiWallet 
                        className='text-red-500 w-10 h-10
                    '/>
                </div>
                <div className='font-bold text-xl text-gray-700'>
                Super Plus 
                </div>
                <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                    Sales
                </div>
                <div className='space-x-1 lg:space-x-3 xlg:space-x-3 md:space-x-3'>
                    <span className="font-bold text-3xl">$340</span>
                    <span className="bg-green-500 text-white p-1 rounded-full text-sm font-bold align-text-top">+28%</span>
                </div>

                
                
            </div>

                
        </div>

        <div className="card w-1/2 bg-white p-4">
        <div className="">
                <div>
                    <GiWallet 
                        className='text-red-500 w-10 h-10
                    '/>
                </div>
                <div className='font-bold text-xl text-gray-700'>
                Super Plus 
                </div>
                <div className="uppercase mt-3 mb-3 font-bold text-sm text-gray-400">
                    Sales
                </div>
                <div className='space-x-1 lg:space-x-3 xlg:space-x-3 md:space-x-3'>
                    <span className="font-bold text-3xl">$340</span>
                    <span className="bg-green-500 text-white p-1 rounded-full text-sm font-bold align-text-top">+28%</span>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Cards