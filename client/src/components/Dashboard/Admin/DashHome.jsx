import React from 'react'
import UsersImg from '../../../assets/Users.png'

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
        img: UsersImg,
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
        img: UsersImg,
        text1: 'User Accouts',
        text1Value: 900,
        text2: 'Today',
        text2Value: '12',
        text3: 'Rate',
        text3Value: '12.23 %',
        bgColor: 'bg-[#20a7db]'
      },
      {
        id: 4,
        img: UsersImg,
        text1: 'User Accouts',
        text1Value: 900,
        text2: 'Today',
        text2Value: '12',
        text3: 'Rate',
        text3Value: '12.23 %',
        bgColor: 'bg-[#1F2B3C]'
      },
    ]
  return (
    <div>
        <h1 className="text-xl font-seimbold text-[#1F2B3C]">Dashboard</h1>

        <div className="md:grid grid-cols-4 gap-4">
            {
                DashData.map((data, index) => {
                    return (
                        <div className={`py-4 px-6 rounded shadow-md ${data.bgColor}`} key={index}>
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
    </div>
  )
}

export default DashHome