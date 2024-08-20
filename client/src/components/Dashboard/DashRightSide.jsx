import React from 'react'
import { BsChatText, BsFileEarmarkPlusFill, BsFileText, BsGlobe, BsPhone } from 'react-icons/bs'

const DashRightSide = () => {
    const RightUpDash = [
        {name: "New Service", Icon: <BsFileEarmarkPlusFill className='text-green-500 h-6 w-auto'/>, Link: ""},
        {name: "Digital Life", Icon: <BsGlobe className='text-green-500 h-6 w-auto'/>, Link: ""},
        {name: "Hot Device", Icon: <BsPhone className='text-green-500 h-6 w-auto'/>, Link: ""},
        {name: "Bill", Icon: <BsFileText className='text-green-500 h-6 w-auto'/>, Link: ""},
        {name: "Complaints", Icon: <BsChatText className='text-green-500 h-6 w-auto'/>, Link: ""},
        {name: "More", Icon: "", Link: ""},        
    ]
  return (
    <div>
        <div className="bg-blue-600/60 rounded-xl shadow-md p-2">
                <div className="grid grid-cols-3 gap-2">
                    {
                        RightUpDash.map((data, index) => {
                            return (
                                <a href="">
                                    <div className="bg-blue-800 rounded py-2 text-center shadow-md" key={index}>
                                        <center><p className="mb-2">{data.Icon}</p></center>
                                        <p className="text-sm text-white">{data.name}</p>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
        </div>
    </div>
  )
}

export default DashRightSide