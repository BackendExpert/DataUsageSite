import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import './Style.css'
import DashNav from './DashNav';
import DashRightSide from './DashRightSide';
import DashNavAdmin from './Admin/DashNavAdmin';
import DashSide from './Admin/DashSide';

const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const logout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload();
    }

    if(RoleUser !== null && EmailUser !== null){
        if(RoleUser === "SuperAdmin"){
            return (
                <div className="bg-gray-200 w-full min-h-screen">
                    <div className="md:flex">
                        <div className="w-1/5 fixed">
                            <DashSide />
                        </div>
                        <div className="md:w-full md:ml-[270px]">
                            <DashNavAdmin />
                            <div className="py-4 px-6">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else if(RoleUser === "User"){
            return (
                <div className="min-h-screen bg-[#0f3b7a] dashContainer w-full">
                    <div className="md:flex">
                        <div className="md:w-3/4">
                            <DashNav />
                            <Outlet />
                        </div>
                        <div className="md:w-1/4 md:pl-2">
                            <DashRightSide />
                        </div>
                    </div>
                    <h1 className="font-semibold text-white">This Site is developed only for Educational Purpuses <p onClick={logout}>LogOut</p></h1>
                </div>
            )
        }
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/')
        })
    }
}

export default Dashboard