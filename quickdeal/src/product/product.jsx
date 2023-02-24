import React from "react";
import "./product.css"

function Product() {
    return (


        <div className="detailpage">

            <div className="imagebox">
                <img className="image" src="https://rukminim1.flixcart.com/image/832/832/xif0q/shirt/t/a/z/m-wmsh0516-wrogn-original-imaghyrtm6acru8r.jpeg?q=70" alt="" />
            </div>

            <div className="detail">
                <h1>I want to sell my brand new earbuds urgent need money contact me burging also</h1>
                <h1>₹2,000</h1>

            
                <div className="twobuttonadd">
                <form className="formfill">
                  <input type="text" placeholder="Enter Your Email"/>
                  <input type="text" placeholder="Full Name" />
                  <input type="text" placeholder="Contact Number"/>
                  <input type="text" placeholder="Departure City"/>
                  <input type="date" />
                </form>
                    {/* <button className="debut">Deatil</button>
                    <button className="carbut">Add Card</button> */}
                </div>
                <div className="imgcontact">
                    <img src="https://teja9.kuikr.com/core/clsfd/assets/ic-get-all-details-2x.png" alt="" />
                    <img src="https://teja9.kuikr.com/core/clsfd/assets/ic-schedule-visit-bazaar-2x.png" alt="" />
                    <img src="https://teja9.kuikr.com/core/clsfd/assets/ic-negotiate-2x.png" alt="" />
                </div>

            </div>
        </div>

    )
}

export default Product