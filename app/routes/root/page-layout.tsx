import { useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
    const navigate=useNavigate();
 const handleLogout =async () =>{
    await logoutUser();
    navigate('/sign-in')
   }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='bg-gray-300 shadow-lg rounded-2xl p-8 w-80 text-center'>
        <h1 className='text-2xl font-bold mb-6 text-gray-800'>Welcome</h1>
        <div className='flex flex-col gap-4'>
        <button onClick={()=>{navigate('/dashboard')}} className='cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-xl
        shadow hover:bg-blue-700 transition duration-200'>Dashboard</button>

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