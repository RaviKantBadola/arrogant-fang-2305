

import React from 'react'

import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button } from '@chakra-ui/react'
const ProductCard = ({product}) => {
  return (
    // <div  style={{border:"1px solid grey",padding:"5px",width:"200px"}}>
    //   <Link to={`/product/${product.id}`}>
    //   <img  src={product.image} alt={product.title} style={{marginLeft:"auto",marginRight:"auto"}}/>
    //   </Link>
     
    //  <p>{product.description}</p>
    //  <p>{ `₹${product.price}`}</p>
    //  <Link to={`/edit/${product.item_id}`}>
    //  <button>Edit</button>
    //  </Link>
    
    // </div>
   
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={product.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      style={{marginLeft:"auto",marginRight:"auto",width:"200px",height:"200px"}}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{product.title}</Heading>
      <Text color='blue.600' fontSize='2xl'>
        ₹{product.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        View Now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
   Buy Now
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

  )
}

export default ProductCard