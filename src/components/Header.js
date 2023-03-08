import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon, faEnvelope, faMoon } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack,Link,Text,Icon } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { MoonIcon } from "@chakra-ui/icons";
import Footer from "./Footer";
import { useFetchDataContext } from "../context/alertContext";



const Header = () => {
  const refHeader=useRef(null)
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    console.log(refHeader.current)
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  let prevScrollPos = window.scrollY;
  useEffect(() => {
  

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = refHeader.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
const {colorValue,colorSet}=useFetchDataContext()
const rod=false;

  return (
    <Box  d="flex" dir="column" justifyContent="space-between" >
    <Box  
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={refHeader}
    
    >
      <Box  bgColor={`${colorValue?"white":"#232a30"} `}    color={`${colorValue?"black":"white"} `} w="100%" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          
          <nav>
            <Text>Where in the World?</Text>
            {/* Add social media links based on the `socials` data */}
          </nav>
          <nav>
            <HStack spacing={2}  >
            <Link  >
            <Box    onClick={()=>{
             colorSet((prevoius)=>!prevoius)
            } }>
            <Icon as={MoonIcon}  color={`${colorValue?"blue":"white"} `}     />  </Box> </Link><Text>Dark Mode</Text>
            </HStack>
          </nav>
        </HStack>
      </Box>
              
    </Box>
    <Outlet/>
    <Footer/>
    </Box>
  );
};
export default Header;
