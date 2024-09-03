import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AccountData = () => {
    const {id} = useParams()
    const [AccData, SetAccData] = useState([])

    useEffect(() => {
        const res = axios.get(import.meta.env.VITE_APP_API + `/userAcc/ViewOneAccount/${id}`)
        .then(res => SetAccData(res.data.Result))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <h1 className="text-xl font-semibold text-gray-500">AccountData : {id} </h1>

        <div className="mt-4 bg-white rounded p-4 shadow-md">
            <table className='w-full'>
                <tr className='h-10 border-b border-gray-200'>
                    <td className=''>
                        <p className="text-gray-500 font-bold">Email Address : </p>
                    </td>
                    <td className=''>
                        <p className="text-gray-500">{id}</p>
                    </td>
                </tr>
                <tr className='h-10 border-b border-gray-200'>
                    <td className=''>
                        <p className="text-gray-500 font-bold">Account Number : </p>
                    </td>
                    <td className=''>
                        <p className="text-gray-500">{id}</p>
                    </td>
                </tr>
                <tr className='h-10 border-b border-gray-200'>
                    <td className=''>
                        <p className="text-gray-500 font-bold">Account Status : </p>
                    </td>
                    <td className=''>
                        <p className="text-gray-500">Active</p>
                    </td>
                </tr>
                <tr className='h-10 border-b border-gray-200'>
                    <td className=''>
                        <p className="text-gray-500 font-bold">Account Packages : </p>
                    </td>
                    <td className=''>
                        <p className="text-gray-500">Fiber, PeoTV</p>
                    </td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default AccountData