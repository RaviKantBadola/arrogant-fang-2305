import React from "react";
import "./product.css"
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons"
import Footer from "../Piyush/Footer/Footer";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingleProduct } from '../RaviComponent/Products-Redux/action';



function Product() {



    const { id } = useParams();
  
    const product = useSelector((store) => store.product.products);
    const dispatch = useDispatch();
    useEffect(() => {
     dispatch(getSingleProduct(id))

    },[]);
    return (

        <>
            <div className="detailpage" style={{paddingTop:"90px"}}>

                <div className="imagebox">
                    <img className="image" src={product.image} alt="" />
                    <div className="mainbox">
                        Ad Details
                        <div className="twodivdetail">
                            <div className="boxone">
                                <div className="model">
                                    <p>Ad ID</p>
                                    <p>Model</p>
                                    <p>Physical Condition</p>
                                    <p>Purchase Year</p>
                                    <p>Invoice</p>
                                </div>
                                <div className="modeldetail">
                                    <h2>{ Math.floor((Math.random() * 5) + 1)}</h2>
                                    <h2>{product.category}</h2>
                                    <h2>Excellent</h2>
                                    <h2>2020</h2>
                                    <h2>Not Available</h2>
                                </div>
                            </div>

                            <div className="boxone">
                                <div className="model">
                                    <p>Brand Name</p>
                                    <p>Location</p>
                                    <p>Condition</p>
                                    <p>Color</p>
                                    <p>Seller Type</p>

                                </div>
                                <div className="modeldetail">
                                    <h2>{product.title}</h2>
                                    <h2>{product.location}</h2>
                                    <h2>New</h2>
                                    <h2>{product.color||"NA"}</h2>
                                    <h2>Individual</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="secmainbox">
                        Description
                        <p>{product.desc}</p>
                    </div>

                    <div className="fourdetailbox">
                        Buyer Guidelines
                        <div className="arroall">
                            <p><ArrowRightIcon></ArrowRightIcon> Be careful when paying offline</p>
                            <p><ArrowRightIcon></ArrowRightIcon> Beware of ads with unrealistic prices, lookalikes or clone products</p>
                            <p><ArrowRightIcon></ArrowRightIcon> Chat and ask questions to be clear on product details</p>
                            <p><ArrowRightIcon></ArrowRightIcon> Do not deposit/transfer money to bank or any third party payment gateways without verifying the credentials</p>
                        </div>
                    </div>

                </div>

                <div className="detail">
                    <div className="twobuttonadd">
                        
                    <form action='https://getform.io/f/ec87ae49-d284-4689-b02f-687b096f66db'
                     method='POST' className="formfill">
                        <h1 className="enterdetail">Enter Your Details </h1>
                        
                            <input type="text" name="emaill" placeholder="Enter Your Email" required/>
                            <input type="text" name="fullnamee" placeholder="Full Name" required/>
                            <input type="text" name="eeeeeeee" placeholder="Contact Number" required/>
                            <input type="text" name="cityf" placeholder="Departure City" required/>
                            <input type="date" name="dateee" required/>
                        
                        <div className="amt">
                            <h2>Amount</h2>
                            <h2>{product.price}</h2>
                        </div>
                        <p className="tac">Tax and discount are calculated at checkout </p>
                       
                            <button className="btnsubtop" type="submit" >Pay Now</button>

                        
    
                      </form>
                    </div>
                    <div className="imgcontact">
                        <img src="https://teja9.kuikr.com/core/clsfd/assets/ic-get-all-details-2x.png" alt="" />
                        <img src="https://teja9.kuikr.com/core/clsfd/assets/ic-schedule-visit-bazaar-2x.png" alt="" />
                        <img src="https://teja9.kuikr.com/core/clsfd/assets/ic-negotiate-2x.png" alt="" />
                    </div>


                    <div className="threemainbox">
                        Posted By
                        <form action='https://getform.io/f/93499645-a07a-4eff-b445-558f862088f6'
                            method='POST'
                            className='formdetail'>

                            <input type="text" name='name'
                                placeholder='Enter Your Name'

                                className='' />

                            <input type="text" name='email'
                                placeholder='Enter Your Email'
                                className='' />

                            <input type="number" name='mobile'
                                placeholder='Enter Your Mobile Number'
                                className='' />

                            <textarea name='message' rows="10"
                                placeholder='Enter Your Message'
                                className='chathere'
                            ></textarea>

                            <button className='btnsub'
                            >Chat Now</button>

                        </form>
                    </div>


                </div>

            </div>
            {/* Botttom part start here */}
            <div className="bottomallcard">
                <h1 className="simbt">Similar Ads</h1>
                <div className="boxonebot">
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i4/20230223/Iphone-14-Pro-Max-CH-Concept-High-quality-4-64gb-real-with-volte-all-over-india-cod-available-VB201705171774173-ak_LWBP1150423605-1677124455_gv.jpeg" alt="" />
                        <p>50% Holi discount Contact </p>
                        <h1>Rs.2000</h1>
                    </div>
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i4/20230223/Iphone-14-Pro-Max-CH-Concept-High-quality-4-64gb-real-with-volte-all-over-india-cod-available-VB201705171774173-ak_LWBP1150423605-1677124455_gv.jpeg" alt="" />
                    <p>50% Holi discount Contact </p>
                        <h1>Rs.2000</h1>
                    </div>
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i4/20230223/Iphone-14-Pro-Max-CH-Concept-High-quality-4-64gb-real-with-volte-all-over-india-cod-available-VB201705171774173-ak_LWBP1150423605-1677124455_gv.jpeg" alt="" />
                    <p>50% Holi discount Contact </p>
                        <h1>Rs.2000</h1>
                    </div >
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i4/20230223/Iphone-14-Pro-Max-CH-Concept-High-quality-4-64gb-real-with-volte-all-over-india-cod-available-VB201705171774173-ak_LWBP1150423605-1677124455_gv.jpeg" alt="" />
                    <p>50% Holi discount Contact </p>
                        <h1>Rs.2000</h1>
                    </div>
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i4/20230223/Iphone-14-Pro-Max-CH-Concept-High-quality-4-64gb-real-with-volte-all-over-india-cod-available-VB201705171774173-ak_LWBP1150423605-1677124455_gv.jpeg" alt="" />
                    <p>50% Holi discount Contact</p>
                        <h1>Rs.2000</h1>
                    </div>
                </div>

                <div className="boxtwoesecbot">
                    <h1 className="simbt">You may also like</h1>
                    <div className="boxtwibot">
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i5/20230222/Vu-43--full-HD-smart-tv-VB201705171774173-ak_LWBP1092795727-1677076207_gv.jpeg" alt="" />
                        <p>Urgent sell Tv </p>
                        <h1>Rs.20,000</h1>
                    </div>
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i5/20230222/Vu-43--full-HD-smart-tv-VB201705171774173-ak_LWBP1092795727-1677076207_gv.jpeg" alt="" />
                        <p>Urgent sell Tv </p>
                    <h1>Rs.20,000</h1>
                    </div>
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i5/20230222/Vu-43--full-HD-smart-tv-VB201705171774173-ak_LWBP1092795727-1677076207_gv.jpeg" alt="" />
                    <p>Urgent sell Tv </p>
                    <h1>Rs.20,000</h1>
                    </div >
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i5/20230222/Vu-43--full-HD-smart-tv-VB201705171774173-ak_LWBP1092795727-1677076207_gv.jpeg" alt="" />
                        <p>Urgent sell Tv </p>
                    <h1>Rs.20,000</h1>
                    </div>
                    <div className="imgherebt">
                        <img src="https://teja9.kuikr.com/i4/20230223/Iphone-14-Pro-Max-CH-Concept-High-quality-4-64gb-real-with-volte-all-over-india-cod-available-VB201705171774173-ak_LWBP1150423605-1677124455_gv.jpeg" alt="" />
                        <p>Urgent sell Tv </p>
                        <h1>Rs.20,000</h1>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Product