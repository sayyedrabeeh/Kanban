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
    
    return(
        <>
        </>
    )

}
export default Signup