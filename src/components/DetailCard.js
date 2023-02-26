import react from "react"
import { useParams,useNavigate } from "react-router-dom"
import {Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup, Center, Flex } from "@chakra-ui/react";
import DetialComponent from "./DetialComponent";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

export default function DetailCard({name,imageSrc,languages,subregion}) {
    const {id}=useParams()
    const navigate=useNavigate()
    const navigateHomePage=()=>{
        navigate("/")
    }
    return (
      <Box color="red"   minH="91dvh"   py={100}>
       <Button size="sm" w="100px" colorScheme='blue' ml="5%" mb={10} onClick={navigateHomePage} leftIcon={<ArrowBackIcon color="red"/>} >Button</Button>
        
        <Box   m="0 auto"  width="90%"  h="322px" borderWidth="2px"    >
         
          <Stack flexDirection="row" >
            <Box mr={40}>
    <Image
      objectFit='cover'
      w='500px'
      h="320px"
      src={"https://flagcdn.com/w320/ax.png"}
      alt='Caffe Latte'
    /></Box  >
    <DetialComponent/>
  </Stack>
  </Box>

  </Box>
    )
  }
  
  