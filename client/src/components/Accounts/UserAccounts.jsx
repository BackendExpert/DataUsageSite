import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserAccounts = () => {
    const [AccountData, SetAccountData] = useState([])
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const res = axios.get(import.meta.env.VITE_APP_API + '/userAcc/ViewAllAccounts')
        .then(res => {
            SetAccountData(res.data.Result)
            setFilteredData(res.data.Result)
        })
        .catch(err => console.log(err))
    }, [])

    const [searchTerm, setSearchTerm] = useState('');


    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        if (AccountData.length >= 3) {
          setFilteredData(
            AccountData.filter((item) =>
              item.email.startsWith(AccountData)
            )
          );
        } else {
          setFilteredData(AccountData);
        }
    };

  return (
    <div>
        <h1 className="text-xl font-seimbold text-[#1F2B3C]">User Accounts</h1>

        <div className="my-2">
            <a href="NewAccount">
                <button className='bg-blue-500 text-white rounded py-2 px-4'>
                    Add New Account
                </button>
            </a>
        </div>

        <div className="my-4 ">
            <input
                type="text"
                placeholder="Search by account number"
                value={searchTerm}
                onChange={handleSearch}
                className="mb-4 p-2 border border-gray-300 rounded-md w-full"
            />
            <table className='bg-white rounded-t-md  border-tools-table-outline border-black border-1 w-full'>
                <thead className='h-12 border-b text-left bg-gray-100'>
                    <tr className='text-gray-500'>
                        <th className='md:table-cell hidden pl-4 font-semibold rounded-tl-sm'>Email</th>
                        <th className='md:table-cell hidden pl-4'>Account</th>
                        <th className='md:table-cell hidden pl-4'>Status</th>
                        <th className='md:table-cell hidden pl-4'>User Type</th>
                        <th className='table-cell md:hidden pl-4'>Account Info</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.map((item, index) => {
                            return (
                                <tr className='h-10 text-sm border-b border-gray-200' key={index}>
                                    <td className='md:table-cell hidden pl-4 font-semibold rounded-tl-sm'>{item.email}</td>
                                    <td className='md:table-cell hidden pl-4'>{item.AccNo}</td>
                                    <td className='md:table-cell hidden pl-4'>
                                        {
                                            (() => {
                                                if(item.Status === "Active"){
                                                    return(
                                                        <p className="text-green-500 font-bold">Active</p>
                                                    )
                                                }
                                                else{
                                                    return(
                                                        <p className="text-red-500 font-bold">Deactive</p>
                                                    )
                                                }
                                            })()
                                        }
                                    </td>
                                    <td className='md:table-cell hidden pl-4 font-bold text-blue-500'>
                                        {
                                            (() => {
                                                if(item.Role === "SuperAdmin"){
                                                    return(
                                                        <p className="text-red-500 font-bold">SuperAdmin</p>
                                                    )
                                                }
                                                else if(item.Role === "User"){
                                                    return(
                                                        <p className="text-blue-500 font-bold">User</p>
                                                    )
                                                }
                                            })()
                                        }
                                    </td>
                                    <td className='table-cell md:hidden pl-4'>
                                        <div className="my-2">
                                            <p className="">Email : {item.email}</p>
                                            <p className="">Account : {item.AccNo}</p>
                                            <p className="">Status : 
                                            {
                                                (() => {
                                                    if(item.Status === "Active"){
                                                        return(
                                                            <p className="text-green-500 font-bold">Active</p>
                                                        )
                                                    }
                                                    else{
                                                        return(
                                                            <p className="text-red-500 font-bold">Deactive</p>
                                                        )
                                                    }
                                                })()
                                            }
                                            </p>
                                            <p className="">Role : 
                                            {
                                                (() => {
                                                    if(item.Role === "SuperAdmin"){
                                                        return(
                                                            <p className="text-red-500 font-bold">SuperAdmin</p>
                                                        )
                                                    }
                                                    else if(item.Role === "User"){
                                                        return(
                                                            <p className="text-blue-500 font-bold">User</p>
                                                        )
                                                    }
                                                })()
                                            }
                                        </p>
                                        </div>
                                    </td>
                                    <td>
                                        <a href={'AccountData/' + item.email } className='text-blue-500 underline font-bold'>
                                            View
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserAccounts