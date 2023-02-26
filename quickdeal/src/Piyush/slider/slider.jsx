import React from 'react'
import "./slider.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
let sliderArrary = [
    {
        img: "https://teja9.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
        title: "All Furnitures",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
        title: "All Electronics",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png",
        title: "Sofa Sets",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/bed.png",
        title: "Bed Sets",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png",
        title: "Wardrobes",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
        title: "TVs",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
        title: "Laptops",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png",
        title: "Refrigerators",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
        title: "Recliners",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/dining-tables.png",
        title: "Dining Tables",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/office-furnitures.png",
        title: "Office Furnitures",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/washing-machine.png",
        title: "Washing Machine",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/air-conditioner.png",
        title: "Air Conditioner",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/speakers.png",
        title: "Speakers",
        link: "link",
    },
    {
        img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Gaming_Consoles_desktop.png",
        title: "Gaming  Consoles",
        link: "link",
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
                           
                         <SwiperSlide>                 
                                <a href={el.link}>
                            <div className='P_image_div'>  <div className='p_image'>  <img src={el.img} /></div></div>
                              
                            <p style={{marginTop:"0px",fontWeight:"600"}}>{el.title}</p>
                            </a>
                            
                            </SwiperSlide>
                    )
                })}
       
      </Swiper>
    
    )

  }



export default Slider