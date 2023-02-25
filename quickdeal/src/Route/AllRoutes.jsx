import {Routes,Route} from "react-router-dom"
import LoginDialog from "../Component/LoginDialog";
import Home from "../Pages/Home";
 
import Signup from "./Signup";
function AllRoutes() {
  return <div>{/* Add Home, Login and dashboard  */}
   <Routes>
     <Route path = "/" element ={<Home/>} ></Route>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/login" element={<LoginDialog/>} />
  
    
    
     
  </Routes>
  
  </div>;
}

export default AllRoutes;
