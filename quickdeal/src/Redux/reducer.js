import React from 'react'
import { FAILURE, GET_AUTH_SUCCESS, ISAUTH, POST_AUTH_SUCCESS, REQUEST } from './authTypes'

const InitialState = {
    isAuth : false,
    userData : [],
    isError : false,
    isLoading: false
     

}

const reducer = (state = InitialState, {type,payload}) => {
 switch (type) {
  case REQUEST: return {
    ...state ,  isLoading:true
  }
  case FAILURE : return {
   ...state ,  isLoading:false , isError : true
}
case POST_AUTH_SUCCESS : return {
  ...state ,  isLoading:false , userData : [...state.userData, payload]
}
case GET_AUTH_SUCCESS : return {
  ...state ,  isLoading:false , userData : payload
}  

case ISAUTH : return {
  ...state , isAuth : !state.isAuth
}
 
  default: return state
  
 }
}

export default reducer
