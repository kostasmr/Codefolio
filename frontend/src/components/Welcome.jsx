import gradientImg from '../assets/images/gradient-image.png';
import profileImg from '../assets/images/my-image.jpg';
import arrowDown from '../assets/icons/arrow-down.png';
import menu from '../assets/icons/menu.png';
import { Container, Image, Text, Flex, Box} from "@chakra-ui/react";
import { useLanguage } from '../tools/translation/useLanguage';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import ScrapbookAnimation from '../tools/ScrapbookAnimation';


const textPositions = [
    { top: "0%", x: -100, rotate: -20 },
    { top: "13%", x: -40, rotate: -15 },
    { top: { base: "18%","2xl":" 21%"}, x: 0, rotate: 0 },
];

const box1Positions = [
    { top: "95%", left: "60%", rotate: 30 },
    { top: "60%", left: "53%", rotate: 3 },
    { top: "45%", left: "58%", rotate: -10 },
    { top: "31%", left: "calc(50% - 45px)", x: 0, rotate: 4 },
];

const box2Positions = [
    { top: "100%", left: "15%", rotate: -10 },
    { top: "90%", left: "25%", rotate: 10 },
    { top: "60%", left: "20%", rotate: -20 },
    { top: "45%", left: "35%", rotate: 10 },
    { top: "43%", left: "calc(50% - 140px)", x: 0, rotate: -2 },
];

const imagePositions = [
  { top: "150%", x: 0, rotate: 10 },
  { top: "95%", x: 0, rotate: 10 },
  { top: "80%", x: 20, rotate: 15 },
  { top: "60%", x: -40, rotate: -5 },
  { top: "40%", x: -15, rotate: 5 },
  { top: "33%", x: 0, rotate: 0 },
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
                        <ScrapbookAnimation as={Text} positions={textPositions} fontSize="45px" fontWeight="bold" letterSpacing="10px" zIndex={3}>
                            {t["software"]} <br /> {t["engineer"]}
                        </ScrapbookAnimation>

                        <ScrapbookAnimation as={Box} positions={box1Positions} w="190px" h="220px" bg="#97B9B2" zIndex={1} />

                        <ScrapbookAnimation as={Box} positions={box2Positions} w="190px" h="220px" bg="#132021" zIndex={1} />

                        <ScrapbookAnimation
                            as={Image}
                            positions={imagePositions}
                            src={profileImg}
                            width="240px"
                            height="280px"
                            objectFit="cover"
                            zIndex={2}
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
                            <Text letterSpacing={"5px"}>{t["seemywork"]}</Text>
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
                        <Text as="a" href="#about" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>About Me</Text>
                        <Text as="a" href="#education" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Education</Text>
                        <Text as="a" href="#experience" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Experience</Text>
                        <Text as="a" href="#projects" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Projects</Text>
                        <Text as="a" href="#skills" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Skills</Text>
                        <Text as="a" href="#contact" fontSize="2xl" cursor="pointer" onClick={() => setShowNav(false)} _hover={ { textColor: "#97B9B2" }}>Contact</Text>
                        <IoClose cursor="pointer" onClick={toggleNav} size={"30px"} _hover={{ color: "teal" }}/>

                    </MotionBox>
                )}                
                </AnimatePresence>
            </Container>
        </>
    )
}
    
export default Welcome
