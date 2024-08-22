import React, { useState } from 'react'
import DashSummary from './DashSummary'
import PackageInfo from './PackageInfo'
import UsageData from './SummaryData/UsageData'
import ExtraGBUse from './SummaryData/ExtraGBUse'

const SummaryData = () => {
    const [ClickedValue, SerClickedValue] = useState(0)

    const DivClick = (BtnValue) => {
        SerClickedValue(BtnValue)
    }

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
            <div className='md:w-1/3 mr-2 md:block grid grid-cols-2 gap-2'>
                {
                    SummarySideData.map((data, index) => {
                        return (
                            <div onClick={() => DivClick(data.BtnValue)} className="w-full bg-blue-600 p-4 rounded md:mr-1 mb-2 text-white cursor-pointer" key={index}>
                                <p className="text-xl font-semibold text-center">{data.name}</p>
                                <p className="text-center mt-2">{data.value}</p>
                            </div>  
                        )
                    })
                }
            </div>
            <div className="w-full bg-blue-600 p-4 rounded ml-1">
                {
                    (() => {
                        if(ClickedValue === 0){
                            return (
                                <UsageData />
                            )
                        }
                        else if(ClickedValue === 1){
                            return (
                                <ExtraGBUse />
                            )
                        }
                    })()
                }
            </div>
        </div>
    </div>
  )
}

export default SummaryData