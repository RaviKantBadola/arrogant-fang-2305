import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, CheckboxGroup, Flex, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Filter = ( ) => {
    return (
        <Accordion defaultIndex={[0, 2, 3, 4]} allowMultiple>
            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                            CATEGORIES
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']} >
                        <Stack spacing={[2]} direction={['column']} >
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500' >Appliances</Text></Checkbox>
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500'  >Electronics</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>Faishon</Text></Checkbox>
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500' >Groceries</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500' >Mobiles</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500' >Home</Text></Checkbox>
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500' >TopOffers</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                            GENDER
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Men</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Women</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                            PRICE
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <RangeSlider defaultValue={[0, 100]}
                       >
                        <RangeSliderTrack>
                            <RangeSliderFilledTrack bg={'#2874F0'} />
                        </RangeSliderTrack>
                        <RangeSliderThumb index={0} />
                        <RangeSliderThumb index={1} />
                    </RangeSlider>
                    <Flex mt='10px' justify={'space-between'} align='center'>
                        <Text color={'black'} bg='#fff' border={'0.6px solid #d7d7d7'} borderRadius='2px' p='0px 28px' fontSize={'14px'}>{[0] > 0 ? [0] * 10 : "Min"}</Text>
                        <Text fontSize={'15px'} >to</Text>
                        <Text bg='#fff' border={'0.6px solid #d7d7d7'} borderRadius='2px' p='0px 28px' fontSize={'14px'}>{[1] < 100 ? [1] * 10 : "1000+"}</Text>
                    </Flex>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                            DISCOUNT
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500' >30% or more</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'  >40% or more</Text></Checkbox>
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500' >50% or more</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500' >60% or more</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500' >70% or more</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                            CUSTOMER RATINGS
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>4★ & above</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>3★ & above</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                            COLOR
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>White</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>Black</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Yellow</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Red</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>Blue</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Pink</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small'>
                            BRAND
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>ADIDAS</Text></Checkbox>
                            <Checkbox spacing='0.8rem'><Text fontSize={'small'} fontWeight='500'>Allen Solly</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Ap'pulse</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>BEWAKOOF</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Billion</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>CHEROKEE</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Christy World</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Clovia</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                            OFFERS
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Buy More, Save More</Text></Checkbox>
                            <Checkbox spacing='0.8rem' ><Text fontSize={'small'} fontWeight='500'>No Cost EMI</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  ><Text fontSize={'small'} fontWeight='500'>Special Price</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default Filter