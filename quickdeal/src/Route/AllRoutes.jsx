import { Route, Routes } from "react-router";
import LoginDialog from "../Component/LoginDialog";
import HomePage from "../Piyush/HomePage";
import Signup from "../Component/Signup";
import ProductDetailPage from "../product/ProductDetailPage"
import Products from "../RaviComponent/Products"


function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
   <Routes>
     <Route path = "/" element ={<HomePage/>} ></Route>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/login" element={<LoginDialog/>} />
     <Route path="/products" element={<Products/>}/>
     <Route path="/singleproducts/:id" element={<ProductDetailPage/>}/>
 
  
  </Routes>

  </div>

    
}  

export default AllRoutes
