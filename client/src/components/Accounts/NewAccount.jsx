import React, { useState } from 'react'

const NewAccount = () => {
    const [AccountData, SetAccountData] = useState({
        username: '',
        email: '',
        account: '',
        userType: '',
    })

    const headleSubmit = async (e) => {
        e.preventDefault();

        try{
            console.log(AccountData)
        }
        catch (err) {
            console.log(err)
        }

    }
  return (
    <div>
        <h1 className="text-gray-500 font-semibold">NewAccount</h1>

        <div className="mt-4 bg-white p-4 shadow-md rounded">
            <form onSubmit={headleSubmit} method="post">
                <div className="md:grid grid-cols-2 gap-4">
                    <div className="">
                        <input type="text" name="" id="" className="md:my-0 my-2 w-full h-10 bg-gray-200 rounded pl-2" placeholder='Username' required 
                        onChange={e => SetAccountData({...AccountData, username:e.target.value})}/>
                    </div>
                    <div className="">
                        <input type="email" name="" id="" className="md:my-0 my-2 w-full h-10 bg-gray-200 rounded pl-2" placeholder='Email' required 
                        onChange={e => SetAccountData({...AccountData, email:e.target.value})}/>
                    </div>
                    <div className="">
                        <input type="text" name="" id="" className="md:my-0 my-2 w-full h-10 bg-gray-200 rounded pl-2" placeholder='Account Number' required
                        onChange={e => SetAccountData({...AccountData, account:e.target.value})}/>
                    </div>
                    <div className="">
                        <select name="" id="" className='w-full h-10 bg-gray-200 rounded pl-2' 
                        onChange={e => SetAccountData({...AccountData, userType:e.target.value})}>
                            <option value="">Select User Type</option>
                            <option value="user">User</option>
                            <option value="SuperAdmin">SuperAdmin</option>                            
                        </select>
                    </div>
                </div>

                <input type="submit" value="Create Account" className='mt-4 bg-blue-500 text-white rounded py-2 px-4'/>
            </form>
        </div>
    </div>
  )
}

export default NewAccount