import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsChevronUp, BsChevronDown, BsGearFill, BsList, BsSpeedometer2, BsX, BsPersonFill, BsPeople, BsWifi } from "react-icons/bs";
import axios from 'axios';

const DashSide = () => {
      const navigate = useNavigate()
      //curent login user
      // const EmailUser = secureLocalStorage.getItem("Login1");
      // const RoleUser = secureLocalStorage.getItem("Login2");

      const location = useLocation()

      const [isOpen, setIsOpen] = useState(false);
      const [submenuOpen, setSubmenuOpen] = useState({});

      // to open side menu only when mobile screen
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

      // to open submenu
      const toggleSubmenu = (id) => {
          setSubmenuOpen(prev => ({ ...prev, [id]: !prev[id] }));
      };

      const SideMenu = [
        {id: 1, name: "Dashboard", link: '/Dashboard/Home', icon: <BsSpeedometer2 className='h-5 w-auto'/>},
        {id: 2, name: "Accounts", link: '', icon: <BsPeople className='h-5 w-auto'/>, submenu: [
            {id: 1, name: "User Accounts ", link: '/Dashboard/AddProduct'},
            {id: 2, name: "Admin Accounts ", link: '/Dashboard/ManageProducts'},
            {id: 3, name: "New Admin Accounts ", link: '/Dashboard/ManageProducts'},
        ]}, 
        {id: 3, name: "Packages", link: '', icon: <BsWifi className='h-5 w-auto'/>, submenu: [
            {id: 1, name: "New Package ", link: '/Dashboard/AddProduct'},
            {id: 2, name: "Mange Packages ", link: '/Dashboard/ManageProducts'},
        ]}, 
        {id: 3, name: "Profile ", link: '/Dashboard/User', icon: <BsPersonFill className='h-5 w-auto'/>}, 
        {id: 4, name: "Settings", link: '/Dashboard/Settings', icon: <BsGearFill className='h-5 w-auto'/>},    
      ]


  return (
    <div className=''>
      <button className="md:hidden fixed top-4 right-4 z-50 bg-gray-800 text-[#DFDFDF] p-2 rounded font-semibold" onClick={toggleSidebar}>
          {
              !isOpen ? <BsList /> : <BsX />
          }
      </button>

      <div className={`md:min-w-74 md:max-w-64 w-full md:w-auto h-screen md:relative fixed overflow-auto top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
          <div className="">
              <div className="bg-[#1F2B3A] py-2 min-h-screen">
              {
                      SideMenu.map((menu) => {
                          const isActive = location.pathname === menu.link;

                          return (
                              <div key={menu.id}>
                                  <div 
                                      className={`my-2 duration-300 py-1 pl-6 px-4 pb-2 flex items-center justify-between cursor-pointer ${isActive ? 'bg-[#56AAB3]' : 'hover:bg-gray-900'}`}
                                      onClick={() => menu.submenu ? toggleSubmenu(menu.id) : navigate(menu.link)}
                                  >
                                      <div className="flex text-[#DFDFDF]">
                                          <div className="pt-1 pr-2">{menu.icon}</div>
                                          <div className="text-[#DFDFDF] pt-1">{menu.name}</div>
                                      </div>
                                      {menu.submenu && (
                                          <div className="text-[#DFDFDF]">
                                              {submenuOpen[menu.id] ? <BsChevronUp /> : <BsChevronDown />}
                                          </div>
                                      )}
                                  </div>
                                  {
                                      menu.submenu && submenuOpen[menu.id] && (
                                          <div className="">
                                              <div className="bg-white/10">
                                                  {menu.submenu.map((submenu) => (
                                                      <Link to={submenu.link} key={submenu.id}>
                                                          <div className={`my-1 duration-300 hover:bg-gray-800 py-1 px-4 text-[#DFDFDF] text-sm ${location.pathname === submenu.link ? 'bg-[#56AAB3]' : ''}`}>
                                                              <p className="pl-6">{submenu.name}</p>
                                                          </div>
                                                      </Link>
                                                  ))}
                                              </div>
                                          </div>
                                      )
                                  }
                              </div>
                          );
                      })
                  }
              </div>
          </div>
      </div>

      
  </div>
  )
}

export default DashSide