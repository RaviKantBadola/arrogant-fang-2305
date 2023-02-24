import {createContext,useState} from "react";
 import axios from "axios"
import {json, useNavigate} from "react-router-dom";
export const AuthContext=createContext();

const AuthContextProvider=({children})=>{
const[username,setUserName]=useState("");
const[isAuth,setIsAuth]=useState(false);
const navigate=useNavigate();
// let obj;

const UserArr = []
const SignUpData=(form)=>{
  console.log(form, "auth.signup");
    // axios.post('https://different-bell-bottoms-fox.cyclic.app/signup', {
    //     ...form
    //    })
    //    .then(function (response) {
    //      console.log(response,"res");
    //      setIsAuth(true);
         
    //    })
    //    .catch(function (error) {
    //      console.log(error,"error");
    //    });
         UserArr.push(form)
    localStorage.setItem("user_arr", JSON.stringify(UserArr))
   
}

const loginUser=async (Data)=>{
   console.log(Data,"loginData")
  try {
  //   const response = await axios.get('https://different-bell-bottoms-fox.cyclic.app/signup');
  //  console.log(response.data,"res")
    const data = JSON.parse(localStorage.getItem("user_arr")) || []
    // let data = response.data;
    if(data.length==0){
      return false
    }
      
    for(let i=0;i<data.length;i++)
    {
      if(data[i].email===Data.email && data[i].password===Data.password){
        setUserName(data[i].firstname);
        console.log("from here",data[i].firstname)

         setIsAuth(true);
         navigate("/");
         return true;
      }
      else if(i===data.length-1 && data[i].email!==Data.email && data[i].password!==Data.password){
        console.log("no userfound")
        return false;
      }
    }
  } catch (error) {
    console.error(error);
  }
}
const logoutUser=()=>{
    setIsAuth(false);
}

return(
<AuthContext.Provider value={{isAuth,loginUser,logoutUser,SignUpData,username}}>
{children}
</AuthContext.Provider>

)


}

export default AuthContextProvider;