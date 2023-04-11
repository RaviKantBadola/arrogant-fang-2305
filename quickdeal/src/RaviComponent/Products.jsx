import React from 'react'
import Footer from '../Piyush/Footer/Footer'

import Filter from './Filter'
import ProductList from './ProductList'

const Products = () => {
  return (
<>
<div style={{display:"flex",paddingTop:"100px"}}>
   <div style={{width:"250px"}}>
    <Filter/>
   </div>
   <div>
   
   <div >
    <ProductList/>
   </div>
   </div>
   </div>
   <Footer/>
   </>
 
  )
}



export default Products
