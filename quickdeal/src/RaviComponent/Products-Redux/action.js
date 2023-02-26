

import { GET_PRODUCT_DATA, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"
import axios from "axios"

export const getProductSuccess=(payload)=>{
return {type:GET_PRODUCT_DATA,payload}
}

export const productRequest=()=>{
    return {type:PRODUCT_REQUEST}
}
export const productFailure=()=>{
    return {type:PRODUCT_FAILURE}
}




export const getProduct=(param) =>(dispatch)=>{
    dispatch(productRequest())
    axios.get(`https://different-bell-bottoms-fox.cyclic.app/quickdeal`,param).then((res)=>{
     
    dispatch(getProductSuccess(res.data))
    console.log(res.data)
    }).catch((err)=>{
        dispatch(productFailure())
    })

}
export const getSingleProduct=(id) =>(dispatch)=>{
    axios.get(`https://different-bell-bottoms-fox.cyclic.app/quickdeal/${id}`).then((res)=>{
    dispatch(getProductSuccess(res.data))
    })

}


