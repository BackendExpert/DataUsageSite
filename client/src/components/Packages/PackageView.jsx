import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PackageView = () => {
    const {id} = useParams()
    const [packageOneData, SetPackageOneData] = useState([])

    useEffect(() => {
      const res = axios.get(import.meta.env.VITE_APP_API + `/package/ViewOnPackge/${id}`)
      .then(res => SetPackageOneData(res.data.Result))
      .catch(err => console.log(err))
    }, [])
    
  return (
    <div>PackageInfo</div>
  )
}

export default PackageView