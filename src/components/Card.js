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
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={name}>
    <Link to={`/${alpha3Code}`}>
     <Box borderWidth="thin">
      <AspectRatio maxW='400px' ratio={9/ 5.7}>
      <Image src={imageSrc} alt={name}  objectFit="fill"  />
      </AspectRatio>
      </Box>
      <Box p='6' bgColor={`${colorValue?`${ WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${ WhiteColor}`} `}>
        <Box display='flex'  flexDirection="column">
          <Box  mb="2" noOfLines={1}>
             <Heading size='sm'>{title}</Heading>
          </Box>
         
          <Box
          
            fontWeight="normal"
            as='h4'
            lineHeight='tight'
            display='flex' 
            alignItems='baseline'
            //noOfLines={1}
          >
            <Text pr={1}> Population : </Text>
            <Text fontWeight="light">  { population.toLocaleString() } </Text>
          </Box>
       

        <Box
         
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
          >
             <Text pr={1}> Region : </Text>
         <Text fontWeight="light">  {region} </Text>
        </Box>
        <Box
         
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          display='flex' 
          alignItems='baseline'
          //noOfLines={1}
          >
            <Text pr={1}> Captial : </Text>
         <Text  fontWeight="light">  {capital} </Text>
        </Box>
      </Box>
      </Box>
      </Link>
    </Box>
</>)
};






export default Cards;


