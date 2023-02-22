import react from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Heading, AspectRatio, HStack,Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup, Center, Flex } from "@chakra-ui/react";

export default function DetailCard({name,imageSrc,languages,subregion}) {
    const {id}=useParams()
    const navigate=useNavigate()
    console.log("input")
    const navigateHomePage=()=>{
        navigate("/")
    }
    console.log("jui", id)
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
      src={"https://flagcdn.com/w320/ax.png"}
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
  
  