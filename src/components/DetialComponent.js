import React from 'react'
import { Heading, AspectRatio, HStack,Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup, Center, Flex } from "@chakra-ui/react";
import { useFetchDataContext } from '../context/alertContext';
import usequeryFetch from '../hooks/usequeryFetch';
import { useParams,useNavigate, Link } from "react-router-dom"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function DetialComponent({country_Name,topLevelDomain,nativeName,name,population,region,subregion,borders,capital,currencies,languages,flag

}) {
  const navigate=useNavigate()
  const navigateHomePage=()=>{
      navigate("/")
  }
 const WhiteColor="white";
 const BlackColor="#202631"
  const {colorValue}=useFetchDataContext()
 
  return (
    <Box   minH="93dvh"   py={100}  bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}>
    <Button size="sm" w="100px"  boxShadow='1px 0px 1.1px 0.1px '    bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}     ml="5%" mb={10} onClick={navigateHomePage} leftIcon={<ArrowBackIcon color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}/>} >Button</Button>
     
     <Box   m="0 auto"  width="90%"  h="322px"    >
      
       <Stack flexDirection="row" >
         <Box mr={10}>
 <Image
   objectFit="fill"
   w='550px'
   h="320px"
   src={`${flag}`}
   alt='Caffe Latte'
 />
 </Box  >
   <Stack   py={4}  >
    <Box  w="350px"  
          fontSize={24}
          fontWeight="extrabold"
          as='h1'
          lineHeight="10"
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}>{name}</Text>
          
        </Box>
    <Stack direction="row" mb={2}>
         
        <VStack>
        
    <Box  w="350px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Native Name : </Text>
          <Text fontWeight="light"> {nativeName}</Text>
        </Box>
        <Box  w="350px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Population : </Text>
          <Text fontWeight="light"> {population.toLocaleString()} </Text>
        </Box>
        <Box  w="350px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Region : </Text>
          <Text fontWeight="light"> {region} </Text>
        </Box>
        <Box  w="350px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Sub Region : </Text>
          <Text fontWeight="light"> {subregion} </Text>
        </Box>
        <Box  w="350px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Captial : </Text>
          <Text fontWeight="light"> {capital} </Text>
        </Box>
        </VStack>
        <VStack>
        <Box  w="350px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Top Level Domain : </Text>
          <Text fontWeight="light"> {topLevelDomain[0]}</Text>
        </Box>
        <Box  w="350px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Curriences : </Text>
          <Text fontWeight="light">{currencies[0]["code"]} </Text>
        </Box>
        <Box  w="350px"  borderColor="blue"
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1}> Languages : </Text>
          {
            languages.map(item=>{
              return <Text px="2px" fontWeight="light"> {`${item.name} `}</Text>
            })
            
          }
          
        </Box>
        </VStack>

        </Stack >
        <HStack spacing={4}  py={10}>
            <Text>Border Countries:</Text>

        {

          borders?.map(item=>
          <Button size="sm" w="100px" as={Link} boxShadow='1px 0px 1.1px 0.1px ' to={`/${item}`} bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `} ml="1%" mb={10}  >{item}</Button>
          )
        }
        
        </HStack>
        </Stack>
        </Stack>
  </Box>

  </Box>
  )
}
