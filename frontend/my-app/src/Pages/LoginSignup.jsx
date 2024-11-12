import React from 'react'
import "./CSS/LoginSignup.css"
import { useState } from 'react'

export const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log(formData)
    let responseData;
      await fetch('http://localhost:9000/login',{
        method: "POST",
        headers:{
          Accept:'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json()).then((data)=>responseData=data)

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/")
      }
      else{
        alert(responseData.error)
      }
  }

  const signup = async () => {
      console.log(formData)
      let responseData;
      await fetch('http://localhost:9000/signup',{
        method: "POST",
        headers:{
          Accept:'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json()).then((data)=>responseData=data)

      if(responseData.success){
        localStorage.setItem('auth-token',responseData.token);
        window.location.replace("/")
      }
      else{
        alert(responseData.error)
      }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          { state === "Sign Up" ? <input onChange={changeHandler} name="username" type="text" value={formData.username} placeholder='Your Name'/> : <></>}
          <input onChange={changeHandler} name="email" type="email" value={formData.email} placeholder='Enter Email'/>
          <input onChange={changeHandler} name="password" type="password" value={formData.password} placeholder='Password' />
        </div>
        <button onClick={() => {state === "Login"? login() : signup()}}>Continue</button>
        {state === 'Sign Up'? <p className='loginsignup-login'>Already have an account? <span onClick={() => {setState("Login")} }>Login Here</span></p> :
                              <p className='loginsignup-login'>Create an account <span onClick={() => {setState("Sign Up")} }>Click Here</span></p>
        }
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id=""/>
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup
