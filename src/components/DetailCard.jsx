import react, { useMemo } from "react"
import { useParams,useNavigate, useSearchParams } from "react-router-dom"
import { Center, Flex, Spinner } from "@chakra-ui/react";
import DetialComponent from "./DetialComponent";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useFetchDataContext } from "../context/alertContext";
import usequeryFetch from "../hooks/usequeryFetch";
import Loading, { Error } from "./LoadingComponent";
import useCountryFilter from "../hooks/useCountryFilter";

export default function DetailCard() {
    
    const {countryName}=useParams()
     

   
    const {colorValue}=useFetchDataContext()
    const {isLoading,isError, data}=usequeryFetch()

   

    const filtered= useMemo(()=>{ return data?.filter(item => {
      return (
      item.alpha3Code.toLowerCase()=== countryName.toLowerCase() )
     
    })[0] },[data,countryName])
   
   if (isLoading) {
    return(
    <Loading/>
      )
   }
   else if(isError){
return(
  <Error/>
)
   }

    return (
      
    <DetialComponent  colorValue={colorValue} {...filtered} />
 
    )
  }
  
  