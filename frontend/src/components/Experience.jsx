import gradientImg from '../assets/images/experience-image.png'
import { Container, Text, Grid, GridItem, Flex} from "@chakra-ui/react";
import JobCard from './JobCard';
import { motion } from "framer-motion";


const MotionText = motion(Text);


function Experience () {
    return (
        <>
            <Container id='experience' maxW="100%">
                <Grid templateRows="repeat(5, 1fr)" gap="1" h="full">
                    <GridItem rowSpan={1} position="relative">
                        <Flex justify="center">
                            <MotionText
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                            /03
                            </MotionText>
                        </Flex>

                        <Flex h="full" justify="center" align="center" position="absolute" top="0" left="0" right="0" bottom="0">
                            <MotionText
                                fontSize="26px"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                            Experience
                            </MotionText>
                        </Flex>
                    </GridItem>
                    <GridItem rowSpan={3}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <JobCard
                                image={gradientImg}
                                title="Web Developer Intern"
                                company="SoftWeb Adaptive I.T. Solutions"
                                duration="07/2023 - 09/2023"
                                responsibilities={[
                                    "Developed an admin web application with Angular, implementing features based on client requirements.",
                                    "Built and documented RESTful APIs using Node.js, Postman, and MongoDB for data handling and integration.",
                                    "Collaborated with mobile developers to ensure API compatibility and smooth cross-platform functionality.",
                                    "Worked on additional projects, including implementing bilingual support (English/Greek) for web applications.",
                                ]}
                                tools={'Angular / Node.js / MongoDB / Postman'}
                            />
                        </motion.div>
                    </GridItem>
                    <GridItem rowSpan={1} position="relative">

                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
    
export default Experience
