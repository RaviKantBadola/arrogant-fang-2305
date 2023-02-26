import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Checkbox, CheckboxGroup, Stack, Text } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
    import { useSearchParams } from "react-router-dom"
const Filter = ( ) => {

      const [searchParams, setSearchParams] = useSearchParams()
      const initalState = searchParams.getAll("category")
      const initalOrder = searchParams.get("order")
      const [category, setCategory] = useState(initalState || [])
      const [order, setOrder] = useState(initalOrder || "")

      const handleChange = (e) => {
        let newCategory = [...category];
        let value = e.target.value
        if (newCategory.includes(value)) {
          newCategory.splice(newCategory.indexOf(value), 1)
        } else {
          newCategory.push(value)
        }
        setCategory(newCategory)
    
      }
    
      const handleSort = (e) => {
        setOrder(e.target.value)
      }
    
      useEffect(() => {
        let params = {
          category,
    
        }
        order && (params.order = order)
        setSearchParams(params)
      }, [category, order])

    return (
        <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>
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
                            <Checkbox spacing='0.8rem' value="Realme" onChange={handleChange} defaultChecked={category.includes("Realme")}><Text fontSize={'small'} fontWeight='500' >Realme</Text></Checkbox>
                            <Checkbox spacing='0.8rem' value="Iphone" onChange={handleChange} defaultChecked={category.includes("Iphone")}><Text fontSize={'small'} fontWeight='500'  >I-Phone</Text></Checkbox>
                            <Checkbox spacing='0.8rem' value="Samsung" onChange={handleChange} defaultChecked={category.includes("Samsung")}><Text fontSize={'small'} fontWeight='500'>Samsung</Text></Checkbox>
                            <Checkbox spacing='0.8rem'value="One plus" onChange={handleChange} defaultChecked={category.includes("One plus")}><Text fontSize={'small'} fontWeight='500' >One Plus</Text></Checkbox>
                            <Checkbox spacing='0.8rem' value="Google pixel" onChange={handleChange} defaultChecked={category.includes("Google pixel")}><Text fontSize={'small'} fontWeight='500' >Google Pixel</Text></Checkbox>
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
                            <Checkbox spacing='0.8rem'  value="TV" onChange={handleChange} defaultChecked={category.includes("TV")} ><Text fontSize={'small'} fontWeight='500'>TV</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  value="Laptop" onChange={handleChange} defaultChecked={category.includes("Laptop")} ><Text fontSize={'small'} fontWeight='500'>Laptop</Text></Checkbox>
                            <Checkbox spacing='0.8rem'   value="Washing Machines" onChange={handleChange} defaultChecked={category.includes("Washing Machines")}><Text fontSize={'small'} fontWeight='500'>Washing Machines</Text></Checkbox>
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
                            <Checkbox spacing='0.8rem'   value="Almirah" onChange={handleChange} defaultChecked={category.includes("Almirah")}><Text fontSize={'small'} fontWeight='500' >Almirah</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  value="Office Tables" onChange={handleChange} defaultChecked={category.includes("Office Tables")}><Text fontSize={'small'} fontWeight='500'  >Office Tables</Text></Checkbox>
                            <Checkbox spacing='0.8rem'  value="Sofa Sets" onChange={handleChange} defaultChecked={category.includes("Sofa Sets")}><Text fontSize={'small'} fontWeight='500' >Sofa Sets</Text></Checkbox>
                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>


            <AccordionItem p={'5px'}>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left' fontWeight='bold' fontSize='small' textTransform={'uppercase'}>
                Sort By Price
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup defaultValue={['']}>
                        <Stack spacing={[1]} direction={['column']}  onChange={handleSort}>
                    <div>
                    <input type="radio" name="order" value={"asc"} checked={order === "asc"} />
                    <label>Ascending</label>
                    </div>
        <div>
        <input type="radio" name="order" value={"desc"} checked={order === "desc"} />
        <label>Descending</label>
        </div>
        
              </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

        </Accordion>
    )
}

export default Filter