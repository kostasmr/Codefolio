import gradientImg from '../assets/images/gradient-image.png';
import profileImg from '../assets/images/my-image.jpg';
import arrowDown from '../assets/icons/arrow-down.png';
import menu from '../assets/icons/menu.png';
import { Container, Image, Text, Flex, Box, Link} from "@chakra-ui/react";
import { useLanguage } from '../tools/translation/useLanguage';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaPhoneAlt, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import ScrapbookAnimation from '../tools/ScrapbookAnimation';


const textPositions = [
    { top: "0%", x: -100, rotate: -20 },
    { top: "13%", x: -40, rotate: -15 },
    { top: {sm: "calc(50% - 100px)", tablet: "calc(50% - 190px)",desktop: "calc(50% - 200px)",lg: "calc(50% - 260px)"}, x: 0, rotate: 0 },
];

const box1Positions = [
    { top: "95%", left: "60%", rotate: 30 },
    { top: "60%", left: "53%", rotate: 3 },
    { top: "45%", left: "58%", rotate: -10 },
    { top: {sm: "calc(50% - 70px)", tablet: "calc(50% - 130px)",lg: "calc(50% - 180px)"}, left: {sm: "calc(50% - 20px)", tablet: "calc(50% - 40px)",lg: "calc(50% - 45px)"}, x: 0, rotate: 4 },
];

const box2Positions = [
    { top: "100%", left: "15%", rotate: -10 },
    { top: "90%", left: "25%", rotate: 10 },
    { top: "60%", left: "20%", rotate: -20 },
    { top: "45%", left: "35%", rotate: 10 },
    { top: {sm: "calc(50% - 30px)", tablet: "calc(50% - 70px)",lg: "calc(50% - 70px)"}, left: {sm: "calc(50% - 60px)", tablet: "calc(50% - 120px)",lg: "calc(50% - 140px)"}, x: 0, rotate: -2 },
];

const imagePositions = [
  { top: "150%", x: 0, rotate: 10 },
  { top: "95%", x: 0, rotate: 10 },
  { top: "80%", x: 20, rotate: 15 },
  { top: "60%", x: -40, rotate: -5 },
  { top: "40%", x: -15, rotate: 5 },
  { top: {sm: "calc(50% - 60px)",tablet: "calc(50% - 110px)",lg: "calc(50% - 150px)"}, x: 0, rotate: 0 },
];

function Welcome () {

    const { language, toggleLanguage, t} = useLanguage();
    const [showNav, setShowNav] = useState(false);
    const MotionBox = motion(Box);

    const toggleNav = () => setShowNav(prev => !prev);

    // Disable scroll when navbar is open
    useEffect(() => {
        if (showNav) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showNav]);

    return (
        <>
            <Container maxW="100%" h={{ sm: "40vh", tablet:"60vh", desktop:"100vh", lg:"100vh"}} padding={{ sm: "1", tablet:"3", desktop:"5"}} bg={"black"} position={'relative'}>
                <Image
                    src={gradientImg}
                    alt="Gradient Image"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
                <Flex 
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    direction="column"
                    justify="space-between"
                    color="white"
                    p={{ sm: "1", tablet:"3", desktop:"5"}}
                    zIndex={1}
                >
                    <Flex
                        justifyContent={"space-between"}
                        align={"center"}
                        paddingInline={{sm: "10px", tablet: "25px",lg:"40px"}}
                        paddingTop={{sm: "10px",tablet: "15px",lg:"20px"}}
                        w={"full"}
                    > 
                        <Box as="button" onClick={toggleNav}>
                            <Image src={menu} w={{sm:"25px", tablet:"40px"}} alt="Menu Icon" />
                        </Box>                
                        <Text letterSpacing={{sm: "2px", tablet: "3px",lg: "5px"}}  marginLeft={"1px"} textStyle="t">
                            Codefolio
                        </Text>
                        <Flex gap={{sm:1,tablet: 2}}>
                            <Text
                                textStyle="t"
                                fontWeight={language === "en" ? "bold" : "normal"}
                                cursor="pointer"
                                onClick={() => language !== "en" && toggleLanguage()}  
                            >EN</Text>
                            <Text
                                textStyle="t"
                                fontWeight={language === "el" ? "bold" : "normal"}
                                cursor="pointer"
                                onClick={() => language !== "el" && toggleLanguage()}  
                            >GR</Text>
                        </Flex>
                    </Flex>

                    <Flex 
                        justify={"center"}
                        align={"center"}
                        h={"full"}
                        position={"relative"}
                    >
                        <ScrapbookAnimation as={Text} positions={textPositions} textStyle="h" textAlign="center" letterSpacing={{sm: "3px", tablet: "5px",lg: "10px"}} zIndex={3}>
                            {t["software"]} <br /> {t["engineer"]}
                        </ScrapbookAnimation>

                        <ScrapbookAnimation as={Box} positions={box1Positions} w={{sm: "80px",tablet:"160px", lg:"190px"}} h={{sm: "100px",tablet:"200px", lg:"220px"}} bg="#97B9B2" zIndex={1} />

                        <ScrapbookAnimation as={Box} positions={box2Positions} w={{sm: "80px",tablet:"160px", lg:"190px"}} h={{sm: "100px",tablet:"200px", lg:"220px"}} bg="#132021" zIndex={1} />

                        <ScrapbookAnimation
                            as={Image}
                            positions={imagePositions}
                            src={profileImg}
                            w={{sm: "100px",tablet:"200px", lg:"240px"}}
                            h={{sm: "120px",tablet:"230px", lg:"280px"}}
                            objectFit="cover"
                            zIndex={2}
                        />
                    </Flex>
                    <Flex                    
                        paddingInline={{sm: "10px", tablet: "25px",lg:"40px"}}
                        paddingBottom={{sm: "10px",tablet: "15px",lg:"20px"}}
                        justifyContent={"space-between"}
                        align={"center"}
                    >
                        <Text letterSpacing={{sm: "2px", tablet: "3px",lg: "5px"}} textStyle="tb">{t["name"]}</Text>
                        <Flex gap={{sm: 2,lg: 5}} align={"center"}>
                            <Image src={arrowDown} w={{sm:"15px", tablet:"30px"}} alt="Arrow Icon"/>
                            <Text letterSpacing={{sm: "1px", tablet: "3px",lg: "5px"}} textStyle="t">{t["seemywork"]}</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <AnimatePresence>
                {showNav && (
                    <MotionBox
                        initial={{ opacity: 0, y: -500 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -500 }}
                        transition={{ duration: 0.5 }}
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="auto"
                        padding={5}
                        bg="rgba(0,0,0,0)"
                        color="white"
                        zIndex={10}
                        display="flex"
                        flexDirection="row"
                    >
                        <Flex
                            justifyContent={"flex-start"}
                            paddingInline={{sm: "10px", tablet: "25px",lg:"40px"}}
                            paddingY={{sm: "10px",tablet: "15px",lg:"20px"}}
                            w={"full"}
                            bg={"#101D1F"}
                            gap={20}
                        > 
                            <Box fontSize={{sm:"25px", tablet:"40px"}} _hover={{ color: "teal.600" }} h={"fit-content"}>
                                <IoClose cursor="pointer" onClick={toggleNav} _hover={{ color: "teal" }}/>
                            </Box>
                            <Flex gap={"100px"} py="40px" marginEnd={"auto"}>
                                <Text textStyle="t">Codefolio</Text>
                                <Flex direction={"column"} gap={3} textStyle="t">
                                    <Text as="a" href="#about" cursor="pointer" onClick={() => setShowNav(false)} transition="all 0.3s ease" _hover={ { textColor: "teal.600", transform: "translateX(20px)" }}>About Me</Text>
                                    <Text as="a" href="#education" cursor="pointer" onClick={() => setShowNav(false)} transition="all 0.3s ease" _hover={ { textColor: "teal.600", transform: "translateX(20px)" }}>Education</Text>
                                    <Text as="a" href="#experience" cursor="pointer" onClick={() => setShowNav(false)} transition="all 0.3s ease" _hover={ { textColor: "teal.600", transform: "translateX(20px)" }}>Experience</Text>
                                    <Text as="a" href="#projects" cursor="pointer" onClick={() => setShowNav(false)} transition="all 0.3s ease" _hover={ { textColor: "teal.600", transform: "translateX(20px)" }}>Projects</Text>
                                    <Text as="a" href="#skills" cursor="pointer" onClick={() => setShowNav(false)} transition="all 0.3s ease" _hover={ { textColor: "teal.600", transform: "translateX(20px)" }}>Skills</Text>
                                    <Text as="a" href="#contact" cursor="pointer" onClick={() => setShowNav(false)} transition="all 0.3s ease" _hover={ { textColor: "teal.600", transform: "translateX(20px)" }}>Contact</Text>
                                </Flex>
                            </Flex>
                            <Flex direction={"column"} textStyle="ts" gap={3} py="40px">
                                <Text mb={4}>Let`s work together</Text>
                                <Flex align={"center"} gap={3}>
                                    <Box fontSize={{ sm: "20px", tablet: "30px", desktop: "20px", lg: "20px" }}>
                                        <FaPhoneAlt />
                                    </Box>
                                    <Text>+30 697 596 0090</Text>
                                </Flex>
                                <Flex align={"center"} gap={3} marginEnd={"auto"}>
                                    <Box fontSize={{ sm: "20px", tablet: "30px", desktop: "25px", lg: "25px" }}>
                                        <MdEmail />
                                    </Box>
                                    <Text>kmourousidis@gmail.com</Text>
                                </Flex>
                                <Flex gap={{sm: 2,tablet: 5}} align={"end"} h={"full"}>
                                    <Link href="https://www.linkedin.com/in/konstantinos-mourousidis" isExternal transition="all 0.3s ease" _hover={{ color: "teal.600", transform: "translateY(-4px)" }}>
                                        <Box fontSize={{ sm: "20px", tablet: "30px", desktop: "30px", lg: "30px" }}>
                                            <FaLinkedin />
                                        </Box>
                                    </Link>
                                    <Link href="https://github.com/kostasmr" isExternal transition="all 0.3s ease" _hover={{ color: "teal.600", transform: "translateY(-4px)" }}>
                                        <Box fontSize={{ sm: "20px", tablet: "30px", desktop: "30px", lg: "30px" }}>
                                            <FaGithubSquare />
                                        </Box>
                                    </Link>
                                </Flex>
                            </Flex>
                        </Flex>
                    </MotionBox>
                )}                
                </AnimatePresence>
            </Container>
        </>
    )
}
    
export default Welcome
