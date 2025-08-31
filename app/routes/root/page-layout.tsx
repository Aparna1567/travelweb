import { useNavigate } from "react-router";
import {useState} from 'react';
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    const handleDashboard=()=>{
        setLoading(true);
        setTimeout(()=>{
            navigate('/dashboard')
        },1000);
    };
 const handleLogout =async () =>{
    await logoutUser();
    navigate('/sign-in')
   }

//    onClick={()=>{navigate('/dashboard')}}
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-gray-300 shadow-lg rounded-2xl p-8 w-80 text-center'>
        <h1 className='text-2xl font-bold mb-6 text-gray-800'>Welcome</h1>
        <div className='flex flex-col gap-4'>
        <button disabled={loading} onClick={handleDashboard} className='cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-xl
        shadow hover:bg-blue-700 transition duration-200'>
            {loading ? (
                <div className='flex items-center gap-2'>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className="opacity-75" fill="currentColor" d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'></path>
                    </svg>Loading...          
                </div>
            ) : (
                    "Dashboard"
            )}
            </button>

        <button
                        onClick={handleLogout}
                        className=" flex items-center gap-2 px-4 py-2 bg-green-400 text-white rounded-xl
        shadow hover:bg-green-700 transition duration-200 cursor-pointer "
                    >
                        <img
                            src="/assets/icons/logout.svg"
                            alt="logout"
                            className="size-6 cursor-pointer"
                        /> 
                        <p className=''>Logout</p>
                    </button>
                    </div>
        </div>
    </div>
  )
}

export default PageLayout