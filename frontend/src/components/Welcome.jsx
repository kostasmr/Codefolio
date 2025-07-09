import gradientImg from '../assets/images/gradient-image.png';
import profileImg from '../assets/images/profile.png';
import arrowDown from '../assets/icons/arrow-down.png';
import menu from '../assets/icons/menu.png';
import { Container, Image, Text, Flex, Box} from "@chakra-ui/react";
import { useLanguage } from '../tools/translation/useLanguage';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";


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
            <Container maxW="100%" height="100vh" padding={5} bg={"black"} position={'relative'}>
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
                    px={10}
                    py={6}
                    zIndex={1}
                >
                    <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        paddingInline={"40px"}
                        paddingTop={"20px"}
                    > 
                        <Box as="button" onClick={toggleNav}>
                            <Image src={menu} width={"40px"} alt="Menu Icon" />
                        </Box>                
                        <Text letterSpacing={"5px"} marginLeft={"1px"}>
                            Codefolio
                        </Text>
                        <Flex gap={2}>
                            <Text
                                fontWeight={language === "en" ? "bold" : "normal"}
                                cursor="pointer"
                                onClick={() => language !== "en" && toggleLanguage()}  
                            >EN</Text>
                            <Text
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
                        <Text 
                            fontSize={"40px"} 
                            fontWeight={"bold"} 
                            letterSpacing={"10px"} 
                            align={"center"} 
                            position={"absolute"} 
                            top="26%" 
                            zIndex="3"
                            >
                                SOFTWARE <br /> ENGINEER
                            </Text>
                        <Box 
                            w={"190px"} 
                            h={"220px"} 
                            bg={"#97B9B2"}
                            position="absolute" 
                            zIndex="0"
                            transform="rotate(4deg)" 
                            top="35%"
                            left="calc(50% - 60px)"
                        />
                        <Box 
                            w={"190px"}
                            h={"220px"} 
                            bg={"#132021"}
                            position="absolute" 
                            zIndex="1"
                            transform="rotate(-3deg)" 
                            top="40%"
                            left="calc(50% - 120px)"
                        />
                        <Image
                            src={profileImg}
                            alt="Profile Image"
                            objectFit="cover"
                            width="190px"
                            height="220px"
                            zIndex="2"
                        />
                        
                    </Flex>
                    <Flex                    
                        paddingInline={"40px"}
                        paddingBottom={"20px"}
                        justifyContent={"space-between"}
                    >
                        <Text letterSpacing={"5px"} fontWeight={"bold"}>{t["name"]}</Text>
                        <Flex gap={5} align={"center"}>
                            <Image src={arrowDown} width={"30px"} alt="Arrow Icon"/>
                            <Text letterSpacing={"5px"}>see my work</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <AnimatePresence>
                {showNav && (
                    <MotionBox
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100vh"
                        padding={5}
                        bg="rgba(0, 0, 0, 0.90)"
                        color="white"
                        zIndex={10}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={6}
                    >
                        <Text as="a" href="#about" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>About</Text>
                        <Text as="a" href="#education" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Education</Text>
                        <Text as="a" href="#experience" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Experience</Text>
                        <Text as="a" href="#projects" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Projects</Text>
                        <Text as="a" href="#skills" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Skills</Text>
                        <Text as="a" href="#contact" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Contact</Text>
                        <IoClose cursor="pointer" onClick={toggleNav} size={"30px"} _hover={ { color: "#97B9B2" }}/>

                    </MotionBox>
                )}                
                </AnimatePresence>
            </Container>
        </>
    )
}
    
export default Welcome
