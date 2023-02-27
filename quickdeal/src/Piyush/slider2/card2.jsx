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
        items: 5
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
"image": "https://teja9.kuikr.com/i6/20230221/L-shape-gently-used-6-seater-sectional-cloth-sofa-set-with-cushions-and-cushion-covers-VB201705171774173-ak_LWBP1694883809-1676959634_lg.webp",
"title": "L shape gently used 6 seater sectional cloth sofa set with cushions and cushion covers",
"desc": "L shape sectional sofa set. Available with cushions and cushion covers. < 4 years. 6 seater (3 +2+1)",
"location": "hydrabad",
"price": 7000,
"category": "Sofa Sets",
"id": 55
},
{
"image": "https://teja9.kuikr.com/i6/20230223/11-seater-designer-sofa-3-3-3-2-VB201705171774173-ak_LWBP1446541037-1677138601_lg.webp",
"title": "11 seater designer sofa 3+3+3+2",
"desc": "Premium sofa by a desinger high quality hardly used 12-13 months old seat size is bigger than normal one + super confortable Reason to sell moving to a new house",
"location": "dehli",
"price": 150000,
"category": "Sofa Sets",
"id": 56
},
{
"image": "https://teja9.kuikr.com/i6/20230223/3-2-sofa-set-with-storage-corner-set-VB201705171774173-ak_LWBP1879477775-1677138161.webp",
"title": "3+2 sofa set with storage corner set",
"desc": "custom made 3+2 sofa set with storage corner set. 4 years old",
"location": "hydrabad",
"price": 18000,
"category": "Sofa Sets",
"id": 57
},
{
"image": "https://teja9.kuikr.com/i6/20230220/Sofas-Rs-7-499-only-with-3yrs-wrnty-Direct-factory--pick-any-sofa-3-1-1-cash-on-delivery-available-VB201705171774173-ak_WBP904809290-1676897158.png",
"title": "Sofas Rs 7,499 only. with 3yrs wrnty Direct factory pick any sofa 3+1+1 cash on delivery available",
"desc": "Rs 7,499 only Free Free Dlvry within 5kms with 3yrs wrnty Direct factory sale pick any sofa with orignl wrnty bill more than 1000cs of colour with design pick any sofa 3+1+1 with customized colour and design of your choice pick",
"location": "dehli",
"price": 7499,
"category": "Sofa Sets",
"id": 58
},
{
"image": "https://teja9.kuikr.com/i5/20230221/BRAND-NEW-SOFA-SET-FOR-SALE-VB201705171774173-ak_LWBP1953216319-1676970054_lg.webp",
"title": "BRAND NEW SOFA SET FOR SALE",
"desc": "all types of furniture available in best price",
"location": "hydrabad",
"price": 14999,
"category": "Sofa Sets",
"id": 59
},
{
"image": "https://teja9.kuikr.com/i6/20230220/Call-or-Whatapps---9910168619-all-types-of-l-Shape-sofa-set---bed-Available-Delhi---NCR-----Sofa-Sets-3-2-1-11999-Brand-New-Dealer-New-VB201705171774173-ak_LWBP1384560959-1676883470.webp",
"title": "Call or Whatapps @ 9910168619 all types of l Shape sofa set & bed Available Delhi & NCR",
"desc": "Call or Whatapps @ 9910168619 all types of l Shape sofa set & bed Available Delhi & NCR Genuine Product Whole price available Bed Start 11999 or sofa set start 15999 rs Factory Available Contact person name : Waseem khan Company name : SK Home Decor.in WWW.skhomedecor.in email id : contact@skhomedecor.in Address :589 Devli Bandh Road Sangam Vihar New Delhi 110080",
"location": "dehli",
"price": 11999,
"category": "Sofa Sets",
"id": 60
},
{
"image": "https://teja9.kuikr.com/i4/20221222/-9164--160106---All-Brand-New-3-1-1-sofaset-directly-from-Factry-VB201705171774173-ak_LWBP154772544-1671682958.webp",
"title": "(9164 -160106)- All Brand New 3+1+1 sofaset directly from Factry.",
"desc": "Please call or whatsapp at (9161 -160106). Sofa set(3+1+1) price starting from 6999. Excellent condition with standard warranty. Complete brand new Foam Cushion seat sofa sets Customized color and size sofa sets available here. All color options are available. Fabric choice - Leather , floral , velvet , printed , jute and upholstery fabrics Please call (9161 -160106) - us for more design and details",
"location": "hydrabad",
"price": 4999,
"category": "Sofa Sets",
"id": 61
},
{
"image": "https://teja9.kuikr.com/i5/20230215/New-design-l-shape-corner-sofa-set-3years-warrantysofa-dining-avble-VB201705171774173-ak_WBP932708071-1676458151.png",
"title": "New design l shape corner sofa set 3years warranty.sofa dining avble",
"desc": "* Furniture Factory Unit* The Style You Desire to The Price You Deserve. Get a Massive Discount between 10% Upto 40%, Also provide warranty Upto 15 years on Furniture Our main goal Is to provide best premium quality furniture to the Customer, As we raise Of Pacific & Creating a Good Number Of Loyal Customers... [ Customer who can't able to visit] Don't worry Will Do client Home visit to demo Explanation Free Transportation Service Tc. We do Home Interior & Office interior. Manufacture Various Types Of Furniture ?",
"location": "dehli",
"price": 24000,
"category": "Sofa Sets",
"id": 62
},
{
"image": "https://teja9.kuikr.com/i4/20230210/7-Seater-Sofa-in-good-condition-VB201705171774173-ak_LWBP17579367-1676046502.webp",
"title": "Pure Burma Teakwood 3+1+1 Wooden Sofaset with cushions in mint condition for sale. Contact 9886114924",
"desc": "Pure Burma Teakwood 3+1+1 Wooden Sofaset with cushions in mint condition for sale. Contact 9886114924",
"location": "hydrabad",
"price": 29999,
"category": "Sofa Sets",
"id": 63
},
{
"image": "https://teja9.kuikr.com/i4/20230210/Pure-Burma-Teakwood-3-1-1-Wooden-Sofaset-with-cushions-in-mint-condition-for-sale-Contact-9886114924-VB201705171774173-ak_LWBP63417834-1676014528_lg.webp",
"title": "Pure Burma Teakwood 3+1+1 Wooden Sofaset with cushions in mint condition for sale. Contact 9886114924.",
"desc": "It's pure Burma Teakwood Sofaset with cushions in mint condition for sale. Its 3+1+1 Sofaset with Carvings. Its very strong and durable to use. For more details contact on given no .",
"location": "hydrabad",
"price": 12500,
"category": "Sofa Sets",
"id": 64
},
{
"image": "https://teja9.kuikr.com/i6/20230223/Spacious-and-strong-office-table-VB201705171774173-ak_LWBP2073602147-1677146143.webp",
"title": "Spacious and strong office table",
"desc": "Spacious and strong office table",
"location": "hydrabad",
"price": 3000,
"category": "Office Tables",
"id": 65
},
{
"image": "https://teja9.kuikr.com/i6/20230223/Foldable-Table-for-WFH-VB201705171774173-ak_LWBP361184309-1677142268_lg.webp",
"title": "Foldable Table for WFH",
"desc": "Foldable Table for WFH",
"location": "dehli",
"price": 300,
"category": "Office Tables",
"id": 66
},
{
"image": "https://teja9.kuikr.com/i5/20230208/5-2-Feet-Office-Table-s-VB201705171774173-ak_WBP143417956-1675839232.png",
"title": "5/2 Feet Office Table's",
"desc": "5/2 Feet Office Table's",
"location": "hydrabad",
"price": 4500,
"category": "Office Tables",
"id": 67
},
{
"image": "https://teja9.kuikr.com/i6/20230212/8431451394-Brand-new-25-6feet-office-table-direct-from-factory-VB201705171774173-ak_WBP1168836236-1676204067.png",
"title": "8431451394 Brand new 2.5/6feet office table direct from factory",
"desc": "Call/Whtsup (8431451394) We are one of the leading 2.5/6ft office table manufacturers in Bangalore. We also deals in other furniture poroducts, customised option also available on your request,Dealers may contact for wholesale purchase.Discount offer also available,Warranty of 5 year of every products.Professional service with on time delivery for Bangalore ,all types of payment mode accepted kindly contact directly for more info,",
"location": "dehli",
"price": 6500,
"category": "Office Tables",
"id": 68
},
{
"image": "https://teja9.kuikr.com/i5/20230128/A2A-FURNITURE-CALL-AND-WHATSAPP-ON-9620608922-VB201705171774173-ak_LWBP1626133015-1674900146.webp",
"title": "A2A FURNITURE CALL AND WHATSAPP ON 9620608922",
"desc": "Brand new office desks available for more information call me on 9620608922",
"location": "Bangalore",
"price": 2300,
"category": "Office Tables",
"id": 69
},
{
"image": "https://teja9.kuikr.com/i6/20230223/WFH-table-VB201705171774173-ak_LWBP1191974285-1677137518.webp",
"title": "WFH table",
"desc": "10,000",
"location": "hydrabad",
"price": 10000,
"category": "Office Tables",
"id": 70
},
{
"image": "https://teja9.kuikr.com/i5/20230125/42-Feet-Office-Tables------Engineered-Wood--Particle-Board--Merry-Fair-2800-Almost-Like-New-Dealer-Used-VB201705171774173-ak_WBP1860628858-1674627186.png",
"title": "4*2 Feet Office Tables",
"desc": "We Sales all type of Office Products like Office Tables, Chairs, Conference table,pedestal box & work station featherlite company etc... Call me or whatsApp me for best price and location on 8919230774 Thanks for giving your valuable time to us Location:- at Moosapet, Kukatpally,Hyd-18. From A.S Traders",
"location": "hydrabad",
"price": 2800,
"category": "Office Tables",
"id": 71
},
{
"image": "https://teja9.kuikr.com/i6/20221019/Modular-workstation-for-best-price-7975119337-VB201705171774173-ak_LWBP2007661145-1666165542.webp",
"title": "Modular workstation for best price. 7975119337",
"desc": "Modular workstation Size =2/3feet Best quality material Free installation",
"location": "dehli",
"price": 2499,
"category": "Office Tables",
"id": 72
},
{
"image": "https://teja9.kuikr.com/i5/20230218/Study---Computer-Table--Office-Desk-with-Drawer-VB201705171774173-ak_LWBP227612938-1676700432.webp",
"title": "Study & Computer Table, Office Desk with Drawer",
"desc": "1.5 year old BLUEWUD Amalet Engineered Wood Study & Computer Table, Office Desk with Drawer (Wenge)",
"location": "hydrabad",
"price": 3500,
"category": "Office Tables",
"id": 73
},
{
"image": "https://teja9.kuikr.com/i6/20230217/Big--Spacious-Office-Table-For-Sale--No-Spam-Please--ak_LWBP75900281-1676627193_lg.webp",
"title": "Big, Spacious Office Table For Sale (No Spam Please)",
"desc": "I would like to sell my office table. It is a big office table with proper electric wiring holes for computer/laptop. Price is slightly negotiable. Please note that you have to bring your own transport for pick up",
"location": "dehli",
"price": 6000,
"category": "Office Tables",
"id": 74
},
{
"image": "https://teja9.kuikr.com/i5/20230222/Godrej-full-steel-Almira-VB201705171774173-ak_LWBP1484176087-1677088026.webp",
"title": "Godrej full steel Almira with safe locker facility",
"desc": "Godrej full steel Almira with safe locker facility",
"location": "hydrabad",
"price": 18000,
"category": "Almirah",
"id": 75
},
{
"image": "https://teja9.kuikr.com/i5/20230222/office-Racks-VB201705171774173-ak_LWBP318729295-1677073457.webp",
"title": "Godrej full steel Almira",
"desc": "Godrej full steel Almira with safe locker facility",
"location": "dehli",
"price": 18000,
"category": "Almirah",
"id": 76
},
{
"image": "https://teja9.kuikr.com/i4/20230212/BRAND-NEW-ALMRAH-FOR-SALE-VB201705171774173-ak_LWBP1262090607-1676199917.webp",
"title": "BRAND NEW ALMRAH FOR SALE",
"desc": "all types of alimirah and furniture available for sale in wholesale price",
"location": "hydrabad",
"price": 7999,
"category": "Almirah",
"id": 77
},
{
"image": "https://teja9.kuikr.com/i5/20230222/Godrej-full-steel-Almira-VB201705171774173-ak_LWBP1484176087-1677088026.webp",
"title": "Godrej full steel Almira",
"desc": "Godrej full steel Almira",
"location": "hydrabad",
"price": 18000,
"category": "Almirah",
"id": 78
},
{
"image": "https://teja9.kuikr.com/i4/20230212/BRAND-NEW-ALMRAH-FOR-SALE-VB201705171774173-ak_LWBP501228852-1676199917.webp",
"title": "BRAND NEW ALMRAH FOR SALE",
"desc": "all types of alimirah and furniture available for sale in wholesale price",
"location": "dehli",
"price": 7999,
"category": "Almirah",
"id": 79
},
{
"image": "https://teja9.kuikr.com/i6/20220706/8431451394-Brand-New-almirah-with-mirror-direct-from-factory-VB201705171774173-ak_LWBP614907578-1657097563_lg.webp",
"title": "8431451394 Brand New almirah with mirror direct from factory",
"desc": "Call/Whtsup (8431451394) We are one of the leading almirah with mirror manufacturers in Bangalore. We also deals in other furniture poroducts, customised option also available on your request,Dealers may contact for wholesale purchase.Discount offer also available,Warranty of 1 year of every products.Professional service with on time delivery for Bangalore ,all types of payment mode accepted kindly contact directly for more info,",
"location": "hydrabad",
"price": 7800,
"category": "Almirah",
"id": 80
},
{
"image": "https://teja9.kuikr.com/i5/20230121/Immediate-sale---Godrej-Slimline-interio-3-door-wardrobe-with-mirror-VB201705171774173-ak_WBP30969679-1674318718.png",
"title": "Immediate sale - Godrej Slimline interio 3 door wardrobe with mirror",
"desc": "Godrej interio Full metal wardrobe for sale with 3 door and mirror. Almost never used. The original warranty and bill is available. Original price is 48000. bill attached",
"location": "dehli",
"price": 35000,
"category": "Almirah",
"id": 81
},
{
"image": "https://teja9.kuikr.com/i5/20230219/Sell-cupboard-VB201705171774173-ak_LWBP978818737-1676785104_lg.webp",
"title": "Sell cupboard",
"desc": "it's have 3 doors N one mirror, good condition",
"location": "hydrabad",
"price": 15000,
"category": "Almirah",
"id": 82
},
{
"image": "https://teja9.kuikr.com/i5/20230216/portable-almirah-VB201705171774173-ak_WBP125431348-1676559291.png",
"title": "Portable almirah",
"desc": "AaisuNet 3-Door Folding Portable Clothe Almirah Collapsible Wardrobe/Closet for Bedroom, 8 Racks Name: AaisuNet 3-Door Folding Portable Clothe Almirah Collapsible Wardrobe/Closet for Bedroom, 8 Racks Material: Metal No. of Compartments: More than 5",
"location": "dehli",
"price": 2100,
"category": "Almirah",
"id": 83
},
{
"image": "https://teja9.kuikr.com/i6/20230124/Steel-cupboard-VB201705171774173-ak_LWBP466809950-1674562053_lg.webp",
"title": "Steel cupboard",
"desc": "New cupbord and all cupbord good condection",
"location": "hydrabad",
"price": 5000,
"category": "Almirah",
"id": 84
},
{
"image": "https://teja9.kuikr.com/i6/20230208/--9773682559--WhatsApp-me-for-any-information-65-inch-4K-Ultra-HD-Android-Smart-LED-TV-X65---L65M6-RA-VB201705171774173-ak_WBP1961407274-1675847557.png",
"title": "[ 97736.82559 ]WhatsApp me for any information 65 inch 4K Ultra HD Android Smart LED TV X65 | L65M6-RA",
"desc": "Display:LED display, 4K Ultra HD digital video format, 3840x2160 pixels resolution, 60 hertz refresh rate TV Features:Android OS, 2 GB RAM, 16 GB internal memory, Mali G52 MP2 Graphics processor Supported Apps:Netflix, Youtube, Prime Video, Hotstar, SonyLiv Audio:30 watts sound output, Built-in Stereo Speakers With Dolby Atmos pass through eARC configuration allows them to produce a immersive stereo sound effect like a theater at home. speakers, DTS Virtual: X | DTS-HD sound configuration, Stereo Speakers Connectivity:3 HDMI ports, 2 USB ports, Wi-Fi Warranty:1 year comprehensive warranty and 1 year additional warranty",
"location": "hydrabad",
"price": 15999,
"category": "TV",
"id": 85
},
{
"image": "https://teja9.kuikr.com/i5/20230223/call-on-8923270494-for-Vu-126-cm--50-Inches--Premium-4K-Series-Smart-Android-LED-TV-50PM--Grey--VB201705171774173-ak_LWBP128571724-1677152303.webp",
"title": "Call on 8923270494 for Vu 126 cm (50 Inches) Premium 4K Series Smart Android LED TV 50PM (Grey)",
"desc": "Call on 8923270494 for Vu 126 cm (50 Inches) Premium 4K Series Smart Android LED TV 50PM (Grey)",
"location": "hydrabad",
"price": 17500,
"category": "TV",
"id": 86
},
{
"image": "https://teja9.kuikr.com/i4/20230218/Sony-55x-80j-VB201705171774173-ak_WBP1660152525-1676723763.png",
"title": "Sony 55x 80j",
"desc": "Display:LED display, 4K Ultra HD digital video format, 3840x2160 pixels resolution, 60 hertz refresh rate TV Features:Android OS, 2 GB RAM",
"location": "dehli",
"price": 60000,
"category": "TV",
"id": 87
},
{
"image": "https://teja9.kuikr.com/i6/20230214/Sony-Bravia-108-cm--43-inches--4K-Ultra-HD-Smart-LED-Google-TV-KD-43X74K--Black--VB201705171774173-ak_WBP1295504549-1676379229.png",
"title": "Sony Bravia 108 cm (43 inches) 4K Ultra HD Smart LED Google TV KD-43X74K (Black)",
"desc": "Screen Size 43 Inches Brand Sony Supported Internet Services Netflix, Zee5, Hoichoi, Amazon Prime Video, Voot, SonyLiv, Disney+Hotstar, & Many More Display Technology LED Resolution 4K Refresh Rate 60 Hz Special Feature",
"location": "hydrabad",
"price": 130000,
"category": "TV",
"id": 88
},
{
"image": "https://teja9.kuikr.com/i6/20230220/smart-LED-TV-Samsung-company-49inch-VB201705171774173-ak_WBP1767854195-1676879480.png",
"title": "Smart LED TV Samsung company 49inch",
"desc": "smart LED TV Samsung company available available available available available available",
"location": "dehli",
"price": 9000,
"category": "TV",
"id": 89
},
]
const Card2 = () => {
   
    return (
        <>
            <Box display={"flex,block"} mt="20px" boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} backgroundColor={"white"}  height="min-content" h="406px" >

                <Flex textAlign={"center"} justifyContent={'space-between'} pl="10px" h="40px">

                    <Text>
                    Home & Lifestyle

                    </Text>
                    <a href="" style={{ color: "#4ba7eb", textDecoration: "underline",margin:"15px" }}>View All Results
                       </a>


                </Flex>



              
                <Box w={{ base: '100%', md: '100%', lg: '100%' }} width={"100%"} height="310px" margin="auto " mt="10px"  >
                    <Carousel responsive={responsive}
                        swipeable={false}
                        draggable={false}
                      
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
         









            </Box>
        </>

    )
}

export default Card2