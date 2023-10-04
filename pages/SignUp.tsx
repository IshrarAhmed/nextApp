import React, { useEffect } from 'react'
import signUpstyle from "@/styles/SignUp.module.css"
import { useState } from 'react';

import { AddUserData } from '@/redux/UserData';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useAmp } from 'next/amp';


export default function SignUp() {
  const userdata= useSelector((state:any)=>state.user.userRegistration)

    const router= useRouter()
    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber:0,
        address:""
      });
      const [required, setRequired] = useState({
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        confirmPassword: true,
        phoneNumber: true,
        address: true,
      });
      const [errorPassword ,setErrorPassword] = useState <boolean>(false)
      const [emailError ,setEmailError] = useState <boolean>(false)

      const dispatch = useDispatch()
      const handleSubmit=(e:any)=>{

        e.preventDefault();
        if(register.password!==register.confirmPassword){
          setErrorPassword(true)
        }else if(register.email==userdata?.email){
             setEmailError(true)
        } else{
          dispatch(AddUserData( register))
          toast.success('Register successfully!' ,{
           position: toast.POSITION.TOP_RIGHT,
           autoClose: 1000,
       })
 
          router.replace("/Login")
        }


      }
      const handleInputChange=(e:any,field:any)=>{
        
        setRegister((prev) => ({
            ...prev,
            [field]: e.target.value,
          }));
          // setRequired((prev) => ({
          //   ...prev,
          //   [field]: value.trim() === "", // Update required state based on whether the field is empty or not
          // }));
          setErrorPassword(false)
          setEmailError(false)
      }

  return (
    <form className={signUpstyle.form}  onSubmit={handleSubmit}>

    <p className={signUpstyle.title}>Register </p>
    <p className={signUpstyle.message}>Signup now and get full access to our app. </p>
    <div className={signUpstyle.flex}>
      <label>
        <input
          required
          placeholder=""
          type="text" 
      
          className={signUpstyle.input}
          value={register.firstName}
          onChange={(e) => handleInputChange(e, "firstName")}
        />
        <span>Firstname</span>

   
      </label>
      <label>
        <input
          required
          placeholder=""
          type="text"
          className={signUpstyle.input}
          value={register.lastName }
          onChange={(e) => handleInputChange(e, "lastName")}
        />
        <span>Lastname</span>
      
      </label>
    </div>
    <label>
      <input
        required
        placeholder=""
        type="email"
        className={signUpstyle.input}
        value={register.email}
        onChange={(e) => handleInputChange(e, "email")}
      />
      <span>Email</span>  
      {emailError && <p className={signUpstyle.error}>This Email is Already Registered!</p>}

   
    </label>
    <label>
      <input
        required
        placeholder=""
        type='tel'
        maxLength={10}
        className={signUpstyle.input}
        value={register.phoneNumber}
        onChange={(e) => handleInputChange(e, "phoneNumber")}
      />
      <span>Phone Number</span>
   
    </label>    <label>
      <input
        required
        placeholder=""
        type="text"
        className={signUpstyle.input}
        value={register.address}
        onChange={(e) => handleInputChange(e, "address")}
      />
      <span>Address</span>
   
    </label>
    <label>
      <input
        required
        placeholder=""
        className={signUpstyle.input}

        // type={toggel ? "text" : "password"}

        value={register.password}
        onChange={(e) => handleInputChange(e, "password")}
      />

      {/* <span>
        Password{" "}
        <p className="toglleEye" onClick={toggelClick}>
          {" "}
          {!toggel ? <BiSolidHide /> : <BiSolidShow />}
        </p>
      </span> */}
     <span>Password</span>
    </label>
    <label>
      <input
        required
        placeholder=""
        type="password"
        className={signUpstyle.input}
        value={register.confirmPassword}
        onChange={(e) => handleInputChange(e, "confirmPassword")}
      />

      <span>Confirm password</span> 
      {errorPassword && <p className={signUpstyle.error}>Confirm Password Not match!</p>}
      
     {/* {required&& <p className="error">Password do not match</p>} */}
    </label>
    <button type="submit" className={signUpstyle.submit}>Submit</button>
    {/* <p className="signin">
      Already have an account? <Link to={"/login"}>Sign in</Link>{" "}
    </p> */}
  </form>
  )
}
