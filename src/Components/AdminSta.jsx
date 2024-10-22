import './AminSta.css'
import { UserIcon } from '@heroicons/react/24/solid';
const AdminSta = () => {
    return(
        <div className="bg-white rounded-[19.88px] px-[27px] pt-[45px]">
    
            <div className="grid grid-cols-1 gap-[45px] w-full mx-auto sm:grid-cols-3 max-w-[1002px] relative">
            <div className="bg-gold-200 flex flex-col h-40 rounded-[15px] pl-6 pt-6">
                <div className="flex justify-between h-full"> 
                    <div className="flex relative"> 
                        <UserIcon className="users h-6 w-6 text-gold-200 z-10" />
                        <UserIcon className="user absolute h-6 w-6 opacity-50 shadow-lg transform translate-x-1.5" />
                        <span className='text ml-2'>Fans</span>
                    </div>
                    <span className='text2 ml-4 pr-7'>Online: <span className='text font-bold'>5K</span></span>
                </div>
                <div className="text3 -mt-20 font-extrabold "> 
                    10,000
                </div>
                
                <div className="flex items-center">
                    <span className="text font-thin">Active:</span>
                    <span className="mx-2">8020</span>
                    <span className="text text-sm leading-none mx-1">|</span>
                    <span className="text ml-2 font-thin">Inactive:</span>
                    <span className="ml-2">1980</span>
                </div>
            </div>
            <div className="bg-gold-200 flex flex-col h-40 rounded-[15px] pl-6 pt-6">
                <div className="flex justify-between h-full"> 
                    <div className="flex relative"> 
                        <UserIcon className="users h-6 w-6 text-gold-200 z-10" />
                        <UserIcon className="user absolute h-6 w-6 opacity-50 shadow-lg transform translate-x-1.5" />
                        <span className='text ml-2'>Celebrities</span>
                    </div>
                    <span className='text2 ml-4 pr-7'>Online: <span className='text font-bold'>200</span></span>
                </div>
                <div className="text3 -mt-20 font-extrabold "> 
                    900
                </div>
                
                <div className="flex items-center">
                    <span className="text font-thin">Active:</span>
                    <span className="mx-2">900</span>
                    <span className="text text-sm leading-none mx-1">|</span>
                    <span className="text ml-2 font-thin">Inactive:</span>
                    <span className="ml-2">0</span>
                </div>
            </div>
            <div className="bg-gold-200 flex flex-col h-40 rounded-[15px] pl-6 pt-6">
                <div className="flex justify-between h-full"> 
                    <div className="flex relative"> 
                        <UserIcon className="users h-6 w-6 text-gold-200 z-10" />
                        <UserIcon className="user absolute h-6 w-6 opacity-50 shadow-lg transform translate-x-1.5" />
                        <span className='text ml-2'>NGO'S</span>
                    </div>
                    <span className='text2 ml-4 pr-7'>Online: <span className='text font-bold'>2</span></span>
                </div>
                <div className="text3 -mt-20 font-extrabold "> 
                    10
                </div>
                
                <div className="flex items-center">
                    <span className="text font-thin">Active:</span>
                    <span className="mx-2">10</span>
                    <span className="text text-sm leading-none mx-1">|</span>
                    <span className="text ml-2 font-thin">Inactive:</span>
                    <span className="ml-2">0</span>
                </div>
            </div>
            </div>
            
            
            <div className="grid grid-cols-1 gap-[45px] w-full mx-auto sm:grid-cols-3 max-w-[1002px] mt-8"> 
                <div className="border border-[1px] rounded-[20px] flex h-40 pl-6 pt-6">
                    <div className="flex flex-col items-start">
                    <span className="text3 text-gray-500">Wallet</span>
                    <span className="text3 text-gray-500 -mt-2">Balance (NGN)</span>
                    <span className='text mt-6'>NGN1,000,000,000.00</span>
                    </div>
                </div>
                <div className="border border-[1px] rounded-[20px] flex h-40 pl-6 pt-6">
                    <div className="flex flex-col items-start">
                    <span className="text3 text-gray-500">Wallet</span>
                    <span className="text3 text-gray-500 -mt-2">Balance ($)</span>
                    <span className='text mt-6'>$10,000</span>
                    </div>
                </div>
                <div className="border border-[1px] rounded-[20px] flex h-40 pl-6 pt-6">
                    <div className="flex flex-col items-start">
                    <span className="text3 text-gray-500">Total platform</span>
                    <span className="text3 text-gray-500 -mt-2">Requests</span>
                    <span className='text mt-6'>10,000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminSta