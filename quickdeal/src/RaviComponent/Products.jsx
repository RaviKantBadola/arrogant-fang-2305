import React from 'react'

import Filter from './Filter'
import ProductList from './ProductList'

const ProductsSort = () => {
  return (
<>
<div style={{display:"flex"}}>
   <div style={{width:"250px"}}>
    <Filter/>
   </div>
   <div>
   
   <div >
    <ProductList/>
   </div>
   </div>
   </div>
   </>
 
  )
}



export default ProductsSort
