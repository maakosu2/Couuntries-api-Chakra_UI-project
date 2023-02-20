import { Heading, AspectRatio, HStack,Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup, Center, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Cards = ({ title, description, imageSrc,population,name,region,capital }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return(<>
  <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' >
     <Box>
      <AspectRatio maxW='400px' ratio={8 / 4}>
      <Image src={imageSrc} alt={name}  objectFit='cover'/>
      </AspectRatio>
      </Box>
      <Box p='6' bgColor="white" >
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
    </Box>
</>)
};




export function DetialCard({name,imageSrc,languages,subregion}) {
  const {id}=useParams()
  const navigate=useNavigate()

  const navigateHomePage=()=>{
      navigate("/")
  }
  return (
    <Box minHeight="95vh" >
      
        <Flex flexDirection="column"    mt={150}>
      <Button size="sm" w="100px" colorScheme='blue' ml="5%" mb="65px"  onClick={navigateHomePage}>Button</Button>
      
        <Card    margin=" auto"
  direction={{ base: 'column', sm: 'row' }}
  
  variant='unstyled'
  w="90%"
 
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '450px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack spacing={18}>
    <CardBody pl="100px">
      <Heading size='md'>The perfect latte</Heading>
<HStack spacing={8}>
      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
      </HStack >
    </CardBody>

    <CardFooter>
    <HStack spacing={8}>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
       <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
       <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
      </HStack>
    </CardFooter>
  </Stack>
</Card>

</Flex>

</Box>
  )
}



export default Cards;


