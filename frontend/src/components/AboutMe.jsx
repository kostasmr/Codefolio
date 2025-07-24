import gradientImg from '../assets/images/aboutme-image.png'
import { Container, Flex, Text, Image} from "@chakra-ui/react";
import { motion } from "framer-motion";


const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

function AboutMe () {
    return (
        <>
            <Container id="about" maxW={{ base: "90%", "2xl": "80%" }} h={"100vh"}>
                <MotionFlex
                    justify="space-between"
                    align="center"
                    paddingTop="200px"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Text fontSize="26px">About Me</Text>
                    <Text>/01</Text>
                </MotionFlex>

                <MotionText
                    fontSize="40px"
                    fontWeight="bold"
                    marginTop="50px"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Building Digital Experiences That<br />Solve Real Problems
                </MotionText>

                <MotionFlex
                    h="fit-content"
                    justify="center"
                    marginTop="54px"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <MotionImage
                        src={gradientImg}
                        alt="Gradient Image"
                        objectFit="cover"
                        width="350px"
                        height="200px"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    />

                    <MotionText
                        width="30%"
                        marginLeft="50px"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        I am a Computer Science & Engineering graduate with a strong interest
                        in software development. During my studies and a web development
                        internship, I worked on real-world projects, gained experience with
                        multiple programming languages, and learned how to solve problems
                        effectively while working in teams. Currently, I’m focused on growing
                        my skills in the field of software development through continuous
                        learning and hands-on practice. I am looking for an opportunity in a
                        collaborative and modern environment where I can contribute, grow
                        professionally, and take on new challenges.
                    </MotionText>
                </MotionFlex>
            </Container>
        </>
    )
}
    
export default AboutMe
