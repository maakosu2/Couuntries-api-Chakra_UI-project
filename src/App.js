import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { DetialCard } from "./components/Card";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path="/" element={<ProjectsSection/>}/>
          <Route path="/:id" element={<DetialCard/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

{/* <Header />
          <ProjectsSection />
          
          <Alert /> */}