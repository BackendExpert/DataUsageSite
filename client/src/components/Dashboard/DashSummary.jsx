import React from 'react'

const DashSummary = () => {
    const SummaryData = [
      {name: "Summary", Link: "Summary"},
      {name: "Daily Usage", Link: "DailyUse"},
      {name: "Gift Data", Link: ""},
      {name: "History", Link: ""},
      {name: "Redeem Data", Link: ""},
      {name: "Happy Day", Link: ""},
      {name: "More", Link: ""},
    ]

  return (
    <div className=''>
      <div className="bg-blue-600 md:flex justify-between  rounded-xl border border-white/30">
        {
          SummaryData.map((data, index) => {
            return (
              <a href={data.Link}>
                <div className="text-center text-white py-2 px-4">{data.name}</div>
              </a>
            )
          })
        }
      </div>

    </div>
  )
}

export default DashSummary