import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import ProductList from './ProductList'
import Sort from './Sort'
const ProductsSort = () => {
  return (
   <Wrapper>
    <div className='container grid grid-filter-column'>
   <div style={{width:"200px",marginLeft:"500px",backgroundColor:"ffff",border:"1px solid"}}>
    <Filter/>
   </div>
   <section className='product-view--sort'>
    <div className='sort-filter'>
    <Sort/>
    </div>
    <div className='main-product'>
  <ProductList/>
    </div>
   </section>
    </div>
   </Wrapper>
  )
}
const Wrapper = styled.section`
    .grid-filter-column{
        grid-template-columns: 0.2fr 1fr;
        width:"60%";
        margin:auto;
        border: 1px solid red;
    }
`

export default ProductsSort
