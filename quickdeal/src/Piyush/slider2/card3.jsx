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

const data=[{
"image": "https://teja9.kuikr.com/i5/20230211/1-year-warranty-on-compressor-motor-Freeshipping-Cash-on-delivery-and-buyback-offers-available-VB201705171774173-ak_LWBP1137233134-1676054573_lg.webp",
"title": "1 year warranty on compressor/motor Freeshipping+Cash on delivery and buyback offers available",
"desc": "1 year warranty on compressor/motor Freeshipping+Cash on delivery and buyback offers available",
"location": "dehli",
"price": 6499,
"category": "Washing Machines",
"id": 105
},
{
"image": "https://teja9.kuikr.com/i6/20230206/1-year-warranty-on-compressor-motor-Freeshipping-Cash-on-delivery-and-buyback-offers-available-VB201705171774173-ak_LWBP628079195-1675693765_lg.webp",
"title": "1 year warranty on compressor/motor Freeshipping+Cash on delivery and buyback offers available",
"desc": "1 year warranty on compressor/motor Freeshipping+Cash on delivery and buyback offers available",
"location": "hydrabad",
"price": 6999,
"category": "Washing Machines",
"id": 106
},
{
"image": "https://teja9.kuikr.com/i4/20230223/I-m-in-urgent-need-so-selling-this-machine-VB201705171774173-ak_LWBP681074637-1677147338_lg.webp",
"title": "I'm in urgent need so selling this machine",
"desc": "I'm in urgent need so selling this machine",
"location": "dehli",
"price": 8000,
"category": "Washing Machines",
"id": 107
},
{
"image": "https://teja9.kuikr.com/i4/20230220/2year-motor-warranty-6month-doors-step-service-free-cod-available-VB201705171774173-ak_WBP974878062-1676917539.png",
"title": "2year motor warranty 6month doors step service free cod available",
"desc": "2year motor warranty 6month doors step service free cod available",
"location": "hydrabad",
"price": 5499,
"category": "Washing Machines",
"id": 108
},
{
"image": "https://teja9.kuikr.com/i5/20230214/Samsung-jet-wash-7-1-kg-flower-model-washing-machine-in-excellent-condition-free-shipping-VB201705171774173-ak_LWBP698055403-1676378657.webp",
"title": "Samsung jet wash 7+1 kg flower model washing machine in excellent condition free shipping",
"desc": "Samsung jet wash 7+1 kg flower model washing machine in excellent condition free shipping",
"location": "hydrabad",
"price": 9000,
"category": "Washing Machines",
"id": 109
},
{
"image": "https://teja9.kuikr.com/i4/20230214/Warranty-One-Year-Cash-on-Delivery-Free-Shipping-in-Bangalore-VB201705171774173-ak_LWBP187437615-1676370170_lg.webp",
"title": "Warranty One Year Cash on Delivery Free Shipping in Bangalore",
"desc": "Warranty One Year Cash on Delivery Free Shipping in Bangalore",
"location": "Bangalore",
"price": 7000,
"category": "Washing Machines",
"id": 110
},
{
"image": "https://teja9.kuikr.com/i6/20230213/1-year-warranty-on-compressor-motor-Freeshipping-Cash-on-delivery-and-buyback-offers-available-VB201705171774173-ak_WBP1683689330-1676292371.png",
"title": "1 year warranty on compressor/motor Freeshipping+Cash on delivery and buyback offers available",
"desc": "1 year warranty on compressor/motor Freeshipping+Cash on delivery and buyback offers available",
"location": "dehli",
"price": 7499,
"category": "Washing Machines",
"id": 111
},
{
"image": "https://teja9.kuikr.com/i5/20230210/--8958190232---WhatsApp-me-Samsung-7-kg-Fully-Automatic-Top-Loading-WA70A4002GS-TL---warranty-VB201705171774173-ak_WBP1556674804-1676032205.png",
"title": "( 89581.90232 ) WhatsApp me Samsung 7 kg Fully-Automatic Top Loading WA70A4002GS/TL & warranty",
"desc": "( 89581.90232 ) WhatsApp me Samsung 7 kg Fully-Automatic Top Loading WA70A4002GS/TL & warranty",
"location": "hydrabad",
"price": 7000,
"category": "Washing Machines",
"id": 112
},
{
"image": "https://teja9.kuikr.com/i4/20230128/-95989--91726---washing-machine-good-conditions-urgent-sale-VB201705171774173-ak_LWBP1593558024-1674891191_lg.webp",
"title": "(95989 .91726) washing machine good conditions urgent sale",
"desc": "(95989 .91726) washing machine good conditions urgent sale",
"location": "hydrabad",
"price": 5000,
"category": "Washing Machines",
"id": 113
},
{
"image": "https://teja9.kuikr.com/i6/20230220/for-sall-samin-good-condition-VB201705171774173-ak_LWBP372268748-1676901769_lg.webp",
"title": "For sall samin good condition",
"desc": "For sall samin good condition",
"location": "hydrabad",
"price": 6000,
"category": "Washing Machines",
"id": 114
}]
const Card3 = () => {
    
    return (
        <>
            <Box display={"flex"} mt="20px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} backgroundColor={"white"} display={"block"} height="min-content" h="406px" >

                <Flex textAlign={"center"} justifyContent={'space-between'} pl="10px" h="40px">

                    <Text>
                        Electronics & Appliances
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

export default Card3