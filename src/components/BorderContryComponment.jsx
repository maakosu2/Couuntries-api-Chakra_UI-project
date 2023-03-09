import { Button, Text } from "@chakra-ui/react"
import React, { useMemo } from "react"
import { Link } from "react-router-dom"
import { useFetchDataContext } from "../context/alertContext"
import usequeryFetch from "../hooks/usequeryFetch"
 

const BorderCountry=({countryName})=>{

      
      const {colorValue}=useFetchDataContext()
      const {isLoading,isError,data}=usequeryFetch()

      const filtered= useMemo(()=>data?.filter(item =>{
        return (
        item.alpha3Code.toLowerCase()=== countryName.toLowerCase() )
      })[0])

      const WhiteColor="white.100"
      const BlackColor="#202621"

      if (isLoading) {
        return (
        
          <Button size="sm" w="120px" variant='solid' as={Link}  boxShadow='dark-lg'  isLoading
          loadingText='Loading'
          to={`/${countryName}`} bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `} 
          text-overflow="ellipsis"  overflow="hidden" color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `} 
          ml={2} mb={2}  mt={2}></Button>)
      } else if (isError) {
        return (
        
          <Button size="sm" w="120px"  as={Link}  boxShadow='dark-lg'  isLoading
          loadingText='Errror'
          to={`/${countryName}`} bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `} 
          text-overflow="ellipsis"  overflow="hidden" color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `} 
          ml={2} mb={2}  mt={2}></Button>)
      } 
       
    return(
        
        <Button size="sm" w="120px"  as={Link}  boxShadow='dark-lg'
        to={`/${countryName}`} bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `} 
        text-overflow="ellipsis"  overflow="hidden" color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `} 
        ml={2} mb={2}  mt={2}><Text overflow="hidden"  text-overflow="ellipsis">{filtered["name"]}</Text></Button>)
  }


  export default BorderCountry