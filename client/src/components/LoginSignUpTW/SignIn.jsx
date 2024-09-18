import React, { useState } from 'react'
import { BsMortarboardFill, BsRouterFill, BsXCircleFill } from "react-icons/bs";
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

    const [ErrorMsg, SetErrorMsg] = useState("")

    const CloseError = () => {
        SetErrorMsg("")
    }


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
                // navigate('/Dashboard/Summary')
                // login user Email 
                secureLocalStorage.setItem('Login1', res.data.Result.email)
                secureLocalStorage.setItem('Login2', res.data.Result.Role)      
                const CheckActive = res.data.Result.Status

                if(res.data.Result.Role === "User" && CheckActive === "Active"){
                    navigate('/Dashboard/Summary')  
                }
                if(res.data.Result.Role === "SuperAdmin"){
                    navigate('/Dashboard/Home')
                }
            }
            else{
                SetErrorMsg(res.data.Error)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    

    return (
        <div className="bg-white w-full">
            <div className="md:grid grid-cols-3 gap-3 md:my-[10%] my-[30%]">
                <div className=""></div>
                <div className="md:mx-0 mx-4">
                    <div className="">
                        <h1 className="mb-2 mt-6 font-semibold text-center text-2xl">Welcome to InternetService</h1>
                        <p className="text-xl text-gray-500 text-center">To Continue, SignIn Here</p>

                        {
                            (() => {
                                if(ErrorMsg === ""){
                                    return (
                                        <div className=""></div>
                                    )
                                }
                                else{
                                    return (
                                        <div className="">
                                            <div className="bg-red-500/20 my-4 px-8 flex justify-between rounded-md">
                                                <p className="py-4  text-red-800 font-semibold">Error: {ErrorMsg}</p>
                                                <p className="pt-4"><BsXCircleFill className='h-6 w-auto text-red-800 cursor-pointer' onClick={CloseError}/></p>
                                            </div>
                                        </div>
                                    )
                                }
                            })()
                        }



                        <form onSubmit={headleSubmit} className='my-8'>
                            <div className="my-3 ">
                                <label htmlFor="" className='text-gray-800 font-semibold'>Email : </label>
                                <input type="email" name=""  className="text-gray-500 w-full h-12 pl-2 rounded bg-gray-200/80" required placeholder='Enter Email Address'
                                onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                            </div>
                            <div className="my-3 ">
                                <label htmlFor="" className='text-gray-800 font-semibold'>Password : </label>
                                <input type="password" name=""  className="text-gray-500 w-full h-12 pl-2 rounded bg-gray-200/80" required placeholder='Enter Password' 
                                onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                            </div>
                            <div className="my-2 ">
                                <button type='submit' className='mt-8 font-semibold w-full py-4 px-8 rounded bg-blue-500 text-white shadow-md duration-500 hover:bg-blue-600'>SignIn</button>
                            </div>
                        </form>
                        <div className="flex justify-between">
                            <div className="">
                                <h1 className="text-blue-800 font-semibold">Forget Password</h1>
                            </div>

                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}

export default SignIn