import React from 'react'
import "./footer.css"
import img from "../Footer/footer.png"
const Footer = () => {
    return (
        <div className='p_footer' >
            
            <div className='p_footer_2div'>
                <div className='p_footer_left'>
                   <div  className="p_footer_adiv">
                    
                   <ul style={{ display: "flex" }}>
                        <li>
                            <a href="">About Us</a>
                        </li>
                        <li>
                            <a href="">Contact Us</a>
                        </li>
                        <li>
                            <a href="">Careers</a>
                        </li>
                        <li>
                            <a href="">Quikr Videos</a>
                        </li>
                        <li>
                            <a href=""> Advertise With Us</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                        <li>
                            <a href="">Help</a>
                        </li>
                        <li>
                            <a href="">Premium Ads</a>
                        </li>
                    </ul>
                    <p className='p_p_aboutus'>

                        Widely known as India’s no. 1 online classifieds platform, Quikr is all about you. Our aim is to empower every person in the country to independently connect with buyers and sellers online. We care about you — and the transactions that bring you closer to your dreams. Want to buy your first car? We’re here for you. Want to sell commercial property to buy your dream home? We’re here for you. Whatever job you’ve got, we promise to get it done.
                    </p>
                   </div>
                   <div className='p_footer_buttondiv'>
                        <p>
                            At Quikr, you can buy, sell or rent anything you can think of.

                        </p>
                        <button>Post Free Ad</button>
                    </div>

                    <div className="p_footer-links" >
                        <a href="">Listing Policy</a>
                        <a href=""> Terms of Use</a>
                        <a href=""> Privacy Policy</a>
                        <a href="">Quikr Mobiles Policy</a>
                        <a href="">Quikr Brand Guidelines</a>
                        <a href="">Sitemap</a>
                        <a href="">News</a>
                    </div>
                    <div className="p_footer-links2" >
                        <p style ={{fontSize:"12px"}}>Other Brands: Commonfloor</p>
                        
                        <a href=""  style ={{marginLeft:"-80px"}} >Hiree</a>
                        <a href="" > Dazzlr</a>
                        <a href="">Realty Compass</a>
                        <a href="">Zefo</a>
                       
                    </div>
                </div>

                <div className='p_footer_right'>
                <div className="p_footer_right2">
                <ul>
                        <li>
                            <a href="">
                                Ahmedabad
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Bangalore
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Chandigarh
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Chennai
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Coimbatore
                            </a>
                        </li>
                        <li>
                            <a href="">
                            All Cities
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                            Delhi
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Gurgaon
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Hyderabad
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Jaipur
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Kochi
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">
                            Kolkata
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Lucknow
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Mumbai

                            </a>
                        </li>
                        <li>
                            <a href="">
                            Pune
                            </a>
                        </li>
                        <li>
                            <a href="">
                            Trivandrum
                            </a>
                        </li>
                    </ul>
                    
                </div>
                <div>
                        <img src={img} style={{width:'70%',marginTop:"20px"}} alt="" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Footer



    // 







