import React from 'react'
import "./slider.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Link } from 'react-router-dom';
let sliderArrary = [
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "All Furnitures",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
        title: "All Electronics",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png",
        title: "Sofa Sets",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/bed.png",
        title: "Bed Sets",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png",
        title: "Wardrobes",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
        title: "TVs",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
        title: "Laptops",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png",
        title: "Refrigerators",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
        title: "Recliners",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/dining-tables.png",
        title: "Dining Tables",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/office-furnitures.png",
        title: "Office Furnitures",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/washing-machine.png",
        title: "Washing Machine",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/air-conditioner.png",
        title: "Air Conditioner",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/speakers.png",
        title: "Speakers",
        link: "/products",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Gaming_Consoles_desktop.png",
        title: "Gaming  Consoles",
        link: "/products",
    }
]
function Slider() {
  
  return (
    
    <Swiper
        spaceBetween={72}
        freeMode={true}
        slidesPerView={7}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation,  Mousewheel, Keyboard]}
        className="mySwiper"
      >

{sliderArrary.map((el) => {
                    return (
                           
                         <SwiperSlide >                 
                             <Link to="/products">
                           
                            <div className='P_image_div'>  <div className='p_image'>  <img src={el.img} /></div></div>
                              
                            <p style={{marginTop:"0px",fontWeight:"600"}}>{el.title}</p>
                         
                            </Link>
                            </SwiperSlide>
                    )
                })}
       
      </Swiper>
    
    )

  }



export default Slider