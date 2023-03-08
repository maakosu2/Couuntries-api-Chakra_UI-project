import React from 'react'
import Header from './Header';

export default function SiteLayout() {
  return (
    <Box  d="flex" dir="column" justifyContent="space-between" >
    
         <Header/>
         <Outlet/>
         <Footer/>
         </Box>
         
  );
  
}
