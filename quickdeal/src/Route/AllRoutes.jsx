
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

  
    
    



