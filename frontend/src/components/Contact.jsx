import gradientImg from '../assets/images/letswork-image.png';
import { Container, Image, Text, Flex, Link} from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Contact () {
    return (
        <>
            <Container maxW="100%" height="100vh" padding={5} bg={"black"} position={'relative'}>
                <Image
                    src={gradientImg}
                    alt="Gradient Image"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
                <Flex 
                    position="absolute"
                    top={0}
                    left={0}
                    width="100%"
                    height="100%"
                    direction="column"
                    justify="space-between"
                    color="white"
                    px={10}
                    py={6}
                    zIndex={1}
                >
                    <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        paddingInline={"40px"}
                        paddingTop={"20px"}
                    > 
                        <Text fontWeight={"bold"}>Thessaloniki, Greece</Text>                
                        <Text>+30 697 596 0090</Text>
                    </Flex>

                    <Flex 
                        justify={"center"}
                        align={"center"}
                        h={"full"}                        
                    >
                        <Text 
                            fontSize={"40px"} 
                            fontWeight={"bold"} 
                            letterSpacing={"10px"} 
                            align={"center"} 
                            >
                                LETS WORK <br /> TOGETHER
                            </Text>
                    </Flex>
                    <Flex                    
                        paddingInline={"40px"}
                        paddingBottom={"20px"}
                        justifyContent={"space-between"}
                    >
                        <Text fontWeight={"bold"}>Send me a message</Text>
                        <Text marginRight={"90px"}>kmourousidis@gmail.com</Text>
                        <Flex gap={5}>
                            <Link href="https://www.linkedin.com/in/konstantinos-mourousidis" isExternal _hover={{ color: "orange.400" }}>
                                <FaLinkedin size={30} />
                            </Link>
                            <Link href="https://github.com/kostasmr" isExternal _hover={{ color: "orange.400" }}>
                                <FaGithubSquare size={30} />
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}
    
export default Contact
