import React from 'react'
import { Heading, AspectRatio, HStack,Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup, Center, Flex } from "@chakra-ui/react";
import { useFetchDataContext } from '../context/alertContext';
import usequeryFetch from '../hooks/usequeryFetch';
import { useParams,useNavigate, Link } from "react-router-dom"
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import BorderCountry from './BorderContryComponment';


export default function DetialComponent({topLevelDomain,nativeName,name,population,region,subregion,borders,capital,currencies,languages,flag

}) {
  const navigate=useNavigate()
  const navigateHomePage=()=>{
      navigate("/")
  }
 const WhiteColor="white";
 const BlackColor="#202631"
  const {colorValue}=useFetchDataContext()

  const WhiteColorButton="white.100"
      const BlackColorButton="#202621"
 
  return (
    <Box   minH="93dvh"   py={100}  bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}>
    <Button size="sm" w="100px"  boxShadow='dark-lg'    bgColor={`${colorValue?`${WhiteColorButton }`:`${BlackColorButton}`} `}     ml="10%" mb={10} onClick={navigateHomePage} leftIcon={<ArrowBackIcon color={`${colorValue?`${BlackColorButton}`:`${WhiteColorButton}`} `}/>} >Button</Button>
     
     <Box   m="0 auto"  width="80%"    >
      
       <Stack flexDirection={{sm:"column" , md:"row"}} spacing={2}>
         <Box mr={10}   m="0 auto">
 <Image
   objectFit="fill"
   w='80%'
   h="340"
   src={`${flag}`}
   alt='Caffe Latte'
 />
 </Box  >
   <Stack   p={4}   >
    <Box w="350px"   marigin="0" 
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
    <Stack direction={{sm:"column" , md:"row"}}  spacing={4}>
         
        <VStack   >
        
    <Box  w="350px"  borderColor="blue" 
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text > Native Name : </Text>
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
          <Text > Population : </Text>
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
        <VStack   >
        <Box  w="360px"  borderColor="blue"  
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text pr={1} > Top Level Domain : </Text>
          <Text fontWeight="light"> {topLevelDomain[0]}</Text>
        </Box>
        <Box  w="360px"  borderColor="blue"  m="0 auto"
          
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
        <Box  w="360px"  borderColor="blue"  m="0 auto" 
          
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
        >
          <Text  pr={1}> Languages : </Text>
          {
            languages.map(item=>{
              return <Text   key={`${item.name}`}  fontWeight="light"> {`${item.name} `}</Text>
            })
            
          }
          
        </Box>
        </VStack>

        </Stack >
        <Stack direction={{sm:'column',md: 'row'}}   py={5} alignItems="center">

          <Box  minW="140px"   alignSelf="flex-start">
            <Text pt={1}>Border Countries:</Text>
            </Box>
            <Box  maxW="550px">
      <Flex alignItems="flex-start"   wrap="wrap"   justify="flex-start"  >
        {
          borders?.map(item=>
         <BorderCountry key={item}  countryName= {item}/>
          ) 
        }
        </Flex>
        </Box>
        </Stack>
        </Stack>
        </Stack>
  </Box>

  </Box>
  )
}
// to solve the problem of few hoooks called, the button componet needs to be rewritern as a component
// called as a component element the link the defined this process is given 
// https://kentcdodds.com/blog/dont-call-a-react-function-component


{/* <Button size="sm" w="120px"  as={Link}  boxShadow='1px 0px 1.1px 0.1px '
           to={`/${item}`} bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `} 
           text-overflow="ellipsis"  overflow="hidden" color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `} 
           ml={2} mb={2}  mt={2}><Text overflow="hidden"  text-overflow="ellipsis">{item}</Text></Button>//{`${Code_Name(item)}`} */}