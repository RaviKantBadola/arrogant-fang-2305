
import React from 'react'
import {
    Button
    } from '@chakra-ui/react'
import LoginDialog from './LoginDialog'
 

const LoginButton = () => {
    
  return (
    <>
   
      <Button w = {"110px"} ml ={"3px"} bg={"transparent"}  >
        <LoginDialog/>
      </Button >
    

</>
  )
}

export default LoginButton
