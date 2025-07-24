import { Container, Text, Flex, Image, Box, Grid, GridItem} from "@chakra-ui/react";
import hardSkillsImg from '../assets/images/hardskills-image.png';
import softSkillsImg from '../assets/images/softskills-image.png';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";



const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);



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

    const hardSkills = [
        "JAVA",
        "PYTHON",
        "HTML/CSS",
        "JAVASCRIPT",
        "MOBILE DEV: KOTLIN",
        "FRONTEND DEV: REACT.JS, ANGULAR",
        "BACKEND DEV: NODE.JS, SPRING BOOT",
        "DATABASES: MONGODB, MYSQL",
        "TOOLS: VS CODE, ANDROID SDK, GITHUB, FIGMA, POSTMAN"
    ]

    const getGradient = (percentage) => {
        const whiteStart = Math.min(percentage + 7, 100);
        return `linear-gradient(to right, #B0E8E0 0%, #142425 ${percentage}%, #FFFFFF ${whiteStart}%, #FFFFFF 100%)`;
    };

    return (
        <>
            <Container id="skills" maxW="100%" height="100vh" bg={"black"}>
                <MotionFlex 
                    justify={"space-between"} 
                    paddingInline={"10%"}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                        <Text>/05</Text>
                        <Text fontSize={"26px"}>Hard Skills</Text> 
                </MotionFlex>
                <Flex paddingInline={"10%"} align={"center"} justify={"space-between"} h="full">
                    <Flex direction={"column"} fontSize={"14px"}>
                        {hardSkills.map((skill, i) => (
                            <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 * i }}
                            viewport={{ once: true }}
                            >
                            <Text>{skill}</Text>
                            </motion.div>
                        ))}
                    </Flex>
                    <MotionImage 
                        src={hardSkillsImg}
                        alt="Hard Skills Image"
                        objectFit="cover"
                        width="400px"
                        height="500px"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}                
                    />
                </Flex>
            </Container>
            <Container maxW="100%" height="100vh" bg={"black"}>
                <MotionText 
                    fontSize={"26px"} 
                    marginStart={"10%"}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    Soft Skills
                </MotionText> 
                
                <Grid templateColumns="repeat(2, 1fr)" gap="1" h="full" paddingInline={"10%"}>
                    <GridItem colSpan={1} alignContent={"center"}>
                        <MotionImage 
                            src={softSkillsImg}
                            alt="Soft Skills Image"
                            objectFit="cover"
                            width="100%"
                            height="auto"
                            maxW={"450px"}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}                  
                        />

                    </GridItem>
                    <GridItem colSpan={1} alignContent={"center"}>
                        <Flex direction="column" marginStart="10px" flex={1} ref={ref}>
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
                                            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                                            borderRadius="full"
                                        />
                                    </Box>
                                </Box>
                            ))}
                        </Flex>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
    
export default Skills
