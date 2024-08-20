import React from 'react'
import DashSummary from './DashSummary'

const SummaryData = () => {
  return (
    <div>
        <DashSummary />
        <div className="md:grid grid-cols-2 gap-2 mt-2">
            <div className="p-4 bg-blue-600 my-2 rounded ">
                <div className="md:flex justify-between" >
                    <div className="text-white w-full">
                        <h1 className="font-semibold">Package : WEB FAMILY PLUS</h1>
                        <h1 className="font-semibold">Status : Active</h1>
                        <h1 className="font-semibold">Username : 94 812377305</h1>
                    </div>
                    <button className="bg-blue-700 w-full text-center rounded-xl shadow-md text-white font-semibold md:py-0 py-2 md:mt-0 mt-2">
                        Package Upgrade
                    </button>
                </div>
            </div>
            <div className="p-4 bg-blue-600 my-2 rounded ">
                <div className="flex">
                    <button className="bg-blue-700 w-full text-center rounded-xl shadow-md text-white font-semibold h-full py-6 mr-2">
                        Get Extra DB
                    </button>
                    <button className="bg-blue-700 w-full text-center rounded-xl shadow-md text-white font-semibold h-full py-6 ml-2">
                        Get Data Add-ons
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SummaryData