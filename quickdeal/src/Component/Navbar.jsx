import {
    Box,
    Flex,
    Text,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
    Input,
  } from '@chakra-ui/react';
 
  
  export default function Navbar() {
    // const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box w = {"70%"} m={"auto"} pos="fixed"   left={"15%"} border='1px' borderColor='red.200' zIndex={"5"}  >
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
           
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
           <Image style={{width:"185px" , height:"60px"}} src = "https://i.postimg.cc/wjVc8Xj4/quick.jpg" ></Image>
            </Text>
  
           
          </Flex>

        

          <Input w = {"70px"} placeholder='Search in all india' ></Input>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button 
             
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'black'}
              bg={ "#FCEC52"}
              href={'#'}
               >
              Post free ad
            </Button>
          </Stack>
        </Flex>
  
      
      </Box>
    );
  }
  
  
  
 
 
  
