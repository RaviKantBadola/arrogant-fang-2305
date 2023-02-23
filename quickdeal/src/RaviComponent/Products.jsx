import React from 'react'
import styled from 'styled-components'
import Filter from './Filter'
import ProductList from './ProductList'
import Sort from './Sort'
const ProductsSort = () => {
  return (
   <Wrapper>
    <div className='container grid grid-filter-column'>
   <div style={{width:"250px",backgroundColor:"ffff",height:"800px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
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
        width:"80%";
        height: "100%";
        border: 1px solid red;
        margin: auto;
    }
`

export default ProductsSort
