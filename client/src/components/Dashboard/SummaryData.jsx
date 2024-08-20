import React from 'react'
import DashSummary from './DashSummary'
import PackageInfo from './PackageInfo'

const SummaryData = () => {
    const SummarySideData = [
        {name: "My Package", BtnValue: 0, value: "96.4 used from 100.00 GB"},
        {name: "Extra GB", BtnValue: 1, value: "0.9 used from 15.0 GB"},        
        {name: "Bonus Data", BtnValue: 2, value: "1.3 used from 1.3 GB"},        
        {name: "Add-Ons Data", BtnValue: 3, value: "6.3 used from 15.0 GB"},
        {name: "Free Data", BtnValue: 4, value: "N/A"},
        
    ]
  return (
    <div>
        <DashSummary />
        <PackageInfo />

        <div className="md:flex my-2">
            <div className='w-1/3 mr-2'>
                {
                    SummarySideData.map((data, index) => {
                        return (
                            <div className="w-full bg-blue-600 p-4 rounded mr-1 mb-2 text-white cursor-pointer" key={index}>
                                <p className="text-xl font-semibold text-center">{data.name}</p>
                                <p className="text-center mt-2">{data.value}</p>
                            </div>  
                        )
                    })
                }
            </div>
            <div className="w-full bg-blue-600 p-4 rounded ml-1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam cum aspernatur accusantium, hic enim numquam, sit repellat ab, nam consequuntur minus corrupti modi commodi quia qui aliquid earum repudiandae blanditiis?
            </div>
        </div>
    </div>
  )
}

export default SummaryData