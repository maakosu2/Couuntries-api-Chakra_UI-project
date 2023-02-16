import React, { useEffect, useState,useMemo } from "react";

import FullScreenSection from "./FullScreenSection";
import {Search2Icon } from '@chakra-ui/icons'
import { useFormik } from "formik";
import { Box, Heading,Input,InputLeftElement, Flex, Spacer ,InputGroup,Select} from "@chakra-ui/react";
import Cards from "./Card";
import project from "./data" 

const projects = [
  {
    title: "React Space",
    description:
      "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "React Infinite Scroll",
    description:
      "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];



const ProjectsSection = () => {
  const [searchQuery, SetSearchQuery]=useState("")
  const [RegionQuery, SetRegionQuery]=useState("")
  const [dataProject, SetDataProject]=useState([])
 
  const filteredItems = useMemo(() => {
    return dataProject.filter(item => {
      return (item.name.toLowerCase().includes(searchQuery.toLowerCase())
      &&  RegionQuery ? item.region.toLowerCase()=== RegionQuery.toLowerCase() : true
      )
     
    })
    },[dataProject,RegionQuery,searchQuery]) 


 /*    useEffect(()=>{
      const fetchData = async () => {
        let response = await fetch(https://restcountries.com);
        let data= await response.json();
        console.log(data)
      };
    
      fetchData(); // run it, run it
    
      return () => {
        // this now gets called when the component unmounts
      };

    },[]) */



  console.log("searchQuery", searchQuery,"RegionQuery", RegionQuery)
  return (
    <Box mt={20} >
       <form>
      <Flex py="0.99em" alignItems="center" margin="auto" mb="1.0em" width="84.5%" justifyContent="space-between" >
      
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
              <option value=''>Africa</option>
              <option value='America'>America</option>
              <option value='Asia'>Asia</option>
              <option value='Europe'>Europe</option>
              <option value='OCeania'>OCeania</option>
      </Select>
      </Box>
      </Flex>
      </form>
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      justifyContent="center"
      alignItems="flex-start"
      spacing={8}
      
      textAlign="left"
    >
    
     
      
      <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={6}
      >
        {project.map((project) => (
          
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
      </Box>
    </FullScreenSection>
    </Box>
  );
};

export default ProjectsSection;
