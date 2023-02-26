import React from 'react'
import "./HomePage.css"

import img1 from "./img1.png"
import img2 from "./img2.png"
import img3 from "./img3.png"
import { BiChevronRight } from "react-icons/bi";
import Footer from './Footer/Footer';
import Slider from './slider/slider'
import Card from './slider2/card'
import Card2 from './slider2/card2'
import Card3 from './slider2/card3'
import Navbar from "../Component/Navbar"


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
    <>
    
   
      <div id="P_HompageContainer" >
        <div className='P_div_Title'>
          <h1 className='P_Title'> Most Popular Products</h1>
        </div>

        <Slider />

        <div>
          <h1 className='P_Title_2'> Buy and Sell from 1200+ Cities Across India</h1>
        </div>

        <div className='P_card'>

          <div className='p_div_card' >
            <div className='p_img_div'>
              <img className='p_img' src={img1} alt="" />
            </div>
            <ul style={{ padding: "10px 15px" }}>
              <li>
                <a href="">Used Mobiles
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Tablets
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Accessories
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Wearables
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">View All
                  <i><BiChevronRight /></i>
                </a>
              </li>
            </ul>

          </div>
          <div className='p_div_card'>
            <div className='p_img_div'>
              <img className='p_img' src={img2} alt="" />
            </div>
            <ul style={{ padding: "10px 15px" }}>
              <li>
                <a href="">Furniture & Decor
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Sports, Hobbies & Fashion
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Luggages
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Footwear
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Household Items
                  <i><BiChevronRight /></i>
                </a>
              </li>
              <li>
                <a href="">View All
                  <i><BiChevronRight /></i>
                </a>
              </li>
            </ul>

          </div>
          <div className='p_div_card'>
            <div className='p_img_div'>
              <img className='p_img' src={img3} alt="" />
            </div>
            <ul style={{ padding: "10px 15px" }}>
              <li>
                <a href="">Laptop & Accessories
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">TV - DVD - Multimedia
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Camera & Accessories
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Home Appliances
                  <i><BiChevronRight /></i>
                </a>
              </li>

              <li>
                <a href="">Kitchen Appliances
                  <i><BiChevronRight /></i>
                </a>
              </li>
              <li>
                <a href="">View All
                  <i><BiChevronRight /></i>
                </a>
              </li>
            </ul>

          </div>
        </div>

        <Card />

        <Card2 />
        <Card3 />

      </div>
      <Footer />
    </>

  )
}

export default HomePage