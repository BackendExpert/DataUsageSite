import React, { useState } from 'react'
import { BsMortarboardFill, BsRouterFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";
import './style.css'

const SignIn = () => {
    const navigate = useNavigate()
    // for login data
    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = async (e) => {
        e.preventDefault();

        // login to system

        try{
            const res = await axios.post('http://localhost:5000/auth/SignIn', LoginData)

            const loginToken = res.data.Token;

            //store token in localstorage
            localStorage.setItem('LoginToken', loginToken)

            if(res.data.Status === "Success"){
                alert("Login Successfull")
                localStorage.setItem('token', res.data.Token)
                navigate('/Dashboard/Summary')
                // login user Email 
                secureLocalStorage.setItem('Login1', res.data.Result.email)
                secureLocalStorage.setItem('Login2', res.data.Result.Role)      
            }
            else{
                alert(res.data.Error)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-[#0b2a58] min-h-screen w-full">
            <div className="containerLogin">
                <div className="imageDiv md:block hidden">
                    <img src="https://wallpapers.com/images/high/data-fingerprint-system-brahlfrli6ga8qlt.webp" alt="" className='imageLogin'/>
                </div>
                <div className="viewForm">
                    <div className="flex">
                        <BsRouterFill className='h-12 w-auto text-green-500 ml-2'/>
                        <h1 className="ml-2 text-2xl text-white font-semibold pt-1">Internet Provider</h1>
                    </div>
                    <hr />
                    <div className="">
                        <h1 className="mb-2 mt-6 text-xl font-semibold text-white">SignIn</h1>
                        <form onSubmit={headleSubmit} className='my-4'>
                            <div className="my-3 ">
                                <label htmlFor="" className='text-white'>Email : </label>
                                <input type="email" name="" id="" className="text-white w-full h-12 pl-2 rounded bg-blue-700/40" required placeholder='Enter Email Address'
                                onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                            </div>
                            <div className="my-3 ">
                                <label htmlFor="" className='text-white'>Password : </label>
                                <input type="password" name="" id="" className="text-white w-full h-12 pl-2 rounded bg-blue-700/40" required placeholder='Enter Password' 
                                onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                            </div>
                            <div className="my-2 ">
                                <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-blue-500 text-white shadow-md duration-500 hover:bg-blue-600'>SignIn</button>
                            </div>
                        </form>
                    </div>
                    <div className="">
                        <h1 className="text-white">Don't have Account ? <a href="SignUp" className='text-blue-400'>Register</a></h1>
                    </div>        
                    <h1 className="text-white mt-4 font-semibold">This site is developed only for Educational Purposes</h1>            
                </div>

            </div>
        </div>
    )
}

export default SignIn