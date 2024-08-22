import React from 'react'
import { BsMegaphoneFill, BsPhoneFill, BsRouterFill, BsTelephoneFill, BsTvFill } from 'react-icons/bs'

const DashNav = () => {
    const DashNavUp = [
        {name: "BroadBand", Icon: <BsRouterFill className='text-green-500 md:h-8 h-6 w-auto'/>, Link: "Summary"},
        {name: "PEOTV", Icon: <BsTvFill className='text-green-500 md:h-8 h-6 w-auto'/>, Link: "PeoTv"},
        {name: "Voice", Icon: <BsTelephoneFill className='text-green-500 md:h-8 h-6 w-auto'/>, Link: ""},
        {name: "Mobile", Icon: <BsPhoneFill className='text-green-500 md:h-8 h-6 w-auto'/>, Link: ""},
        {name: "Promosion", Icon: <BsMegaphoneFill className='text-green-500 md:h-8 h-6 w-auto'/>, Link: ""},       
    ]
  return (
    <div>
        <div className="grid grid-cols-5 gap-2">
            {
                DashNavUp.map((DashData, index) => {
                    return (
                        <a href={DashData.Link} className="">
                            <div className="bg-blue-600 md:py-8 md:px-8 py-2 rounded-xl mb-4">
                                <div className="md:flex">
                                    {/* {DashData.Icon} */}
                                    <p className="md:block hidden text-white text-xl font-semibold pl-2 pt-1">{DashData.name}</p>
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