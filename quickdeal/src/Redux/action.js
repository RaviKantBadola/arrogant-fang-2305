import { FAILURE, GET_AUTH_SUCCESS, ISAUTH, POST_AUTH_SUCCESS, REQUEST } from "./authTypes"

export const actionRequest = ()=>{
    return { 
        type : REQUEST
    }
}

export const actionFailure = ()=>{
    return { 
        type : FAILURE
    }
}

export const actionpostSuccess = (payload)=>{
    return {
        type: POST_AUTH_SUCCESS,
        payload 
    }
}

export const actiongetSuccess = (payload)=>{
    return {
        type: GET_AUTH_SUCCESS,
        payload 
    }
}

export const actionIsAuth = ()=>{
    return {
        type : ISAUTH
    }
}