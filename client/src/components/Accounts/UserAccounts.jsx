import React, { useState } from 'react'

const UserAccounts = () => {

    const data = [
        {email: "jehan@123.com", AccNo: '12345611', Status: "Active", UserType: "User"},
        {email: "kmaml@123.com", AccNo: '12345232', Status: "Active", UserType: "User"},
        {email: "asd@123.com", AccNo: '0812377305', Status: "Active", UserType: "User"},
        {email: "dd@123.com", AccNo: '12323453', Status: "Active", UserType: "User"},
        {email: "ss@123.com", AccNo: '55588811', Status: "Active", UserType: "User"},
        {email: "jeaaahan@123.com", AccNo: '34545646', Status: "Active", UserType: "User"}        
    ]

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    
        if (value.length >= 3) {
          setFilteredData(
            data.filter((item) =>
              item.AccNo.startsWith(value)
            )
          );
        } else {
          setFilteredData(data);
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
                                    <td className='md:table-cell hidden pl-4 font-bold text-green-500'>{item.Status}</td>
                                    <td className='md:table-cell hidden pl-4 font-bold text-blue-500'>{item.UserType}</td>
                                    <td className='table-cell md:hidden pl-4'>
                                        <div className="my-2">
                                            <p className="">Email : 123@123.com</p>
                                            <p className="">Account : 0812377305</p>
                                            <p className="">Status : <span className="text-green-500 font-bold">Active</span></p>
                                            <p className="">Status : <span className="text-blue-500 font-bold">User</span></p>
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