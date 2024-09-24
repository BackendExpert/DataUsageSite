import React from 'react'



const Navbar = () => {
  return (
    <div className='w-full bg-white shadow-md py-6 md:px-16 px-8'>
        <div className="md:flex justify-between">
            <div className="">
                <h1 className="uppercase font-semibold text-[#6C63FF]">Internet Service</h1>
            </div>
            <div className="">
                <a href="/SignIn">
                  <h1 className="uppercase font-semibold text-[#6C63FF]">Login</h1>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navbar