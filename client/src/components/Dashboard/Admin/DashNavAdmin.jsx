import React from 'react'
import { BsHouseFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"

const DashNavAdmin = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const logout = () => {
      localStorage.clear()
      navigate('/')
      window.location.reload()
    }


  return (
    <div className='bg-white w-full mt-1 text-[#1F2B3A] py-4 px-8'>
      <div className="md:flex justify-between">
        <div className="flex">
            <BsHouseFill className='h-6 w-auto'/>
            <p className="text-xl font-semibold pl-2">Dashboard</p>
        </div>
        <div className="flex">
          <p className="">{EmailUser} | </p>
          <p className="text-red-500 cursor-pointer" onClick={logout}>Logout</p>          
        </div>
      </div>
    </div>
  )
}

export default DashNavAdmin