import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getProduct } from './Products-Redux/action';
import ProductCard from './ProductCard';
const ProductList = () => {
  const dispatch = useDispatch();
  const [searchParams]=useSearchParams();
  const location=useLocation();
 
  const products=useSelector((store)=>{
    return store.product.products
  })
 
  let obj = {
  params:{
    
    category:searchParams.getAll("category"),
    _sort:searchParams.get("order")&&"price",
    _order:searchParams.get("order"),
  }
  }
  
useEffect(()=>{
  dispatch(getProduct(obj))

},[location.search])
  return (
    <DIV  style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
      {products.length>0 && products.map((el)=>{
        return <ProductCard key={el.id||el.item_id} product={el} />
      })}
    </DIV>
  )
}

const DIV = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,max-content));
  grid-gap:10px;
  height: auto;
  margin-left: 20px;
`


export default ProductList
