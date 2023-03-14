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
    <Box   minH="100dvh"   py={100}  bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}>
    <Button size="sm" w="100px"  boxShadow='dark-lg'    bgColor={`${colorValue?`${WhiteColorButton }`:`${BlackColorButton}`} `}     ml={{sm:"5%",lg:"6%"}} mb={10} onClick={navigateHomePage} leftIcon={<ArrowBackIcon color={`${colorValue?`${BlackColorButton}`:`${WhiteColorButton}`} `}/>} >Button</Button>
     
     <Box   m="0 auto"  width="90%"  H="40%" >
      
       <Stack flexDirection={{sm:"column" , lg:"row"}} spacing={1}> 
         <Box mr={1}    >
 <Image
   objectFit="cover"
   w={{sm:"900px",lg:'610px'}}
   h={{sm:"560px",lg:"360px"}}
   src={`${flag}`}
   alt='Caffe Latte'
 />
 </Box  >
   <Stack   py={4}  px={{sm:"inherit", lg:"5px"}} >
    <Box w="350px"   justifyItems="flex-start"
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
    <Stack direction={{sm:"column" , lg:"row"}}  spacing={3}>
         
        <VStack   >
        
    <Box   minW="140px"   borderColor="blue" alignSelf="flex-start"
          
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
        <Box  minW="140px"   borderColor="blue" alignSelf="flex-start"
          
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
        <Box  minW="140px"   borderColor="blue" alignSelf="flex-start"
          
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
        <Box  minW="140px"   borderColor="blue"  alignSelf="flex-start"
          
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
        <Box  minW="140px"   borderColor="blue"  alignSelf="flex-start"  

          
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
        <Box  minW="140px"   borderColor="blue"  alignSelf="flex-start" 
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
        <Box  minW="140px"   borderColor="blue"  alignSelf="flex-start" 
          
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
        <Box  minW="140px"   borderColor="blue"  alignSelf="flex-start" m="0 auto" 
          
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
        <Stack direction={{sm:'column',lg: 'row'}}   py={3} alignItems={{sm:"inherit",lg:"center"}}>

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