
import React from 'react'
import {
    Button
    } from '@chakra-ui/react'
import LoginDialog from './LoginDialog'
 

const LoginButton = () => {
    
  return (
    <>
   
      <Button bg={"transparent"} w = {"110px"} ml ={"3px"}>
        <LoginDialog/>
      </Button >
    

</>
  )
}

export default LoginButton
