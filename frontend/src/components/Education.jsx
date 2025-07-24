import gradientImg from '../assets/images/education-image.png'
import { Container, Text, Image, Grid, GridItem, Flex} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);


function Education () {
    return (
        <>
            <Container id="education"  h="100vh" maxW="90%" ms={"10%"}>
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
                                <Text>/02</Text>
                                <Text fontSize="26px" mt="100px">Education</Text>
                            </MotionFlex>

                            {/* Degree info */}
                            <MotionFlex
                                h="full"
                                direction="column"
                                justify="end"
                                mb="150px"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Text fontWeight="bold">
                                    Integrated Master (5 years degree),<br /> Computer Science & Engineering
                                </Text>
                                <Text mt="20px">University of Ioannina</Text>
                                <Text fontWeight="bold" fontSize="14px" mt="10px">9/2017 - 6/2023</Text>
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
