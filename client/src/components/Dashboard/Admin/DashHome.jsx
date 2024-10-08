import React, { useState } from 'react'
import UsersImg from '../../../assets/Users.png'
import UsersRequestImg from '../../../assets/UserRequest.png'
import Income from '../../../assets/Income.png'
import DataUsage from '../../../assets/DataUsage.png'
import { BsCaretUpFill } from 'react-icons/bs'

const DashHome = () => {
    const DashData = [
      {
        id: 1,
        img: UsersImg,
        text1: 'User Accouts',
        text1Value: 900,
        text2: 'Today',
        text2Value: '12',
        text3: 'Rate',
        text3Value: '12.23 %',
        bgColor: 'bg-[#56AAB3]'
      },
      {
        id: 2,
        img: UsersRequestImg,
        text1: 'User Requests',
        text1Value: 900,
        text2: 'Today',
        text2Value: '12',
        text3: 'Rate',
        text3Value: '12.23 %',
        bgColor: 'bg-[#D75B56]'
      },
      {
        id: 3,
        img: DataUsage,
        text1: 'Data Usage',
        text1Value: "GB",
        text2: 'Today',
        text2Value: '12',
        text3: 'Rate',
        text3Value: '12.23 %',
        bgColor: 'bg-[#20a7db]'
      },
      {
        id: 4,
        img: Income,
        text1: 'Income',
        text1Value: "$",
        text2: 'Today',
        text2Value: '12',
        text3: 'Rate',
        text3Value: '12.23 %',
        bgColor: 'bg-[#1F2B3C]'
      },
    ]

    const DashTableData = [
        {id: 1, name: "User Requests", BtnValue: 0},
        {id: 2, name: "User Accounts", BtnValue: 1},
        {id: 3, name: "User Requests", BtnValue: 2},        
    ]

    const [ValueClicked, SetValueClicked] = useState(0)

    const ClickedValue = (Value) => {
        SetValueClicked(Value)
    }
  return (
    <div>
        <h1 className="text-xl font-seimbold text-[#1F2B3C]">Dashboard</h1>

        <div className="md:grid grid-cols-4 gap-4">
            {
                DashData.map((data, index) => {
                    return (
                        <div className={`py-4 px-6 rounded shadow-md md:my-0 my-2 ${data.bgColor}`} key={index}>
                            <div className="flex">
                                <div className="">
                                    <img src={data.img} alt="" />
                                </div>
                                <div className=" pt-2">
                                    <p className="text-sm text-white font-semibold">{data.text1}</p>
                                    <p className="text-4xl text-white text-center pt-2">{data.text1Value}</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">
                                    <p className="text-white">{data.text2}</p>
                                    <p className="text-white text-center">{data.text2Value}</p>
                                </div>
                                <div className="">
                                    <p className="text-white">{data.text3}</p>
                                    <p className="text-white">{data.text3Value}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>

        <div className="">
            <div className="md:flex">
                <div className="md:w-1/3 md:pb-2 my-4 md:mr-2">
                    <div className="py-2 px-3 bg-white rounded shadow-md mb-2">
                        <BsCaretUpFill className='text-[#56AAB3] h-16 w-full'/>

                        <p className="text-center font-semibold text-gray-800">Last Month Income</p>

                        <div className="text-center text-[#56AAB3] text-4xl py-4">
                            55.23%
                        </div>
                    </div>
                    <div className="py-2 px-3 bg-white rounded shadow-md mb-2">
                        ahsjkdhajksdhkj 
                    </div>
                </div>
                <div className="w-full bg-white rounded shadow-md py-2 px-4 my-4 md:ml-2">
                    <div className="flex justify-between mx-2 my-2">
                        {
                            DashTableData.map((dataDash, index) => {
                                return (
                                    <div className="cursor-pointer font-semibold text-blue-500" key={index} onClick={() => ClickedValue(dataDash.BtnValue)}>
                                        {dataDash.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr />

                    <div className="">
                        {
                            (() => {
                                if(ValueClicked === 0){
                                    return (
                                        <div className="">
                                            <div className="rounded-lg border my-4">
                                                <table className='w-full'>
                                                    <thead className="">
                                                        <tr className='h-8 bg-[#56AAB3] text-white'>
                                                            <th className='md:table-cell hidden'>Request From</th>
                                                            <th className='md:table-cell hidden'>Request At</th>
                                                            <th className='md:table-cell hidden'>Request For</th>
                                                            <th className='md:hidden table-cell'>Request Data</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className='h-14 bg-white text-[1F2B3C] border-b border-gray-200 text-gray-500'>
                                                            <td className='md:table-cell hidden pl-4 font-semibold text-blue-500'>jehan@123.com</td>
                                                            <td className='md:table-cell hidden pl-4'>12:30 / 07/09/2024</td>
                                                            <td className='md:table-cell hidden pl-4'>Requesting for Voice Line</td>
                                                            <td className='md:hidden table-cell pl-4'>
                                                                <div className="my-2">
                                                                    <p className=''>Email: jehan@123.com</p>
                                                                    <p className="">At: <span className='text-red-500'>12:30 / 07/09/2024</span></p>
                                                                    <p className="">For: Requesting for Voice Line</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <a href='' className="underline text-blue-600 font-semibold">Check</a>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )
                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashHome