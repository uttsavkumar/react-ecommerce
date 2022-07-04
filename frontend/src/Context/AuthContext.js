import React,{ createContext, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//crreate context variable
const Auth = createContext({})

export const AuthContext = ({children}) => {

  const[user,setUser] = useState({})
  const nav = useNavigate()
  const handleLogin = ({email,password}) => {
    axios('http://localhost:8000/api/login',{
      method:'post',
      data:{
        email:email,
        password:password
      }
    }).then((res) => {
      setUser(res.data)
      console.log(res.data)
      nav('/')
    })
  }
  useEffect(() => {
   if(window.performance){
    if (performance.navigation.type === 1) {
      console.log("This page is reloaded");
    } else {
      console.log("This page is not reloaded");
    }
   }
  });
  return (
    <>
        <Auth.Provider
        //pass desired state or fn as value
        value={{ 
          handleLogin,user
         }}
        >
          {children}
        </Auth.Provider>
    </>
  )
}

export default Auth