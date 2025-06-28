import gradientImg from '../assets/images/aboutme-image.png'
import { Container, Flex, Text, Image} from "@chakra-ui/react";

function AboutMe () {
    return (
        <>
            <Container maxW="80%" height="auto" bg={"black"}>
                <Flex
                    justify={"space-between"}
                    align={"center"}
                    paddingTop={"200px"}
                >
                    <Text fontSize={"26px"}>About Me</Text>
                    <Text>/01</Text>
                </Flex>

                <Text fontSize={"40px"} fontWeight={"bold"} marginTop={"50px"}>
                    Building Digital Experiences That<br />Solve Real Problems
                </Text>

                <Flex justify={"center"} marginTop="54px" paddingBottom={"200px"}>
                    <Image
                        src={gradientImg}
                        alt="Gradient Image"
                        objectFit="cover"
                        width="350px"
                        height="200px"
                    />
                    <Text width="30%" marginLeft={"50px"}>
                        I am a Computer Science & Engineering 
                        graduate with a strong interest in software development. 
                        During my studies and a web development internship, 
                        I worked on real-world projects, gained experience with multiple programming languages, 
                        and learned how to solve problems effectively while working in teams. 
                        Currently, I’m focused on growing my skills in the field of software development 
                        through continuous learning and hands-on practice. I am looking for an opportunity 
                        in a collaborative and modern environment where I can contribute, grow professionally, 
                        and take on new challenges.
                    </Text>
                </Flex>
            </Container>
        </>
    )
}
    
export default AboutMe
