import React, { useState } from 'react'

const NewAccount = () => {
    const [AcoountData, SerAccountData] = useState({
        username: '',
        email: '',
        account: '',
        userType: '',
    })

    const headleSubmit = async (e) => {
        e.preventDefault();

        try{

        }
        catch (err) {
            console.log(err)
        }

    }
  return (
    <div>
        <h1 className="text-gray-500 font-semibold">NewAccount</h1>

        <div className="mt-4">
            <form onSubmit={headleSubmit} method="post">
                
            </form>
        </div>
    </div>
  )
}

export default NewAccount