import { Container, Text, Flex, Image, Box} from "@chakra-ui/react";
import hardSkillsImg from '../assets/images/hardskills-image.png';
import softSkillsImg from '../assets/images/softskills-image.png';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const MotionBox = motion(Box);

function Skills () {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    const skills = [
        { name: "Problem Solving", percentage: 90 },
        { name: "Teamwork", percentage: 80 },
        { name: "Adaptability", percentage: 85 },
        { name: "Creativity", percentage: 75 },
        { name: "Attention to Detail", percentage: 90 },
    ];

    const getGradient = (percentage) => {
        const whiteStart = Math.min(percentage + 7, 100);
        return `linear-gradient(to right, #B0E8E0 0%, #142425 ${percentage}%, #FFFFFF ${whiteStart}%, #FFFFFF 100%)`;
    };

    return (
        <>
            <Container id="skills" maxW="100%" height="100vh" bg={"black"}>
                <Flex justify={"space-between"} paddingInline={"10%"}>
                    <Text>/05</Text>
                    <Text fontSize={"26px"}>Hard Skills</Text> 
                </Flex>
                <Flex paddingInline={"10%"} align={"center"} justify={"space-between"} h="full">
                    <Flex direction={"column"} fontSize={"14px"}>
                        <Text>JAVA</Text>
                        <Text>PYTHON</Text>
                        <Text>HTML/CSS</Text>
                        <Text>JAVASCRIPT</Text>
                        <Text>MOBILE DEV: KOTLIN</Text>
                        <Text>FRONTEND DEV: REACT.JS, ANGULAR</Text>
                        <Text>BACKEND DEV: NODE.JS, SPRING BOOT</Text>
                        <Text>DATABASES: MONGODB, MYYSQL</Text>
                        <Text>TOOLS: VS CODE, ANDROID SDK, GITHUB, FIGMA, POSTMAN</Text>
                    </Flex>
                    <Image 
                        src={hardSkillsImg}
                        alt="Hard Skills Image"
                        objectFit="cover"
                        width="400px"
                        height="500px"                
                    />
                </Flex>
            </Container>
            <Container maxW="100%" height="100vh" bg={"black"}>
                <Text fontSize={"26px"} marginStart={"10%"}>Soft Skills</Text> 
                <Flex paddingInline={"10%"} align={"center"} h="full">
                    <Image 
                        src={softSkillsImg}
                        alt="Soft Skills Image"
                        objectFit="cover"
                        width="450px"
                        height="550px"                
                    />
                    <Flex direction="column" marginStart="100px" flex={1} ref={ref}>
                        {skills.map((skill, index) => (
                            <Box key={index} marginBottom="20px">
                                <Flex justify="space-between" marginBottom="10px">
                                    <Text>{skill.name}</Text>
                                    <Text>{skill.percentage}%</Text>
                                </Flex>
                                <Box
                                    w="100%"
                                    h="15px"
                                    bg="teal.50"
                                    borderRadius="full"
                                    overflow="hidden"
                                >
                                    <MotionBox
                                        h="100%"
                                        bg={getGradient(skill.percentage)}
                                        initial={{ width: "0%" }}
                                        animate={{ width: isInView ? "100%" : "0%" }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                        borderRadius="full"
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}
    
export default Skills
