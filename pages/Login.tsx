import React from 'react'
import signUpstyle from "@/styles/SignUp.module.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddUserData } from '@/redux/UserData';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {userLogged} from "@/redux/UserData"
import { toast } from 'react-toastify';
export default function SignUp() {
    const userdata= useSelector((state:any)=>state.user.userRegistration)

    const router= useRouter()
    const [register, setRegister] = useState({

        email: "",
        password: "",

       
      });
   
      const dispatch = useDispatch()
      const handleSubmit=(e:any)=>{
        e.preventDefault();
        //  dispatch(AddUserData( register))
        if(userdata.email!== register.email && userdata.password!==register.password){
          toast.error('Password And Email are Not Valid !!' ,{
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 1000,
        })

        }
 else if(userdata.email!== register.email){
  toast.error('Please enter Correct Email!!' ,{
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
})
 } else if(userdata.password!==register.password){
  toast.error('Please Enter Correct Password!!' ,{
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
})
 } 
 
  else{
    dispatch(userLogged())
    router.replace("/")
    toast.success(' Successfully Login!' ,{
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 100,
  })
 }


      }
      const handleInputChange=(e:any,field:any)=>{
  
        setRegister((prev) => ({
            ...prev,
            [field]: e.target.value,
          }));
      }

       console.log("register",register)
  return (
    <form className={signUpstyle.form}  onSubmit={handleSubmit}>

    <p className={signUpstyle.title}>Login </p>
    <p className={signUpstyle.message}>Signup now and get full access to our app. </p>
    <div className={signUpstyle.flex}>
  
    </div>
    <label>
      <input
        required
        placeholder="email"
        type="email"
        className={signUpstyle.input}
        value={register.email}
        onChange={(e) => handleInputChange(e, "email")}
      />

   
    </label>
    <label>
      <input
        required
        placeholder="password"
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

    </label>

    <button type="submit" className={signUpstyle.submit}>Submit</button>
    <p className="signin">
      Don't have an account? <Link href="/SignUp">Sign in</Link>{" "}
    </p>
  </form>
  )
}
