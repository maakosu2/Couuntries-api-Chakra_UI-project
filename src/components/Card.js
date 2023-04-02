import { Heading, AspectRatio, HStack,Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup, Center, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetchDataContext } from "../context/alertContext";

const Cards = ({ title, alpha3Code, imageSrc,population,name,region,capital }) => {
 

  //
  const WhiteColor="white";
 const BlackColor="#202631"
 
  const {colorValue}=useFetchDataContext()
  return(<>
  <Box maxW={{sm:"xlg",lg:'sm'}} borderWidth='1px' borderRadius='lg' overflow='hidden'mt={5} maxH={{sm:"400px",lg:"370px"}}   key={name}  >
    <Link to={`/${alpha3Code}`}>
     <Box >
      <AspectRatio maxW={{sm:"100%",lg:'400px'}} ratio={9/ 5.7}>
      <Image src={imageSrc} alt={name}  objectFit="fill"  />
      </AspectRatio>
      </Box>
      <Box p='6' bgColor={`${colorValue?`${ WhiteColor}`:`${BlackColor}`} `}  h={{sm:"160px",lg:"150px"}}  color={`${colorValue?`${BlackColor}`:`${ WhiteColor}`} `}>
        <Box display='flex'  flexDirection="column">
          <Box  mb="2" noOfLines={1} my={2}>
             <Heading size={{sm:"xl",lg:'sm'}}>{title}</Heading>
          </Box>
         
          <Box
          
            fontWeight="normal"
            as='h4'
            lineHeight="base"
            display='flex' 
            alignItems='baseline'
            //noOfLines={1}
            
            
          >
            <Text fontSize={{sm:'2xl',lg:"inherit"}} pr={1}> Population : </Text>
            <Text    fontSize={{sm:'2xl',lg:"inherit"}} size="3xl" fontWeight="light">  { population.toLocaleString() } </Text>
          </Box>
       

        <Box
         
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
          >
             <Text fontSize={{sm:'2xl',lg:"inherit"}} pr={1}> Region : </Text>
         <Text  fontSize={{sm:'2xl',lg:"inherit"}} fontWeight="light">  {region} </Text>
        </Box>
        <Box
         
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
          >
            <Text   fontSize={{sm:'2xl',lg:"inherit"}} pr={1}> Captial : </Text>
         <Text fontSize={{sm:'2xl',lg:"inherit"}} fontWeight="light">  {capital} </Text>
        </Box>
      </Box>
      </Box>
      </Link>
    </Box>
</>)
};






export default Cards;


