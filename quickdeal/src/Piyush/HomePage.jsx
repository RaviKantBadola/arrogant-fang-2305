import React from 'react'
import "./HomePage.css"

let sliderArrary = [
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

function HomePage() {
    const imgNum=0
    return (
        <div id="P_HompageContainer">
            <div className='P_div_Title'>
                <h1 className='P_Title'> Most Popular Products</h1>
            </div>

            <div className= 'P_slider_div'>
            <div className= 'P_slider'>
            {sliderArrary.map((el) => {
                    return (
                        <div className='P_slider_div_array'>
                            <a href={el.link}>
                                <div className='p_image'>  <img src={el.img} /></div>
                               
                            </a>
                            <p>{el.title}</p>
                        </div>
                    )
                })}
            </div>
                
            </div>
            <div className='P_nav_btn P_btn_next'></div>
            <div className='P_nav_btn P_btn_prev'></div>
        </div>
    )
}

export default HomePage