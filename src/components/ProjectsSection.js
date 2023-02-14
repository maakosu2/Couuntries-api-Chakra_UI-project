import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
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
  console.log("sure", project[1]["flags"]["png"])
  return (
    
    <FullScreenSection
      backgroundColor="white"
      isDarkBackground
      justifyContent="center"
      alignItems="flex-start"
      spacing={8}
      pt="4.0em"
      textAlign="left"
    >
      <Heading as="h1" id="projects-section" >
        Featured Projects
      </Heading>
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
  );
};

export default ProjectsSection;
