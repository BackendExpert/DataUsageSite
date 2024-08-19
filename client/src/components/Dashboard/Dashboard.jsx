import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import './Style.css'
import DashNav from './DashNav';
import DashRightSide from './DashRightSide';

const Dashboard = () => {
    const navigate = useNavigate()
    const RoleUser = secureLocalStorage.getItem("Login1");
    const EmailUser = secureLocalStorage.getItem("Login2");

    const logout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload();
    }

    if(RoleUser !== null && EmailUser !== null){
        return (
            <div className="min-h-screen bg-[#0f3b7a] dashContainer w-full">
                <div className="md:flex">
                    <div className="w-3/4">
                        <DashNav />
                    </div>
                    <div className="w-1/4 pl-2">
                        <DashRightSide />
                    </div>
                </div>

                <div className="w-full bg-[#0e1c34] p-6 rounded-lg ">

                    <hr />

                    <div className="my-4 mx-8">
                        <p className="text-xl text-gray-500">Email : { EmailUser }</p>
                        <p className="text-xl text-gray-500">Role: { RoleUser }</p>                        
                    </div>
                    <button onClick={logout} className="bg-red-500 text-white rounded py-2 px-4 shadow-md duration-500 hover:bg-red-600 font-semibold">Logout</button>
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        })
    }
}

export default Dashboard