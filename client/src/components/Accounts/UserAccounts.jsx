import React from 'react'

const UserAccounts = () => {
  return (
    <div>
        <h1 className="text-xl font-seimbold text-[#1F2B3C]">User Accounts</h1>

        <div className="my-2">
            <a href="">
                <button className='bg-blue-500 text-white rounded py-2 px-4'>
                    Add New Account
                </button>
            </a>
        </div>

        <div className="my-4 ">
            <table className='bg-white rounded-t-md  border-tools-table-outline border-black border-1 w-full'>
                <thead className='h-12 border-b text-left bg-gray-100'>
                    <tr className='text-gray-500'>
                        <th className='md:table-cell hidden pl-4 font-semibold rounded-tl-sm'>Email</th>
                        <th className='md:table-cell hidden pl-4'>Account</th>
                        <th className='md:table-cell hidden pl-4'>Status</th>
                        <th className='table-cell md:hidden pl-4'>Account Info</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='h-10 text-sm'>
                        <td className='md:table-cell hidden pl-4 font-semibold rounded-tl-sm'>123@123.com</td>
                        <td className='md:table-cell hidden pl-4'>0812377305</td>
                        <td className='md:table-cell hidden pl-4 font-bold text-green-500'>Active</td>
                        <td className='table-cell md:hidden pl-4'>
                            <div className="my-2">
                                <p className="">Email : 123@123.com</p>
                                <p className="">Account : 0812377305</p>
                                <p className="">Status : <span className="text-green-500 font-bold">Active</span></p>
                            </div>
                        </td>
                        <td>
                            <a href="" className='text-blue-500 underline font-bold'>
                                View
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserAccounts