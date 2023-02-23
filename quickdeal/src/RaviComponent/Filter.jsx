import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, CheckboxGroup, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Filter = ( ) => {
    return (
        <Accordion defaultIndex={[0, 1, 2, 0]} allowMultiple>
            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                        Mobiles
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={"5px"}>
                    <CheckboxGroup defaultValue={['']} >
                        <Stack spacing={[2]} direction={['column']} >
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500' >Realme</Text></Checkbox>
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500'  >I-Phone</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>Samsung</Text></Checkbox>
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500' >One Plus</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500' >Google Pixel</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>


            <AccordionItem p={"5px"}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                       All Electronics
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={"5px"}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>TV</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Laptop</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Washing Machines</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            
            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                        Furniture
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500' >Almirah</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'  >Office Tables</Text></Checkbox>
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500' >Sofa Sets</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Filter