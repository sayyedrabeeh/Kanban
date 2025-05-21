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
    const navigate = useNavigate()

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
        navigate('/Login',{
            state:{message:'Account Created SuccessFully'}
        })
        }catch(error){
             console.error('signup error :',error)
             setErrorMsg(error.response?.data?.error || 'Signup Failed. Please Try Again ')
        }finally{
            setIsLoading(false)
        }
    }
    
    return(
        <>
        </>
    )

}
export default Signup