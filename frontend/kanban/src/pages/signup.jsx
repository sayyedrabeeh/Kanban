import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup (){
    const [username , setUsername ] = useState('')
    const [email , setEmail ] = useState('')
    const [password , setPassword ] = useState('')
    const [confirmPassword , setConfirmPassword ] = useState('')
    const [isLoading , setIsLoading ] = useState(false)
    const [errorMsg , setErrorMsg ] = useState('')
    // const navigate = useNavigate()

    const handleSignup = async(e) =>{
          e.preventDefault();

        if (password !== confirmPassword){
            setErrorMsg('Password Not Match')
            return 
          }
        setErrorMsg('')
        setIsLoading(true)
        try{
            await axios.post('http://localhost:8000/signup/',{
                username,
                email,
                password
            })
        // navigate('/Login',{
        //     state:{message:'Account Created SuccessFully'}
        // })
        }catch(error){
             console.error('signup error :',error)
             setErrorMsg(error.response?.data?.error || 'Signup Failed. Please Try Again ')
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold dark:text-white mb-2">KAN ban </h1>
                    <p className="text-gray-600  dark:text-gray-400 ">Sign Up To Access Your Account</p>
                </div>
                
                 <form onSubmit={handleSignup} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                   <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
                    
                    {errorMsg && (
                        <div className="mb-4 p-3 bg-red-100 dark:bg-red-200 border-l-4  bg-red-50 border-l-4 border-red-500 text-red-700">
                            <p>{errorMsg}</p>
                        </div>
                    )}
                   
                    <div className="mb-6">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-medium mb-2">Username</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                   
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full bg-sky-500/50  text-white py-3 px-4 rounded-lg font-medium transition duration-200 ${
                            isLoading ? 'bg-blue-400 cursor-not-allowed' : 'hover:bg-blue-700'
                        }`}
                    > 
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Signing Up...
                            </span>
                        ) : 'Sign In'}
                    </button>
                    
                    <div className="text-center mt-6">
                        <p className="text-gray-600 dark:text-gray-400">
                            Do You  have an account?{' '}
                             <span className="text-blue-600 hover:underline font-medium  cursor-pointer">  
                                Login
                            </span>
                        </p>
                    </div> 
                </form>
                
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} KAN ban . All rights reserved.
                    </p>
                </div>
            </div> 
        </div>
        
    );

}
export default Signup