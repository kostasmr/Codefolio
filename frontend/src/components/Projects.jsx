import { Container, Text, Flex, HStack, Image, Box, Grid, GridItem, Link} from "@chakra-ui/react";
import project01 from '../assets/images/tickest.png';
import project02 from '../assets/images/apotheke.png';
import project03 from '../assets/images/web-design.png';
import project04 from '../assets/images/xchangeit.png';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { TbBrandKotlin } from "react-icons/tb";
import { SiAndroidstudio } from "react-icons/si";
import { FaNode, FaHtml5, FaCss3Alt, FaAngular, FaReact } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";



const MotionFlex = motion(Flex);
const MotionBox = motion(Box);



const projectsData = [
    { id: 1, title: "Tickest", subtitle: "Event Booking Android App", image: project01, stack: [{ tech: "Kotlin", link: "https://kotlinlang.org"}, { tech: "Android SDK", link: "https://developer.android.com/studio"}, { tech: "Node.js", link: "https://nodejs.org/en"}], color: "#d7265bff", code: "https://github.com/kostasmr/Frontend-Events", demo: "https://vimeo.com/1095895759/18d52248d9", about: "Tickest is a modern Android mobile application developed for seamless event booking experiences. Whether it's concerts, theater, or sports events, Tickest lets users discover, book, and manage tickets directly from their phones. Built during a bootcamp project by a team of three, we collaborated using the Scrum methodology and followed a design-first approach based on Figma mockups." },
    { id: 2, title: "Apotheke", subtitle: "Order Management Web App", image: project02, stack: [{ tech: "Angular", link: "https://angular.dev/"}, { tech: "Node.js", link: "https://nodejs.org/en"}], color: "#3325ffff", code: "https://github.com/kostasmr/Apotheke", demo: "", about: "Apotheke is a web application designed to streamline order management for users and administrators. It provides a seamless experience for placing, tracking, and managing orders. Whether you're a regular user or an admin, Apotheke ensures smooth operations with an intuitive interface and other features." },
    { id: 3, title: "Web design", subtitle: "Responsive One-Page Website", image: project03, stack: [{ tech: "HTML", link: "https://www.google.com/search?q=html"}, { tech: "CSS", link: "https://www.google.com/search?q=css"}], color: "#8f5cf6ff", code: "https://github.com/kostasmr/Web-Design-HTML-CSS", demo: "", about: "This is a responsive one-page website designed and developed based on a Figma prototype that was also designed by me. The purpose of this project is to translate a high-fidelity UI design into a clean, structured HTML & CSS implementation. It serves as both a design-to-code exercise and a responsive web design showcase." },
    { id: 4, title: "XChangeIt", subtitle: "Currency Converter Web App", image: project04, stack: [{ tech: "React", link: "https://react.dev/"}, { tech: "Node.js", link: "https://nodejs.org/en"}], color: "#23b385ff", code: "https://github.com/kostasmr/XChangeIt", demo: "https://vimeo.com/1100094225", about: "XChangeIt is a modern currency converter web application that allows users to manage and convert currencies using both custom and live exchange rates. Built with full-stack technologies, this app provides a secure and responsive interface for personal currency management." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};


function Projects () {

    const [projects, setProjects] = useState(projectsData);
    const [activeProject, setActiveProject] = useState(null);


    const rotateProjects = (index) => {
        const newOrder = [...projects.slice(index), ...projects.slice(0, index)];
        setProjects(newOrder);
    };

    // Disable scroll when a project is open
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject]);

    const takeStackIcon = (stack) => {
        if(stack == "Kotlin"){
            return <TbBrandKotlin/>
        } else if(stack == "Android SDK"){
            return <SiAndroidstudio/>
        } else if(stack == "Node.js"){
            return <FaNode/>
        } else if(stack == "Angular"){
            return <FaAngular/>
        } else if(stack == "React"){
            return <FaReact/>
        } else if(stack == "HTML"){
            return <FaHtml5/>
        } else if(stack == "CSS"){
            return <FaCss3Alt/>
        }
    }

    return (
        <>
            <Container id="projects" maxW="100%" height="100vh" bg={"black"}>
                <Flex h="full" direction={"column"} justify={"center"}>
                    <Flex justify={"space-between"} paddingInline={"10%"}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Text fontSize="26px">Projects</Text>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Text>/04</Text>
                        </motion.div>
                    </Flex>
                    <MotionBox 
                        w="100%" 
                        px="10%" 
                        mt="100px" 
                        h="70%"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <HStack spacing={6} align="start">
                            {projects.map((project, index) => (
                                <MotionFlex
                                    key={project.id}
                                    layout
                                    direction="column"
                                    onClick={() => {
                                        if (index === 0) {
                                            setActiveProject(project)
                                        } else {
                                            rotateProjects(index)
                                        }
                                    }}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ layout: { duration: 1, type: "spring" } }}
                                    cursor="pointer"
                                    w={index === 0 ? "80%" : "20%"}
                                    h={index === 0 ? "100%" : "100%"}
                                    zIndex={index === 0 ? 1 : 0}
                                    boxShadow={index === 0 ? "lg" : "none"}
                                    overflow="hidden"
                                    variants={cardVariants}
                                >
                                    <Text>0{project.id}</Text>
                                    <Box position="relative" w="100%" pt="56.25%">
                                        <Image
                                            src={project.image}
                                            objectFit="cover"
                                            position="absolute"
                                            top={0}
                                            left={0}
                                            width="100%"
                                            height="100%"
                                            alt={project.title}
                                        />
                                    </Box>
                                    <Box marginTop={"10px"}>
                                        <Text fontSize={index === 0 ? "22px" : "16px"}>{project.title}</Text>
                                        <Text fontSize={index === 0 ? "16px" : "12px"} color="#ffffff50">{project.subtitle}</Text>
                                    </Box>
                                </MotionFlex>
                            ))}
                        </HStack>
                    </MotionBox>
                </Flex>

                <AnimatePresence>
                {activeProject && (
                    <MotionBox
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        position="fixed"
                        top={0}
                        left={0}
                        width="100vw"
                        height="100vh"
                        padding={5}
                        bg="#1e1e1eff"
                        color="white"
                        zIndex={2000}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={6}
                    >
                        <Box w={"95%"} h={"90%"} bg={"black"}>
                            <Grid templateColumns="repeat(2, 1fr)" gap="1"  h={"full"}>
                                <GridItem colSpan={1} >
                                    <Flex h={"full"} justify={"center"} align={"center"}>
                                        <Image
                                            src={activeProject.image}
                                            objectFit="cover"
                                            w="95%"
                                            h="95%"
                                            alt={activeProject.title}
                                        />
                                    </Flex>
                                </GridItem>
                                <GridItem colSpan={1}>
                                    <Flex justify={"center"} align={"center"} h={"full"}>
                                        <Flex direction={"column"} w={"95%"} h={"95%"}>
                                            <Flex justify={"end"}>
                                                <IoClose cursor="pointer" onClick={() => setActiveProject(null)} size={"30px"}/>
                                            </Flex>
                                            
                                            <Text fontWeight={"bold"} fontSize={"45px"}>{activeProject.title}</Text>
                                            <Text mt={"10px"} fontSize={"45px"}>{activeProject.subtitle}</Text>
                                            <Text mt={"40px"} w={"80%"} fontSize={"20px"} letterSpacing={"3%"}>{activeProject.about}</Text>
                                            <Flex mt={"40px"} gap={"50px"}>
                                                {activeProject.stack?.map((stack, idx) => (
                                                    <Flex as="a" key={idx} target="_blank" href={stack.link} direction={"column"} align={"center"} justify={"center"}  cursor={"pointer"} role="group">
                                                        <Box fontSize="80px" color={"#575757ff"} _groupHover={{ color: activeProject?.color || "white" }}>
                                                            {takeStackIcon(stack.tech)}
                                                        </Box>
                                                        <Text mt={"10px"} color={"#575757ff"} _groupHover={{ color: activeProject?.color || "white"}}>{stack.tech}</Text>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                            <Flex align={"end"} h={"full"} justify={"space-between"}>
                                                <Text>project 0{activeProject.id}</Text>
                                                {activeProject.code && (
                                                <Link 
                                                    href={activeProject.code}
                                                    isExternal 
                                                    textDecor="underline"
                                                    display="inline-flex" 
                                                    alignItems="end" 
                                                    gap="4px"
                                                    transition="all 0.3s ease"
                                                    _hover={{ transform: "translateY(-4px)"}}
                                                >
                                                    <Text as="span">code</Text>
                                                    <Box as={FiArrowUpRight} fontSize="20px"/>
                                                </Link>
                                                )}
                                                {activeProject.demo && (
                                                <Link 
                                                    href={activeProject.demo}
                                                    isExternal 
                                                    textDecor="underline"
                                                    display="inline-flex" 
                                                    alignItems="end" 
                                                    gap="4px"
                                                    transition="all 0.3s ease"
                                                    _hover={{ transform: "translateY(-4px)"}}
                                                >
                                                    <Text as="span">demo</Text>
                                                    <Box as={FiArrowUpRight} fontSize="20px"/>
                                                </Link>
                                                )}
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </GridItem>
                            </Grid>
                        </Box>
                    </MotionBox>
                )}                
                </AnimatePresence>
            </Container>
        </>
    )
}
    
export default Projects
