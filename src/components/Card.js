import { Heading, AspectRatio, HStack,Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Cards = ({ title, description, imageSrc,population,name,region,capital }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(<>
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <AspectRatio maxW='400px' ratio={8 / 4}>
      <Image src={imageSrc} alt={name}  objectFit='cover'/>
      </AspectRatio>
      <Box p='6' bgColor="white">
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
          noOfLines={1}>
         <Text> Region : {region} </Text>
        </Box>
        <Box
         
          fontWeight="normal"
          as='h4'
          lineHeight='tight'
          noOfLines={1}>
         <Text> Captial : {capital} </Text>
        </Box>
      </Box>
      </Box>
    </Box>
</>)
};

export default Cards;


