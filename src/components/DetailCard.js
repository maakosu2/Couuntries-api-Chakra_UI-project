import react from "react"
import { useParams,useNavigate, useSearchParams } from "react-router-dom"
import { Center, Flex, Spinner } from "@chakra-ui/react";
import DetialComponent from "./DetialComponent";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useFetchDataContext } from "../context/alertContext";
import usequeryFetch from "../hooks/usequeryFetch";
import Loading from "./LoadingComponent";

export default function DetailCard() {
    
    const {countryName}=useParams()
     

    const BaseUrl=`https://restcountries.com/v2/alpha?codes=${countryName}`
    const {searchQuery,colorValue}=useFetchDataContext()
    const {isLoading,isError, data}=usequeryFetch(BaseUrl,countryName)
   
   if (isLoading) {
    return(
    <Loading/>
      )
   }

    return (
      
    <DetialComponent  colorValue={colorValue} {...data[0]} />
 
    )
  }
  
  