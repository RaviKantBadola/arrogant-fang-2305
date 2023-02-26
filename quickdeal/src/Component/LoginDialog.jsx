import {Modal,ModalContent,Button,useDisclosure,Input,Box, Flex, Image,  SimpleGrid, Alert, AlertIcon , AlertTitle,AlertDescription, } from "@chakra-ui/react";
 
import {useState, useEffect} from "react";
 import axios from "axios"
import Signup from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { actiongetSuccess, actionIsAuth } from "../Redux/action";
const accountinitialvalues={
    login:{
        view:"login",
        heading:"Login",
        manage:" Manage your orders",
        track:"Track your orders, delivery and returns",
        transaction : "Transact online with buyers and sellers",
        check:"Check and respond to chats, replies, offers and more",
        personalize:"Personalized notifications and alerts",
        get:"Get matching alerts for the products services you are looking for",
        l1:"https://i.postimg.cc/SK36CRjM/l1.jpg",
        l2:"https://i.postimg.cc/HxMQ2m7P/l2.jpg",
        l3:"https://i.postimg.cc/T1XnNsV2/l3.jpg"


    },
    signup:{
        view:"signup",
        heading:"Register",
        manage:" Manage your orders",
        track:"Track your orders, delivery and returns",
        transaction : "Transact online with buyers and sellers",
        check:"Check and respond to chats, replies, offers and more",
        personalize:"Personalized notifications and alerts",
        get:"Get matching alerts for the products services you are looking for",
        l1:"https://i.postimg.cc/SK36CRjM/l1.jpg",
        l2:"https://i.postimg.cc/HxMQ2m7P/l2.jpg",
        l3:"https://i.postimg.cc/T1XnNsV2/l3.jpg"
    }
} 
 
  function LoginDialog() {

      const [userName, setUserName] = useState({})
      
      const obj = { email:"", password:"" }
      const [formData,setFormData] = useState(obj)
      const {email,password} = formData;      
      const dispatch = useDispatch()
      const {data, isAuth} = useSelector((store)=> {return {   data : store.reducer.userData , isAuth :store.reducer.isAuth  }})
      
      const handleSelectChange = (e)=>{
               if(e.target.value == "profile"){
              //  navigate("/profile")
               }else if (e.target.value == "logout"){
               dispatch(actionIsAuth())
               }

             }
       
    const handleChange = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    
   const getData = (obj)=>{
    axios.get("https://63f9f08a473885d837d5375f.mockapi.io/quickDealAuth").then((res)=>dispatch(actiongetSuccess(res.data)))     
   }

   useEffect(()=>{
    getData(formData)
   },[])
      
    const handleSubmit = (event)=>{
      event.preventDefault()
      if(formData.email == "" || formData.password == "" ){
        alert ("please fill email password")
      }

      if(formData.password.length <8){
        alert ("password length should be 8 or more")
      }

           let flag = false
           for(let i=0;i<data.length;i++){
           if(data[i].email==formData.email && data[i].password == formData.password ){
                  dispatch(actionIsAuth())
                  setUserName(data[i])
                 flag=true
                  break
           }
       }
    
           if(flag == false){
            console.log("no user found");
             return  <Alert status='error'>
              <AlertIcon />
              <AlertTitle>Your browser is outdated!</AlertTitle>
               <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
              </Alert>
       }
       

    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [account,toggleAccount]=useState(accountinitialvalues.login)
  
const toggleSignup=()=>{
    toggleAccount(accountinitialvalues.signup)
}
const handleClose=()=>{
    onClose(true)
    toggleAccount(accountinitialvalues.login)
}
 
    return (
      <>
        {isAuth ?  <select onChange={handleSelectChange}  style={{width:"150px" , background: "white",color:"black"}} >
          <option>{userName.firstname}</option>
          <option value="profile" >Profile</option>
          <option value ="logout" >Logout</option>
        </select> : <p onClick={onOpen}>Login/Register</p>}
  
        <Modal isOpen={isOpen}  size= "xxl"   onClose={handleClose} >
    
         
          <ModalContent style={{display:"flex",height:"500px"  ,width:"50%",marginTop:"5%"}} >  
            <Box style={{display:"flex", height:"100%"}}>      
        <Box style={{  width:"40%",height:"auto",color:"black"}}>
            <h1 style={{color:878787,fontSize:20 , marginTop:"45px", marginLeft:"35px" , borderBottom :"1px solid gray"}}>{account.heading}</h1>
            <SimpleGrid  columns={1} spacing={5} style={{  marginTop:"20px" }}  >
             <Flex style = {{  width:"90%", height : "100px" , margin:"auto"  , alignItems:"center"  }} >
             <Image w={"55px"} h = {"55px"} mr ={"10px"} src = {account.l1} ></Image>
              <Box><h2 style={{ fontSize : "12px" , fontWeight :"700"}} >{account.manage}</h2>
              <p style={{ fontSize : "12px"}} >{account.track}</p></Box>
             </Flex>
             <Flex style = {{  width:"90%" ,height : "100px" , margin:"auto" ,alignItems:"center"     }} >
             <Image w={"55px"} h = {"55px"} mr ={"10px"} src = {account.l2} ></Image>
              <Box><h2 style={{ fontSize : "12px" , fontWeight :"700"}} >{account.transaction}</h2>
              <p style={{ fontSize : "12px"}} >{account.check}</p></Box>
             </Flex>
             <Flex style = {{ width:"90%" ,height : "100px" , margin:"auto" ,alignItems:"center"   }} >
             <Image w={"55px"} h = {"55px"} mr ={"10px"} src = {account.l3} ></Image>
              <Box><h2 style={{ fontSize : "12px" , fontWeight :"700"}} >{account.personalize}</h2>
              <p style={{ fontSize : "12px"}} >{account.get}</p></Box>
             </Flex>
              
            </SimpleGrid>
            
            
        </Box>

        {/* login form------- */}
          { account.view==="login" ?
          <Box style={{height:"100%",width:"60%",padding:"40px 35px",textAlign:"center"}}>
          <Input variant="flushed" placeholder="Enter Email/Mobile Number" style={{marginTop:20}} isRequired type="email" name="email" value={email} onChange={handleChange}/>
          <Input variant="flushed" placeholder="Enter Password" style={{marginTop:20}} isRequired  type="password" name="password" value={password} onChange={handleChange} />
           <p style={{marginTop:20,fontSize:12,color:878787}}>By Submitting in you agree to T&C and Privacy Policy</p>
            <Button style={{marginTop:20,background:"#FB641B",color:"#fff",width:200}}  onClick={handleSubmit} >Login</Button>
            <p style={{marginTop:20,fontSize:12,color:878787}}>OR</p>
            <Button style={{marginTop:20,background:"#FB641B",color:"#fff",width:200}}>Request OTP</Button>
            <p style={{marginTop:20,padding:"5px",fontSize:14,color:"#2874f0"}} onClick={()=>toggleSignup()}>New to QuickDeal? Create an account</p>
          </Box>
          : 
          // sign up form
          <Signup/>
          
          }
          </Box>
       
          </ModalContent>
        
        </Modal>
      </>
  
    );
  }

  export default LoginDialog