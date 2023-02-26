import {Modal,ModalContent,Button,useDisclosure,Input,Box, border, Flex, Image, Grid, SimpleGrid} from "@chakra-ui/react";
import {  useNavigate } from "react-router-dom";
import {useState,useContext} from "react";
 
 
import { AuthContext } from "../context/AuthContext";
import Signup from "../Route/Signup";
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
  
      const navigate = useNavigate();
    
      const obj = {
        email:"",
        password:""
      }
    
      const {loginUser} = useContext(AuthContext);
    
    const [formData,setFormData] = useState(obj)
    const {email,password} = formData;
    const [status,setStatus] = useState(false)
    const handleChange = (e)=>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    console.log(formData,"form")
    const handleSubmit =async (event)=>{
      event.preventDefault();
       loginUser(formData).then((res)=> setStatus(res))

      console.log( status,"status")
    
    if(status){
      console.log("true")
      setFormData(obj);
      navigate("/");
      
    }
    else if( status){
      console.log("false")
      alert("wrong credentials");
      setFormData(obj);
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
        <p onClick={onOpen}>Login/Register</p>
  
        <Modal isOpen={isOpen}  size= "xxl"   onClose={handleClose} >
    
         
          <ModalContent style={{display:"flex",height:"500px" , border:"1px solid red" ,width:"50%",marginTop:"5%"}} >  
            <Box style={{display:"flex", height:"100%"}}>      
        <Box style={{ border:"1px solid blue", width:"40%",height:"auto",color:"black"}}>
            <h1 style={{color:878787,fontSize:20 , marginTop:"45px", marginLeft:"35px" ,border:"3px solid red" }}>{account.heading}</h1>
            <SimpleGrid  columns={1} spacing={5} style={{border:"1px solid blue" , marginTop:"20px" }}  >
             <Flex style = {{border:"2px solid black" , width:"90%", height : "100px" , margin:"auto"  , alignItems:"center"  }} >
             <Image w={"55px"} h = {"55px"} mr ={"10px"} src = {account.l1} ></Image>
              <Box><h2 style={{ fontSize : "12px" , fontWeight :"700"}} >{account.manage}</h2>
              <p style={{ fontSize : "12px"}} >{account.track}</p></Box>
             </Flex>
             <Flex style = {{border:"2px solid black" , width:"90%" ,height : "100px" , margin:"auto" ,alignItems:"center"     }} >
             <Image w={"55px"} h = {"55px"} mr ={"10px"} src = {account.l2} ></Image>
              <Box><h2 style={{ fontSize : "12px" , fontWeight :"700"}} >{account.transaction}</h2>
              <p style={{ fontSize : "12px"}} >{account.check}</p></Box>
             </Flex>
             <Flex style = {{border:"2px solid black" , width:"90%" ,height : "100px" , margin:"auto" ,alignItems:"center"   }} >
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

  export default LoginDialog;