

import React from 'react'

import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,ButtonGroup,Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'



const ProductCard = ({product}) => {
  return (
  
   
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
    <Link to={`/singleproducts/${product.id}`}>
      <Button variant='solid' colorScheme='blue'>
   
        View Now
       
       
      </Button>
      </Link>
      <Button variant='ghost' colorScheme='blue'>
   Buy Now
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

  )
}

export default ProductCard