import gradientImg from '../assets/images/experience-image.png'
import { Container, Text, Grid, GridItem, Flex} from "@chakra-ui/react";
import JobCard from './JobCard';

function Experience () {
    return (
        <>
            <Container id='experience' maxW="100%"  bg={"red"}>
                <Grid templateRows="repeat(5, 1fr)" gap="1" h="full">
                    <GridItem rowSpan={1} position="relative">
                        <Flex justify="center">
                            <Text>/03</Text>
                        </Flex>

                        <Flex h="full" justify="center" align="center" position="absolute" top="0" left="0" right="0" bottom="0">
                            <Text fontSize="26px">Experience</Text>
                        </Flex>
                    </GridItem>
                    <GridItem rowSpan={3}>
                        <JobCard
                            image={gradientImg}
                            title="Web Developer Intern"
                            company="SoftWeb Adaptive I.T. Solutions"
                            duration="07/2023 - 09/2023"
                            responsibilities={["Developed an admin web application with Angular, implementing features based on client requirements.",
                                "Built and documented RESTful APIs using Node.js, Postman, and MongoDB for data handling and integration.",
                                "Collaborated with mobile developers to ensure API compatibility and smooth cross-platform functionality.",
                                "Worked on additional projects, including implementing bilingual support (English/Greek) for web applications."]}
                            tools={'Angular / Node.js / MongoDB / Postman'}
                        />
                    </GridItem>
                    <GridItem rowSpan={1} position="relative">

                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
    
export default Experience
