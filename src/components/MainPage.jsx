import React, { useState,useMemo } from "react";

import {Search2Icon } from '@chakra-ui/icons'
import { useFormik } from "formik";
import { Box, Heading,Input,InputLeftElement, Flex, Spacer ,InputGroup,Select, Spinner, Center} from "@chakra-ui/react";
import Cards, { DetialCard } from "./Card";
import useCountryFilter from "../hooks/useCountryFilter";
import usequeryFetch ,{useFetch}from "../hooks/usequeryFetch";
import { useFetchDataContext } from "../context/alertContext";
import Loading, { Error } from "./LoadingComponent";





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
    <Box   bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `} minH="100dvh"  color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `} py="15px">
    <Box pt={20} width="90%" mx="auto" >
       <form>
      <Flex  alignItems="center"  my="0.95em"   flexDir={{sm:"column",md:"column", lg:"row"}}   gap="4"   h={{sm:"92",lg:"inherit"}} >
      
      <Box alignSelf={{sm:"flex-start",md:"flex-start" }}  ><InputGroup    width={{sm:"400px",md:"350px", lg:"350px"}}>
            <Input color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}
            placeholder="Search for country..."
            name="search_bar"
            value={searchQuery}
            onChange={(e)=>
            SetSearchQuery(e.target.value)
            }
            size="md"
            htmlSize={120}
            width='auto' 
              />

        <InputLeftElement  children={<Search2Icon/>}/>
      </InputGroup>
      </Box>
      <Spacer />
      
      <Box   alignSelf={{sm:"flex-start", lg:"flex-end"}}    width={{sm:"400px", lg:"200px"}} >
       
      <Select   value={RegionQuery}  bg={`${colorValue?"white":`${BlackColor}`} `} pb={3}   color={`${colorValue?`${BlackColor}`:"white"} `}
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
 
    {isLoading? <Loading/>: isError? <Error/>:
     
      
      <Box 
      mx={{sm:"0.6", lg:"inherit"}}
        display="grid"
        gridTemplateColumns={{sm:"auto", lg:"repeat(4,minmax(0,1fr))"}}
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
