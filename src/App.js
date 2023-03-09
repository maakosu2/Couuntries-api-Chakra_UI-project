import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import ProjectsSection from "./components/MainPage";
import { QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import DetailCard from "./components/DetailCard";
import { FetctDataProvider } from "./context/alertContext";
import SiteLayout from "./components/SiteLayout";


function App() {
  const queryClient=new QueryClient()
  return (
  
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <FetctDataProvider>
        <BrowserRouter>
        
        <Routes>
          <Route   path="/"  element={<SiteLayout/>}>
        <Route  index element={<ProjectsSection/>}/>
          <Route path="/:countryName" element={<DetailCard/>}/>
          </Route>
          </Routes>
        </BrowserRouter>
        </FetctDataProvider>
    </ChakraProvider>
    
    </QueryClientProvider>
    
  );
}

export default App;

{/* <Header />
          <ProjectsSection />
          
          <Alert /> */}