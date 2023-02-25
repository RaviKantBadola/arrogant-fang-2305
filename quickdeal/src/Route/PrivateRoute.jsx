import React from "react"
import { AuthContext } from "../Context/AuthContext"
import { useContext } from "react"
import { Navigate } from "react-router"
 

function PrivateRoute({children }) {
 
  
  const {isAuth} = useContext(AuthContext)
  
  if(isAuth==false)
  {
    
    return <Navigate to="/" replace={true}/>
  }
  else
  {
    return children

  }


}

export default PrivateRoute;