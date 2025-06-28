import gradientImg from '../assets/images/gradient-image.png';
import profileImg from '../assets/images/profile.png';
import arrowDown from '../assets/icons/arrow-down.png';
import menu from '../assets/icons/menu.png';
import { Container, Image, Text, Flex, Box} from "@chakra-ui/react";

function Welcome () {
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
                        <Image src={menu} width={"40px"} alt="Menu Icon"/>                  
                        <Text letterSpacing={"5px"} marginLeft={"1px"}>
                            Codefolio
                        </Text>
                        <Flex gap={2}>
                            <Text fontWeight={"bold"}>EN</Text>
                            <Text>GR</Text>
                        </Flex>
                    </Flex>

                    <Flex 
                        justify={"center"}
                        align={"center"}
                        h={"full"}
                        position={"relative"}
                    >
                        <Text 
                            fontSize={"40px"} 
                            fontWeight={"bold"} 
                            letterSpacing={"10px"} 
                            align={"center"} 
                            position={"absolute"} 
                            top={"120px"} 
                            zIndex="3"
                            >
                                SOFTWARE <br /> ENGINEER
                            </Text>
                        <Box 
                            w={"190px"} 
                            h={"220px"} 
                            bg={"#97B9B2"}
                            position="absolute" 
                            zIndex="0"
                            transform="rotate(4deg)" 
                            top="190px"
                            left="calc(50% - 60px)"
                        />
                        <Box 
                            w={"190px"}
                            h={"220px"} 
                            bg={"#132021"}
                            position="absolute" 
                            zIndex="1"
                            transform="rotate(-3deg)" 
                            top="230px"
                            left="calc(50% - 120px)"
                        />
                        <Image
                            src={profileImg}
                            alt="Profile Image"
                            objectFit="cover"
                            width="190px"
                            height="220px"
                            zIndex="2"
                        />
                        
                    </Flex>
                    <Flex                    
                        paddingInline={"40px"}
                        paddingBottom={"20px"}
                        justifyContent={"space-between"}
                    >
                        <Text letterSpacing={"5px"} fontWeight={"bold"}>Konstantinos Mourousidis</Text>
                        <Flex gap={5} align={"center"}>
                            <Image src={arrowDown} width={"30px"} alt="Arrow Icon"/>
                            <Text letterSpacing={"5px"}>see my work</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}
    
export default Welcome
