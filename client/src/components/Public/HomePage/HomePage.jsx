import React from 'react'
import InternetImg from '../../../assets/Internet.png'
import Packages from './Packages'

const HomePage = () => {
  return (
    <div className="md:mx-24 mx-8">
        <div className="md:flex  md:my-[10%] my-[30%]">
            <div className="w-full">
                <h1 className="text-4xl">
                    <span>Best</span>
                    <span className='font-semibold text-[#536DFE]'> Internet </span>
                    <span>Services</span>                   
                </h1>

                <p className="my-4 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis architecto fugit voluptas iusto consectetur. Repudiandae ex maxime consequatur cupiditate ut alias placeat tempora nemo? Vero ut voluptates inventore sunt.
                </p>

                <a href="">
                    <button className='bg-[#536DFE] py-4 px-8 rounded-full text-white font-semibold my-4'>Packages</button>
                </a>
                
            </div>
            <div className="w-full  md:block hidden">
                <center>
                    <img src={InternetImg} alt="" className='h-80 w-auto'/>
                </center>
            </div>
        </div>

        <div className="my-8">
            <Packages />
        </div>
    </div>
  )
}

export default HomePage