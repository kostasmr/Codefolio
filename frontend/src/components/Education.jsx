import gradientImg from '../assets/images/education-image.png'
import { Container, Text, Image, Grid, GridItem, Flex} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);


function Education () {
    return (
        <>
            <Container id="education"  h={{ sm: "40vh", tablet:"60vh", desktop:"100vh"}} maxW={{sm: "95%",lg: "90%"}} ms={{sm: "5%", lg:"10%"}}>
                <Grid templateColumns="repeat(3, 1fr)" gap="1" h="full">
                    <GridItem colSpan={2}>
                        <Flex h={"full"} direction={"column"}>
                            {/* Section heading */}
                            <MotionFlex
                                direction="column"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <Text textStyle="t">/02</Text>
                                <Text textStyle="sh" mt={{sm: "50px",tablet: "100px"}}>Education</Text>
                            </MotionFlex>

                            {/* Degree info */}
                            <MotionFlex
                                h="full"
                                direction="column"
                                justify="end"
                                mb={{sm: "50px",tablet: "100px",lg: "150px"}}
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Text textStyle="tb">
                                    Integrated Master (5 years degree),<br /> Computer Science & Engineering
                                </Text>
                                <Text mt={{sm: "10px", tablet:"20px"}} textStyle="t">University of Ioannina</Text>
                                <Text textStyle="tb" mt={{sm: "5px",tablet: "10px"}}>9/2017 - 6/2023</Text>
                            </MotionFlex>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <MotionImage
                            src={gradientImg}
                            alt="Gradient Image"
                            objectFit="cover"
                            width="100%"
                            height="100%"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.4 }}
                            viewport={{ once: true }}
                        />
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
    
export default Education
