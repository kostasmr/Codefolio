import { Container, Text, Flex, HStack, Image, Box} from "@chakra-ui/react";
import project01 from '../assets/images/tickest-image.png';
import project02 from '../assets/images/apotheke-image.png';
import project03 from '../assets/images/webdesign-image.png';
import { useState } from "react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);


const projectsData = [
    { id: 1, title: "Tickest", image: project01, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 2, title: "Apotheke", image: project02, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 3, title: "Web design", image: project03, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 4, title: "Tickest", image: project01, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 5, title: "Apotheke", image: project02, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
    { id: 6, title: "Web design", image: project03, about: "This is an app that make this is an mappp tha make this is this is an app tha mmek this is an app app that make" },
];


function Projects () {

    const [projects, setProjects] = useState(projectsData);

    const rotateProjects = (index) => {
        const newOrder = [...projects.slice(index), ...projects.slice(0, index)];
        setProjects(newOrder);
    };

    return (
        <>
            <Container maxW="100%" height="auto" bg={"black"} paddingTop={"200px"}>
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
                                onClick={() => rotateProjects(index)}
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
            </Container>
        </>
    )
}
    
export default Projects
