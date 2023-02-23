import React from 'react'
import "./HomePage.css"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Box } from '@chakra-ui/react';
import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import { BiChevronRight } from "react-icons/bi";

let sliderArrary = [
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    },
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "title",
        link: "link",
    }
]
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
// https://teja10.kuikr.com/escrow/assets/image/quikrBazaar/MT_links_bg.png
//https://teja10.kuikr.com/escrow/assets/image/quikrBazaar/HL_links_bg.png
//https://teja10.kuikr.com/escrow/assets/image/quikrBazaar/EL_links_bg.png
function HomePage() {
    
    return (
        <div id="P_HompageContainer">
            <div className='P_div_Title'>
                <h1 className='P_Title'> Most Popular Products</h1>
            </div>

{/*  
            <Carousel responsive={responsive} 
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  containerClass="carousel-container"
    >
    {sliderArrary.map((el) => {
                    return (
                         <>                     
                                <a href={el.link}>
                            <div className='P_image_div'>  <div className='p_image'>  <img src={el.img} /></div></div>
                              
                               
                            </a>
                            <p>{el.title}</p>
                            </>

                    )
                })}
</Carousel> */}


          <div>
          <h1 className='P_Title_2'> Buy and Sell from 1200+ Cities Across India</h1>
          </div>
            
             <div  className='P_card'>
             
              <div className='p_div_card' >
              <div className='p_img_div'>
                <img className='p_img' src={img1} alt="" />
              </div>
              <ul style={{padding:"0px 15px"}}>
                <li>
                    <a href="">Used Mobiles
                        <i><BiChevronRight/></i>
                    </a>
                </li>
             
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
              
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
            
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
            
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
              </ul>
                  
            </div>
            <div className='p_div_card'>
              <div className='p_img_div'>
                <img className='p_img' src={img2} alt="" />
              </div>
              <ul style={{padding:"0px 15px"}}>
                <li>
                    <a href="">Used Mobiles
                        <i><BiChevronRight/></i>
                    </a>
                </li>
             
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
              
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
            
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
            
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
                 <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
              </ul>
                  
            </div>
            <div className='p_div_card'>
              <div className='p_img_div'>
                <img className='p_img' src={img3} alt="" />
              </div>
              <ul style={{padding:"0px 15px"}}>
                <li>
                    <a href="">Used Mobiles
                        <i><BiChevronRight/></i>
                    </a>
                </li>
             
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
              
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
            
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
            
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
                <li>
                    <a href="">Used Mobiles
                          <i><BiChevronRight/></i>
                    </a>
                </li>
              </ul>
                  
            </div>
            </div>

















          
         
                
            </div>
           
      
    )
}

export default HomePage