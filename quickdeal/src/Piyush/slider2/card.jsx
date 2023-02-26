import Carousel from "react-multi-carousel";
import axios from "axios"
import "./cardstyle.css"
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react"
import React from 'react'
import { NavLink } from "react-router-dom";
import { WrapItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const data=[
    {
        "id": 1,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230105164450-36518.png",
        "title": "REALME X2 PRO",
        "desc": "Realme x2 pro (master edition)*excellent condition original display*with box*ram :12gb*storage : 256",
        "location": "Nagpur",
        "price": 16000,
        "category": "Realme",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230105164450-36518.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230105164450-41229.png",
        "description": "REALME X2 PRO (MASTER EDITION) EXCELLENT CONDITION ORIGINAL DISPLAY",
        "RAM": "12 GB",
        "Storage": "256GB",
        "Color": "RED BRICK",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 2,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20221228153728-87390.png",
        "title": "Iphone 11 64 GB",
        "desc": "Call? & whatsapp =sidra mobile (hadpsar pune)call time 11 am to 9 pmjoin my whatsapp groupjust whatsapp",
        "location": "Pune",
        "price": 31999,
        "category": "Iphone",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230118173944-97277.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/small/20230118173944-82131.png",
        "description": "Iphone 11 64 GB",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 3,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20221227174342-12163.png",
        "title": "SAMSUNG S20 FE 8/128",
        "desc": "Samsung s 20 fe in fresh condition with bill box charger in excellent condition sath hi instagram me follow kare aur pay",
        "location": "Raipur",
        "price": 17500,
        "category": "Samsung",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20221227174342-12163.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20221227174342-17889.png",
        "description": "SAMSUNG S20 FE 8/128",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 4,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230108214959-52904.png",
        "title": "Samsung note 10 8/256 GB",
        "desc": "Call? & whatsapp =sidra mobile (hadpsar pune)call time 11 am to 9 pmjoin my whatsapp groupjust whatsapp",
        "location": "Pune",
        "price": 13999,
        "category": "Samsung",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230116161453-51653.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230116161453-84607.png",
        "description": "Samsung note 10 8/256 GB",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Pune, Maharashtra 440012"
        },
        {
        "id": 5,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230108080113-3375.png",
        "title": "IPHONE 12",
        "desc": "Iphone 12 (finance also available) 128gb black mint condition fresh piece in face id available fyde ka so",
        "location": "Raipur",
        "price": 41000,
        "category": "Iphone",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230108073753-30554.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230108073753-66148.png",
        "description": "IPHONE 12",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Blue",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store,Raipur, Maharashtra 440012"
        },
        {
        "id": 6,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230108075726-9938.png",
        "title": "ONE PLUS 8",
        "desc": "One plus 8 (finance also available) 8/128gb green & 12/256gb black mint condition fresh piecein display fin",
        "location": "Raipur",
        "price": 26500,
        "category": "One plus",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230108075726-9938.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230118172920-43945.png",
        "description": "ONE PLUS 8",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 7,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230111113302-60543.png",
        "title": "Google pixel a premium 6 pro model 12gb ram 5G 128",
        "desc": "Google pixel model newly unused imported with bill and warranty kindly contact us for more details on whatsapp now",
        "location": "Delhi",
        "price": 36000,
        "category": "Google pixel",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230118164420-52014.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230118164420-52014.png",
        "description": "Google pixel a premium 6 pro model 12gb ram 5G 128",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 8,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230111113755-23350.png",
        "title": "Samsung S10E galaxy to Galaxy S20",
        "desc": "Details brand samsung description samsung model newly unused imported with bill and warranty only few pieces left pr",
        "location": "Delhi",
        "price": 11998,
        "category": "Samsung",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230118160149-39234.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230118160149-41621.png",
        "description": "Samsung S10E galaxy to Galaxy S20",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Silver",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 9,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230111183304-30343.png",
        "title": "OnePlus 10 Pro (12-256gb)",
        "desc": "Oneplus 10 pro (12-256gb) :- 48490 /-- 6 month warranty all accessories exchange offer available for inqui",
        "location": "Ahmedabad",
        "price": 48490,
        "category": "One plus",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230115155851-88687.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230115155851-27701.png",
        "description": "OnePlus 10 Pro (12-256gb)",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 10,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230112131447-40960.png",
        "title": "IPhone 14 Pro Max 128GB",
        "desc": "1 month old only, indian with bill (139900) pricing with 100% battery health, complete box pack whatsapp us for more",
        "location": "Raipur",
        "price": 80000,
        "category": "Iphone",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230116174557-64042.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230116174557-36804.png",
        "description": "IPhone 14 Pro Max 128GB",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "White",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 11,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114182522-97437.png",
        "title": "Iphone 11pro max. 64gb gold colour ",
        "desc": "Iphone 11 pro max 64gb 87% battery health 100% condition phone with bill charger ?for inquiry call us:~ya",
        "location": "Ahmedabad",
        "price": 41999,
        "category": "Iphone",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114182522-97437.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230116174004-45061.png",
        "description": "iphone 11pro max. 64gb gold colour",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Gold",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 12,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114183215-51463.png",
        "title": "IPhone Xs Max 64gb. & 256gb ",
        "desc": "Iphone xs max64gb & 256gb 1 month shop warranty phone with full kit ?for inquiry call us:~yash shah 8??8??6",
        "location": "Ahmedabad",
        "price": 27499,
        "category": "Iphone",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230118082350-53342.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114183215-51463.png",
        "description": "iPhone Xs Max 64gb. & 256gb ",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 13,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114183753-12482.png",
        "title": "ONEPLUS 9 pro. 12/256gb",
        "desc": "Details brand one plus description oneplus 9pro 12/256gb silver colour 100% condition phone with full ki",
        "location": "Ahmedabad",
        "price": 36999,
        "category": "One plus",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230115155851-27701.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230115155851-88687.png",
        "description": "ONEPLUS 9 pro. 12/256gb",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Blue",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 14,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114182235-30910.png",
        "title": "iPhone 13Pro 128gb gold colour",
        "desc": "Iphone 13pro 128gb gold colour 89% battery health 100% condition phone with full kit",
        "location": "Ahmedabad",
        "price": 68999,
        "category": "Iphone",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230115180544-31450.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114182235-30910.png",
        "description": "iPhone 13Pro 128gb gold colour",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
        {
        "id": 15,
        "image": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114181821-19976.png",
        "title": "iPhone 12 64gb",
        "desc": "Model : i phone 12 storage : 64gb colour : white colour warranty : 1 month shop service warranty avail ",
        "location": "Ahmedabad",
        "price": 37999,
        "category": "Iphone",
        "img1": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/medium/20230115175555-42635.png",
        "img2": "https://zamroo.s3.ap-south-1.amazonaws.com/images/product-images/mobiles-tablets/mobile-phones/large/20230114181821-19976.png",
        "description": "iPhone 12 64gb",
        "RAM": "64GB",
        "Storage": "256GB",
        "Color": "Deep Black",
        "Address": "Smart Innovations Sitabuldi Shery Mobile Bazar Sitabuldi Netaji Marg in Enternce of, 4, Modi Number 3, beside Nilesh Cycle Store, Nagpur, Maharashtra 440012"
        },
]
const Card = () => {
   

   
    return (
        <>
            <Box display={"flex , block"} mt="20px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} backgroundColor={"white"}  height="min-content" h="406px" >

                <Flex textAlign={"center"} justifyContent={'space-between'} pl="10px" h="40px">

                    <Text>
                        Mobile & Tablets

                    </Text>
                    <a href="" style={{ color: "#4ba7eb", textDecoration: "underline" ,margin:"15px"}}>View All Results
                        </a>


                </Flex>



                {/* caroual start */}
                <Box w={{ base: '60%', md: '55%', lg: '70%' }} width={"100%"} height="310px" margin="auto " mt="10px"  >
                    <Carousel responsive={responsive}
                        swipeable={false}
                        draggable={false}
                        //    infinite={true}
                        //    autoPlay={true}
                        keyBoardControl={true}
                        slidesToSlide={1}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item"
                        containerClass="carousel-container"
                    >
                        {
                            data.map(item => (

                                <Box alignItems="left" textAlign={"left"} backgroundColor={"white"} overflow="hidden" borderRadius={"3px"} border=" 1px solid #e8e8e8" w="256px" >
                                     <div className="p_image_div_card">
                                     <Image src={item.image} h="200px" w="80%" marginLeft={"25px"} alt="" />
                                     </div>
                                   
                                    <div className="p_card_div">
                                        <Text fontSize={{ base: "13px", md: "12px", lg: "16px" }} mt="3" textOverflow="ellipsis" whiteSpace="nowrap" overflow={"hidden"} color="#4ba7eb" > {item.desc}</Text>

                                        <Text textAlign={"left"} fontSize={"14px"} fontWeight={"400"} >   ₹ {item.price}</Text>


                                        <Button
                                            w="56px"
                                            h="29px"
                                            padding="7px 12p"
                                            border="1px solid #008bcf"
                                            color="#008bcf"
                                            borderaRdius="3px"
                                            cursor="pointer"
                                            background="#fff"
                                            borderRadius={"2px"}
                                            fontWeight={"medium"} fontSize={{ base: "13px", md: "14px", lg: "15px" }} > View</Button>
                                    </div>



                                </Box>

                            ))
                        }
                    </Carousel>
                </Box>
                {/* carousel end  */}









            </Box>
        </>

    )
}

export default Card







