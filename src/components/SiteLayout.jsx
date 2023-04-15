import { Box } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from 'react-router-dom';
import { useFetchDataContext } from '../context/alertContext';
import Footer from './Footer';
import Header from './Header';
import { Suspense } from "react";

export default function SiteLayout() {

  const WhiteColor="white";
  const BlackColor="#202631"

  const {colorValue}=useFetchDataContext()
  
  return (
    <Box  d="flex" dir="column" justifyContent="space-between"  bgColor={`${colorValue?`${WhiteColor}`:`${BlackColor}`} `}    color={`${colorValue?`${BlackColor}`:`${WhiteColor}`} `}>
        <Header/>
        <Suspense fallback={<h1>Loading</h1>}>
         <Outlet/>
         </Suspense>
         
        <Footer/>
    </Box>
         
  );
  
}
