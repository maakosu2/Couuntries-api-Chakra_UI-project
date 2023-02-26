import React, { useEffect, useState,useMemo } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import FullScreenSection from "./FullScreenSection";
import {Search2Icon } from '@chakra-ui/icons'
import { useFormik } from "formik";
import { Box, Heading,Input,InputLeftElement, Flex, Spacer ,InputGroup,Select, Spinner, Center} from "@chakra-ui/react";
import Cards, { DetialCard } from "./Card";
import project from "./data" 
import useCountryFilter from "../hooks/useCountryFilter";
import usequeryFetch ,{useFetch}from "../hooks/useFetch";





const ProjectsSection = () => {
 
  const [searchQuery, SetSearchQuery]=useState("")
  const [RegionQuery, SetRegionQuery]=useState("")

  const baseURL= "https://restcountries.com/v2/all";

  const {isLoading, data, isError,error}=usequeryFetch(baseURL,searchQuery,RegionQuery)
  console.log("nnn",isLoading)
  //const filteredItems =useCountryFilter(searchQuery,RegionQuery,dataProject)
  /*  
  useMemo with dependance to filter the data for country and region
  useMemo(() => {
    return dataProject.filter(item => {
      return (
        (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
     &&  (RegionQuery ? item.region.toLowerCase()=== RegionQuery.toLowerCase() : true
      ))
     
    })
    },[dataProject,RegionQuery,searchQuery])  */

   /*  {JSON.stringify(filteredItems[0]["subregion"])}
    {JSON.stringify(filteredItems[21]["nativeName"])} returns a string value
    {JSON.stringify(filteredItems[21])} 
     {JSON.stringify(filteredItems[0]["topLevelDomain"][0])}
      {JSON.stringify(filteredItems[21]["languages"])}  // returns a list of array
      {JSON.stringify(filteredItems[21]["borders"])}// return a list element
     */

  return (
    <Box mt={20} width="90%" mx="auto"  minHeight="100vh">
       <form>
      <Flex  alignItems="center"  my="0.95em"  justifyContent="space-between" >
      
      <Box><InputGroup>
            <Input
            placeholder="Search for country..."
            name="search_bar"
            value={searchQuery}
            onChange={(e)=>
            SetSearchQuery(e.target.value)
            }
            size="md"
            htmlSize={50}
            width='auto' 
              />

        <InputLeftElement  children={<Search2Icon/>}/>
      </InputGroup>
      </Box>
      <Spacer/>
      <Box>
      <Select value={RegionQuery} 
              onChange={(e)=> SetRegionQuery(e.target.value)}  placeholder='Filter by Region'>
            
              <option value='Africa'>Africa</option>
              <option value='Americas'>Americas</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='OCeania'>OCeania</option>
      </Select>
      </Box>
      </Flex>
      </form>
 
    {isLoading? <Center  h='100vh' color='black'>
      <Spinner
       thickness='4px'
       speed='0.65s'
       emptyColor='gray.200'
       color='blue.500'
       size='xl'
       label="Loading..."  />
      </Center>:
     
      
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={6}
      >
       
        {data?.map((project) => (
          isLoading? <Center  h='100vh' color='black'>
      <Spinner   thickness='4px'
       label="Loading..." 
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'/>
      </Center>:
          
          <Cards
            key={project.flags.png}
            imageSrc={project.flags.png}
            title={project.name}
            population={project.population}
            name={project.name}
            region={project.region}
            capital={project.capital}
          /> 
         
        ))}
      </Box>}
      
    </Box>
  );
};

export default ProjectsSection;
