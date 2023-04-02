import { Box } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import { useFetchDataContext } from '../context/alertContext';
import Footer from './Footer';
import Header from './Header';

export default function SiteLayout() {

  const WhiteColor="white";
  const BlackColor="#202631"

  const {colorValue}=useFetchDataContext()
  
  return (
    <Box  d="flex" dir="column" justifyContent="space-between"  bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}>
        <Header/>
         <Outlet/>
        <Footer/>
    </Box>
         
  );
  
}
