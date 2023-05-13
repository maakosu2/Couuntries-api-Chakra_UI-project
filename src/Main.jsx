import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import ProjectsSection from "./components/MainPage";
import { QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { BrowserRouter, Route,Routes } from "react-router-dom";
//import DetailCard from "./components/DetailCard";
import { FetctDataProvider } from "./context/alertContext";
import SiteLayout from "./components/SiteLayout";
import { Suspense, lazy } from "react";
import Loading from "./components/LoadingComponent";

const DetailCard =lazy(() => import ("./components/DetailCard"))


function Main() {
  const queryClient=new QueryClient()
  
  return (
  
        
        <Routes>
          <Route   path="/"  element={<SiteLayout/>}>
        <Route  index element={<ProjectsSection/>}/>
          <Route path="/:countryName" element={<Suspense  fallback={<Loading/>}><DetailCard/></Suspense>}/>
          </Route>
          </Routes>
       
    
  );
}

export default Main;

