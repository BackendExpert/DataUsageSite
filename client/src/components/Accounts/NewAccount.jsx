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
    <div>NewAccount</div>
  )
}

export default NewAccount