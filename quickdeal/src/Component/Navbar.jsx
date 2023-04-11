import React from 'react'
import {Box, Button, Flex, Image, Input, Select} from "@chakra-ui/react"
import { SlMagnifier  } from "react-icons/sl";
import { VscAccount  } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
 
import LoginButton from './LoginButton';
const Navber = () => {
  return (
         <Flex
         w = {"65%"} h = {"70px"} 
         m = "auto" 
         justifyContent = "space-between" 
         alignItems={"center"}
         position={"fixed"}
         left = {"8%"}
         zIndex = {"2"}
        boxShadow = {""}
        backgroundColor="white"
      marginLeft={"10%"}
       
          >
        <Box>
          <Image w={"185px"} h={"69px"} src="https://i.postimg.cc/wjVc8Xj4/quick.jpg" alt="quickdeal" ></Image>
        </Box>
       
         <Flex border='1px' borderColor='blue' w = {"35%"} h = "40px"   >
         
            <Select h={"35px"} w = {"35%"} fontSize="14px" border = "none" borderRadius={"0"} borderRight = "1px" borderColor={"gray"} placeholder='All Categories'>
                   <option value='option1'>Electronic</option>
                   <option value='option2'>Furniture</option>
                   <option value='option3'>Mobiles</option>
            </Select> 
 
            <Input w = {"65%"} fontSize="14px" border = "none" placeholder='Search in All India'  ></Input> 
            <Flex w = {"40px"} h= {"40px"}  alignItems={'center'} justifyContent= {"center"} bg= {"#008BCF"} >
              < SlMagnifier color='white' /></Flex>
            </Flex>
             <Flex justifyContent={"space-between"}   w = {"30%"} h = "40px" alignItems="center" >
             <Flex   alignItems="center" ><BsCart3   /> <Button bg={"transparent"} w ={"15px"} >Cart</Button></Flex>
             <Flex  textDecoration={"none"} justifyContent={'space-between'} alignItems="center"   ><VscAccount size={"23px"}  /> <LoginButton/> </Flex>
             <Button border= "1px solid sky" w = {"110px"} h = {"40px"} bg = "#FCEC52" >Post Free Ad</Button>
             </Flex>
         </Flex>
  ) 
}

export default Navber