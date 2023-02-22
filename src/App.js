import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

import Alert from "./components/Alert";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import DetailCard from "./components/DetailCard";


function App() {
  return (
    <ChakraProvider>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<ProjectsSection/>}/>
          <Route path="/:id" element={<DetailCard/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

{/* <Header />
          <ProjectsSection />
          
          <Alert /> */}