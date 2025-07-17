// import { useLanguage } from "../tools/translation/useLanguage";
import Welcome from "../components/Welcome";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import ScrollToTopButton from "../components/ScrollOnTop";
import {  Flex } from "@chakra-ui/react";




const PortfolioPage = () => {
  
  return (
    <>
      <Flex gap={"200px"} direction={"column"}>
        <Welcome />
        <AboutMe/>
        <Education/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Contact/>
        <ScrollToTopButton/>
      </Flex>

    </>
  )
}

export default PortfolioPage