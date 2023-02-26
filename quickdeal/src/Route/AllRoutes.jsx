import {Routes,Route} from "react-router-dom"
import LoginDialog from "../Component/LoginDialog";
import Home from "../Pages/Home";
import Payment from "../RaviComponent/Payment";
import ProductDetails from "../RaviComponent/ProductDetailPage";
 import Products from "../RaviComponent/Products";
import Signup from "./Signup";
function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
   <Routes>
     <Route path = "/" element ={<Home/>} ></Route>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/login" element={<LoginDialog/>} />
     <Route path="/products" element={<Products/>}/>
     <Route path="/singleproducts/:id" element={<ProductDetails/>}/>
    <Route path="/payment" element={<Payment/>}/>
  
  </Routes>
  
  </div>;
}

export default AllRoutes;
