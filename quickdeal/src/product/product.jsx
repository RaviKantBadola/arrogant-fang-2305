import React from "react";
import "./product.css"
import { ArrowForwardIcon, ArrowRightIcon } from "@chakra-ui/icons"
function Product() {
    return (

        <>
            <div className="detailpage">

                <div className="imagebox">
                    <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/t/a/z/m-wmsh0516-wrogn-original-imaghyrtm6acru8r.jpeg?q=70" alt="" />
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
                                    <h2>364371221</h2>
                                    <h2>Redmi Go</h2>
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
                                    <p>Also Includes</p>
                                    <p>Seller Type</p>

                                </div>
                                <div className="modeldetail">
                                    <h2>Xiaomi</h2>
                                    <h2>Xiaomi</h2>
                                    <h2>New</h2>
                                    <h2>Charger,Data Cable</h2>
                                    <h2>Individual</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="secmainbox">
                        Description
                        <p>Description write herehkjdlkjgmlh;lgjh   ghjukjjhk</p>
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
                        <h1 className="enterdetail">Enter your Details </h1>
                        <form className="formfill">
                            <input type="text" placeholder="Enter Your Email" />
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Contact Number" />
                            <input type="text" placeholder="Departure City" />
                            <input type="date" />
                        </form>
                        <div className="amt">
                            <h2>Amount</h2>
                            <h2>Rs.00000</h2>
                        </div>
                        <p className="tac">Tax and discount are calculated at checkout </p>
                        <button className="btnsubtop" type="submit" >Next <ArrowForwardIcon></ArrowForwardIcon></button>
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
                </div>
            </div>
        </>
    )
}

export default Product