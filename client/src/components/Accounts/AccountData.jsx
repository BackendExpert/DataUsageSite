import React from 'react'
import { useParams } from 'react-router-dom'

const AccountData = () => {
    const {id} = useParams()
  return (
    <div>
        <h1 className="text-xl font-semibold text-gray-500">AccountData : {id} </h1>

        <div className="mt-4 bg-white rounded p-4 shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maiores, similique vero eum sed doloremque corporis blanditiis dicta ipsam eligendi quos non, debitis placeat. At officia omnis magni laborum ab!
        </div>
    </div>
  )
}

export default AccountData