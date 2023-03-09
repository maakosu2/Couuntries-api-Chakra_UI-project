import { Center, Spinner } from '@chakra-ui/react'
import React from 'react'

export default function Loading() {
  return (
    <Center  h='100vh' color='black'>
    <Spinner   thickness='4px'
     label="Loading..." 
speed='0.65s'
emptyColor='gray.200'
color='blue.500'
size='xl'/>
    </Center>)
   
}


export function Error() {
  return (
    <Center  h='100vh' color='black'>
  <Text fontSize='6xl' >ERROR OCURRIED</Text>
    </Center>)
   
}