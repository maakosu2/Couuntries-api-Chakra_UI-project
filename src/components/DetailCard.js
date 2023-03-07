import react from "react"
import { useParams,useNavigate } from "react-router-dom"
import {Box, Image, Text, VStack,Stack,Card, CardHeader, CardBody, CardFooter,Divider,Button,ButtonGroup, Center, Flex } from "@chakra-ui/react";
import DetialComponent from "./DetialComponent";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useFetchDataContext } from "../context/alertContext";
import usequeryFetch from "../hooks/usequeryFetch";

export default function DetailCard() {
    
    const {countryName}=useParams()
    const BaseUrl=`https://restcountries.com/v2/alpha?codes=${countryName}`
    const {searchQuery,colorValue}=useFetchDataContext()
    const {isLoading,isError, data}=usequeryFetch(BaseUrl,countryName)
   console.log("detailPage",isLoading)
   if (isLoading) {
    return <h1>mandela</h1>
   }

    return (
      
    <DetialComponent  colorValue={colorValue} {...data[0]} />
 
    )
  }
  
  