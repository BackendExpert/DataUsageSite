import React from 'react'
import { BsMegaphoneFill, BsPhoneFill, BsRouterFill, BsTelephoneFill, BsTvFill } from 'react-icons/bs'

const DashNav = () => {
    const DashNavUp = [
        {name: "BroadBand", Icon: <BsRouterFill />, Link: ""},
        {name: "PEOTV", Icon: <BsTvFill />, Link: ""},
        {name: "Voice", Icon: <BsTelephoneFill />, Link: ""},
        {name: "Mobile", Icon: <BsPhoneFill />, Link: ""},
        {name: "Promosion", Icon: <BsMegaphoneFill />, Link: ""},       
    ]
  return (
    <div>
        <div className="md:grid grid-cols-5 gap-2">
            {
                DashNavUp.map((DashData, index) => {
                    return (
                        <div className="">
                            {DashData.name}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DashNav