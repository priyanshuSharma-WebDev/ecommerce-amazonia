import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import {userSignUp} from "../../../Actions/user.auth.action"
import "./register.css"

const initialState = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
}

function Register({history,location}) {
    const [inputChange, setInputChange] = useState(initialState)
    const signUp = useSelector(state => state.signUp)
    const { loading = true, error = {}, userInfo = {} } = signUp
    const dispatch = useDispatch();

    const redirect = location.search ? location.search.split("=")[1] : '/signin'

    useEffect(() => {
        // if user had an error with register push to user back to signup route
        if (!(error && Object.keys(error).length === 0 && error.constructor === Object)) {
            return history.push("/signup")
        }
        // if user successfully register push  user to login page
        else if (!(userInfo && Object.keys(userInfo).length === 0 && userInfo.constructor === Object) && (error && Object.keys(error).length === 0 && error.constructor === Object)) {
            history.push("/signin")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading])

    const handleInputChange = (e) => {
        setInputChange({ ...inputChange, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(inputChange.password !== inputChange.confirm_password) {
            return alert("Invalid confirm password");
        }
        dispatch(userSignUp(inputChange))
        setInputChange(initialState)
    }

    return (
        <div className="w-full  mt-20 md:mt-36 sm:mt-60 ">
            <div style={{ border: "1px solid rgba(0,0,0,0.1)" }} 
            className="w-1/4 rounded-2xl m-auto p-8 signup-box">
                <h1 className="text-4xl signup-heading mb-3">Sign Up</h1>
                <hr className={`${(error && Object.keys(error).length === 0 && error.constructor === Object) && "mb-8"}`} />
                {
                    !(error && Object.keys(error).length === 0 && error.constructor === Object) && <h1 className="my-6 w-full py-4 text-center bg-red-100 rounded-xl text-red-600 text-2xl">{error.msg}</h1>
                }
                <form onSubmit={handleSubmit}>
                     <label htmlFor="name" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Name</p>
                        <input 
                        onChange={handleInputChange}  
                        value={inputChange.name}  
                        name="name" 
                        type="text"
                        id="name" 
                        placeholder="Name" 
                        className="block w-full border-2 border-transparent
                         px-6 py-5 outline-none hover:bg-transparent 
                         hover:shadow-input hover:border-gray-300 
                         focus:border-gray-300 hover:border-opacity-60 
                         focus:border-opacity-60 focus:bg-transparent 
                         focus:shadow-input rounded-xl transition duration-200 
                         placeholder-gray-400" 
                        />
                    </label>
                    <label htmlFor="email" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Email</p>
                        <input 
                        onChange={handleInputChange}  
                        value={inputChange.email}  
                        name="email" 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                        className="block w-full border-2 border-transparent 
                        px-6 py-5 outline-none hover:bg-transparent 
                        hover:shadow-input hover:border-gray-300 
                        focus:border-gray-300 hover:border-opacity-60 
                        focus:border-opacity-60 focus:bg-transparent 
                        focus:shadow-input rounded-xl transition 
                        duration-200 placeholder-gray-400" 
                         />
                    </label>
                    <label htmlFor="password" className=" block mb-6">
                        <p className="mb-3 font-black ml-3">Password</p>
                        <input 
                        onChange={handleInputChange}  
                        value={inputChange.password}  
                        name="password" 
                        type="password"
                        id="password" 
                        placeholder="Password" 
                        className="block w-full border border-transparent 
                        px-6 py-5 outline-none hover:bg-transparent 
                        hover:shadow-input  hover:border-gray-300 
                        focus:border-gray-300 hover:border-opacity-60 
                        focus:border-opacity-60 focus:bg-transparent 
                        focus:shadow-input rounded-xl transition 
                        duration-200 placeholder-gray-400" 
                        />
                    </label>
                    <label htmlFor="confirm-password">
                        <p className="mb-3 font-black ml-3">Confirm Password</p>
                        <input 
                        onChange={handleInputChange} 
                        value={inputChange.confirm_password}  
                        name="confirm_password" 
                        type="password" 
                        id="confirm-password" 
                        placeholder="Confirm Password"
                        className="block w-full border border-transparent px-6 
                        py-5 outline-none hover:bg-transparent hover:shadow-input
                          hover:border-gray-300 focus:border-gray-300 
                          hover:border-opacity-60 focus:border-opacity-60 
                          focus:bg-transparent focus:shadow-input rounded-xl 
                          transition duration-200 placeholder-gray-400" 
                         />
                    </label>
                    <div className="mt-8 w-full">
                        <button 
                        className="w-full bg-green-500 py-6 
                        text-center rounded-xl text-white transition 
                        duration-200 hover:bg-green-700" type="submit">Submit</button>
                    </div>
                </form>
                <div className="mt-6">
                    <span className="opacity-60 text-base">Already have account: </span>
                    <Link className="text-green-500 uppercase font-black text-xl" to="signin">Please sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Register
