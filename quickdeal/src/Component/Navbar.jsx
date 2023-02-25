import React from 'react'
import {Box, Button, Flex, Image, Input, Select} from "@chakra-ui/react"
import { SlMagnifier  } from "react-icons/sl";
import { VscAccount  } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
 
import LoginButton from './LoginButton';
const Navber = () => {
  return (
         <Flex
         border='1px' 
         borderColor='red' 
         w = {"80%"} h = {"70px"} 
         m = "auto" 
         justifyContent = "space-between" 
         alignItems={"center"}
         position={"fixed"}
         left = {"10%"}
         zIndex = {"2"}
        boxShadow = {"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
        <Box>
          <Image w={"185px"} h={"69px"} src="https://i.postimg.cc/wjVc8Xj4/quick.jpg" alt="quickdeal" ></Image>
        </Box>
       
         <Flex border='1px' borderColor='blue' w = {"35%"} h = "40px"   >
         
            <Select h={"35px"} w = {"35%"} fontSize="14px" border = "none" borderRadius={"0"} borderRight = "1px" borderColor={"gray"} placeholder='All Categories'>
                   <option value='option1'>Option 1</option>
                   <option value='option2'>Option 2</option>
                   <option value='option3'>Option 3</option>
            </Select> 
 
            <Input w = {"65%"} fontSize="14px" border = "none" placeholder='Search in All India'  ></Input> 
            <Flex w = {"40px"} h= {"40px"}  alignItems={'center'} justifyContent= {"center"} bg= {"#008BCF"} >
              < SlMagnifier color='white' /></Flex>
            </Flex>
             <Flex justifyContent={"space-around"}    w = {"30%"} h = "40px" alignItems="center" >
             <Flex  alignItems="center" ><BsCart3   /> <Button bg={"transparent"} w ={"15px"} >Cart</Button></Flex>
             <Flex alignItems="center" > <VscAccount size={"23px"} /><LoginButton/> </Flex>
              <Button  w = {"110px"} h = {"40px"} bg = "#FCEC52" >Post Free Ad</Button>
                 
                  
                </Flex>



                
         </Flex>
  ) 
}

export default Navber