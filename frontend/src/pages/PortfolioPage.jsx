// import { useLanguage } from "../tools/translation/useLanguage";
import Welcome from "../components/Welcome";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import ScrollToTopButton from "../components/ScrollOnTop";
import { Box } from "@chakra-ui/react";


const PortfolioPage = () => {
  
  return (
    <>
        <Welcome />
        <AboutMe/>
        <Box w="full" h="400px" bg="black" />
        <Education/>
        <Box w="full" h="300px" bg="black" />
        <Experience/>
        <Projects/>
        <Skills/>
        <Box w="full" h="200px" bg="black" />
        <Contact/>
        <ScrollToTopButton/>
    </>
  )
}

export default PortfolioPage