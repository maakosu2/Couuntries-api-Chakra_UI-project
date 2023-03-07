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

    const Code_Name=(countryName)=>{
      const BaseUrl=`https://restcountries.com/v2/alpha?codes=${countryName}`
      const {isLoading,isError,  data}=usequeryFetch(BaseUrl,countryName)
      if (isLoading) {
        return "isLoading"
      } else if (isError) {
        return "Error"
      } else {
       return data[0]["name"]
      } 
      
    }
   
   if (isLoading) {
    return(
    <Loading/>
      )
   }

    return (
      
    <DetialComponent Code_Name={Code_Name} colorValue={colorValue} {...data[0]} />
 
    )
  }
  
  