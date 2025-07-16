import { Container, Text, Flex, HStack, Image, Box, Grid, GridItem} from "@chakra-ui/react";
import project01 from '../assets/images/tickest-image.png';
import project02 from '../assets/images/apotheke-image.png';
import project03 from '../assets/images/webdesign-image.png';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { TbBrandKotlin } from "react-icons/tb";
import { SiAndroidstudio } from "react-icons/si";
import { FaNode } from "react-icons/fa";


const MotionFlex = motion(Flex);
const MotionBox = motion(Box);



const projectsData = [
    { id: 1, title: "Tickest", image: project01, stack: ["Kotlin", "Android SDK", "Node.js"], color: "#e00f5bff", about: "Tickest is a modern Android mobile application developed for seamless event booking experiences. Whether it's concerts, theater, or sports events, Tickest lets users discover, book, and manage tickets directly from their phones. Built during a bootcamp project by a team of three, we collaborated using the Scrum methodology and followed a design-first approach based on Figma mockups." },
    { id: 2, title: "Apotheke", image: project02, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 3, title: "Web design", image: project03, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 4, title: "Tickest", image: project01, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 5, title: "Apotheke", image: project02, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 6, title: "Web design", image: project03, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
];


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
        }
    }

    return (
        <>
            <Container id="projects" maxW="100%" height="auto" bg={"black"} paddingTop={"200px"}>
                <Flex justify={"space-between"} paddingInline={"10%"}>
                    <Text fontSize={"26px"}>Projects</Text> 
                    <Text>/04</Text>
                </Flex>
                <Box w="100%" overflow="hidden" px="10%" py="100px">
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
                                        rotateProjects(index);
                                    }
                                }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ layout: { duration: 1.0, type: "spring" } }}
                                cursor="pointer"
                                w={index === 0 ? "350px" : "250px"}
                                h={index === 0 ? "480px" : "360px"}
                                zIndex={index === 0 ? 1 : 0}
                                boxShadow={index === 0 ? "lg" : "none"}
                                overflow="hidden"
                            >
                                <Text>0{project.id}</Text>
                                <Image
                                src={project.image}
                                objectFit="cover"
                                w="100%"
                                h="70%"
                                alt={project.title}
                                />
                                <Box marginTop={"10px"}>
                                    <Text fontSize={index === 0 ? "22px" : "16px"}>{project.title}</Text>
                                    <Text fontSize={index === 0 ? "16px" : "12px"} color="gray.500">12 July 2023</Text>
                                </Box>
                            </MotionFlex>
                        ))}
                    </HStack>
                </Box>
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
                            <Grid templateColumns="repeat(10, 1fr)" gap="1"  h={"full"}>
                                <GridItem colSpan={4} >
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
                                <GridItem colSpan={6}>
                                    <Flex justify={"center"} align={"center"} h={"full"}>
                                        <Flex direction={"column"} w={"95%"} h={"95%"}>
                                            <Flex justify={"end"}>
                                                <IoClose cursor="pointer" onClick={() => setActiveProject(null)} size={"30px"}/>
                                            </Flex>
                                            
                                            <Text fontWeight={"bold"} fontSize={"45px"}>{activeProject.title}</Text>
                                            <Text mt={"10px"} fontSize={"45px"}>Event Booking Android App</Text>
                                            <Text mt={"40px"} w={"80%"} fontSize={"20px"} letterSpacing={"3%"}>{activeProject.about}</Text>
                                            <Flex mt={"40px"} gap={"50px"}>
                                                {activeProject.stack?.map((tech, idx) => (
                                                    <Flex key={idx} direction={"column"} align={"center"} justify={"center"}  cursor={"pointer"} role="group">
                                                        <Box fontSize="80px" color={"#575757ff"} _groupHover={{ color: "white" }}>
                                                            {takeStackIcon(tech)}
                                                        </Box>
                                                        <Text mt={"10px"} color={"#575757ff"} _groupHover={{ color: "white" }}>{tech}</Text>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                            <Flex align={"end"} h={"full"} justify={"space-between"}>
                                                <Text>project 0{activeProject.id}</Text>
                                                <Text textDecor={"underline"}>code</Text>
                                                <Text textDecor={"underline"}>demo</Text>
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
