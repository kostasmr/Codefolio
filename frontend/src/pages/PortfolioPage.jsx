// import { useLanguage } from "../tools/translation/useLanguage";
import Welcome from "../components/Welcome";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import ScrollToTopButton from "../tools/ScrollOnTop";
import { Box } from "@chakra-ui/react";


const PortfolioPage = () => {
  
  return (
    <>
        <Welcome />
        <AboutMe/>
        <Box w="full" h={{sm : "300px", tablet: "300px", desktop: "400px"}} bg="black" />
        <Education/>
        <Box w="full" h={{sm : "200px", tablet: "300px", desktop: "300px"}} bg="black" />
        <Experience/>
        <Box w="full" h={{sm : "200px", tablet: "200px", desktop: "300px"}} bg="black" />
        <Projects/>
        <Box w="full" h={{sm : "100px", tablet: "200px", desktop: "0px"}} bg="black" />
        <Skills/>
        <Box w="full" h={{sm : "200px", tablet: "100px", desktop: "0px"}} bg="black" />
        <Contact/>
        <ScrollToTopButton/>
    </>
  )
}

export default PortfolioPage