import React from 'react'
import { Heading, AspectRatio, HStack,Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup, Center, Flex } from "@chakra-ui/react";

export default function DetialComponent() {
  return (
   <Stack   py={4} >
    <Box  w="230px"  borderColor="blue"
          fontSize={24}
          fontWeight="extrabold"
          as='h1'
          lineHeight="10"
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}>Beligum </Text>
          
        </Box>
    <Stack direction="row" mb={2}>
         
        <VStack>
        
    <Box  w="230px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Population : </Text>
          <Text fontWeight="light"> population </Text>
        </Box>
        <Box  w="230px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Population : </Text>
          <Text fontWeight="light"> population </Text>
        </Box>
        <Box  w="230px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Population : </Text>
          <Text fontWeight="light"> population </Text>
        </Box>
        <Box  w="230px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Population : </Text>
          <Text fontWeight="light"> population </Text>
        </Box>
        <Box  w="230px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Population : </Text>
          <Text fontWeight="light"> population </Text>
        </Box>
        </VStack>
        <VStack>
        <Box  w="230px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Population : </Text>
          <Text fontWeight="light"> population 1</Text>
        </Box>
        </VStack>

        </Stack >
        <HStack spacing={6}  py={10}>
            <Text>Border Countries:</Text>
        <Button variant='solid' colorScheme='blue' size="xs" width="75px" borderRadius="2px">
          Buy Latte
        </Button>
        <Button variant='solid' colorScheme='blue' size="xs" width="75px" borderRadius="2px">
          Buy Latte
        </Button>
        <Button variant='solid' colorScheme='blue' size="xs" width="75px" borderRadius="2px">
          Buy Latte
        </Button>
        </HStack>
        </Stack>
  )
}
