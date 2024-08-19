import React from 'react'
import { BsMegaphoneFill, BsPhoneFill, BsRouterFill, BsTelephoneFill, BsTvFill } from 'react-icons/bs'

const DashNav = () => {
    const DashNavUp = [
        {name: "BroadBand", Icon: <BsRouterFill className='text-green-500 h-8 w-auto'/>, Link: "Summary"},
        {name: "PEOTV", Icon: <BsTvFill className='text-green-500 h-8 w-auto'/>, Link: "PeoTv"},
        {name: "Voice", Icon: <BsTelephoneFill className='text-green-500 h-8 w-auto'/>, Link: ""},
        {name: "Mobile", Icon: <BsPhoneFill className='text-green-500 h-8 w-auto'/>, Link: ""},
        {name: "Promosion", Icon: <BsMegaphoneFill className='text-green-500 h-8 w-auto'/>, Link: ""},       
    ]
  return (
    <div>
        <div className="md:grid grid-cols-5 gap-2">
            {
                DashNavUp.map((DashData, index) => {
                    return (
                        <a href={DashData.Link} className="">
                            <div className="bg-blue-600 py-8 px-8 rounded-xl mb-4">
                                <div className="md:flex">
                                    {DashData.Icon}
                                    <p className="text-white text-xl font-semibold pl-2 pt-1">{DashData.name}</p>
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DashNav