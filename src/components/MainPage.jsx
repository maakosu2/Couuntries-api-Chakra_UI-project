import React, { useState,useMemo } from "react";

import {Search2Icon } from '@chakra-ui/icons'
import { useFormik } from "formik";
import { Box, Heading,Input,InputLeftElement, Flex, Spacer ,InputGroup,Select, Spinner, Center} from "@chakra-ui/react";
import Cards, { DetialCard } from "./Card";
import project from "./data" 
import useCountryFilter from "../hooks/useCountryFilter";
import usequeryFetch ,{useFetch}from "../hooks/usequeryFetch";
import { useFetchDataContext } from "../context/alertContext";
import Loading from "./LoadingComponent";





const ProjectsSection = () => {
 
  const [searchQuery, SetSearchQuery]=useState("")
  const [RegionQuery, SetRegionQuery]=useState("")
  const [mydata, setmydata]=useState("")

  const baseURL= "https://restcountries.com/v2/all";

  const {isLoading, data, isError,error}=usequeryFetch()
  
  const {colorValue,allData, setDataAll}=useFetchDataContext()


// the filter is implemented outside of the fectch method is prevent exceeds callls to the API
// the filtered data has is implement in the page as a non-funtion so the useMemo hooks can be invoke 
  const filtered= useMemo(()=>data?.filter(item => {
    return (
      (item.name.toLowerCase().includes(searchQuery.toLowerCase()))
   &&  (RegionQuery ? item.region.toLowerCase()=== RegionQuery.toLowerCase() : true
    ))
   
  }) )
  console.log("nnnnui",filtered )
   
      const WhiteColor="white";
      const BlackColor="#202631"
  return (
    <Box   bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `} py="15px">
    <Box pt={20} width="90%" mx="auto"  minHeight="91svh">
       <form>
      <Flex  alignItems="center"  my="0.95em"  justifyContent="space-between" >
      
      <Box><InputGroup>
            <Input color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}
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
      <Box   bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}>
      <Select value={RegionQuery}  bgColor={`${colorValue?"white":`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:"white"} `}
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
       
        {filtered.map((project) => (
          isLoading? 
          <Loading/>
          :
          
          <Cards
            key={project.flags.png}
            imageSrc={project.flags.png}
            title={project.name}
            population={project.population}
            name={project.name}
            region={project.region}
            capital={project.capital}
            alpha3Code={project.alpha3Code}
          /> 
         
        ))}
      </Box>}
      
    </Box>
    </Box>
  );
};

export default ProjectsSection;
