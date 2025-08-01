import gradientImg from '../assets/images/letswork-image.png';
import { Container, Image, Text, Flex, Link, Box} from "@chakra-ui/react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useLanguage } from '../tools/translation/useLanguage';


function Contact () {

    const {t} = useLanguage();

    return (
        <>
            <Container id="contact" maxW="100%" h={{ sm: "40vh", tablet:"60vh", desktop:"100vh", lg:"100vh"}} padding={{ sm: "1", tablet:"3", desktop:"5"}} bg={"black"} position={'relative'}>
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
                    p={{ sm: "1", tablet:"3", desktop:"5"}}
                    zIndex={1}
                >
                    <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                        paddingInline={{sm: "10px", tablet: "25px",lg:"40px"}}
                        paddingTop={{sm: "10px",tablet: "15px",lg:"20px"}}
                    > 
                        <Text textStyle="tb">{t["thess"]}, {t["gr"]}</Text>                
                        <Text textStyle="t">+30 697 596 0090</Text>
                    </Flex>

                    <Flex 
                        justify={"center"}
                        align={"center"}
                        h={"full"}                        
                    >
                        <Text 
                            textStyle="h"
                            letterSpacing={{sm: "3px", tablet: "5px",lg: "10px"}}
                            align={"center"} 
                            >
                                {t["LETSWORK"]} <br /> {t["TOGETHER"]}
                            </Text>
                    </Flex>
                    <Flex                    
                        paddingInline={{sm: "10px", tablet: "25px",lg:"40px"}}
                        paddingBottom={{sm: "10px",tablet: "15px",lg:"20px"}}
                        justifyContent={"space-between"}
                        align={"end"}
                    >
                        <Text textStyle="tb">{t["sendme"]}</Text>
                        <Text textStyle="t" marginRight={{sm: "38px",tablet: "30px",desktop: "120px"}}>kmourousidis@gmail.com</Text>
                        <Flex gap={{sm: 2,tablet: 5}}>
                            <Link href="https://www.linkedin.com/in/konstantinos-mourousidis" isExternal transition="all 0.3s ease" _hover={{ color: "orange.400", transform: "translateY(-4px)" }}>
                                <Box fontSize={{ sm: "20px", tablet: "30px", desktop: "40px", lg: "40px" }}>
                                    <FaLinkedin />
                                </Box>
                            </Link>
                            <Link href="https://github.com/kostasmr" isExternal transition="all 0.3s ease" _hover={{ color: "orange.400", transform: "translateY(-4px)" }}>
                                <Box fontSize={{ sm: "20px", tablet: "30px", desktop: "40px", lg: "40px" }}>
                                    <FaGithubSquare />
                                </Box>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}
    
export default Contact
