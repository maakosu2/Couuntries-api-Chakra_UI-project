import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { ReactQueryDevtools } from "react-query-devtools";
import { QueryClient, QueryClientProvider, useQuery} from 'react-query'
import { BrowserRouter, Route,Routes } from "react-router-dom";
import DetailCard from "./components/DetailCard";
import { FetctDataProvider } from "./context/alertContext";


function App() {
  const queryClient=new QueryClient()
  return (
  
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <FetctDataProvider>
        <BrowserRouter>
        
        <Routes>
          <Route   path="/"  element={<Header/>}>
        <Route  index element={<ProjectsSection/>}/>
          <Route path="/:id" element={<DetailCard/>}/>
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