import gradientImg from '../assets/images/experience-image.png'
import { Container, Text, Image, Flex} from "@chakra-ui/react";

function Experience () {
    return (
        <>
            <Container id='experience' maxW="100%" height="auto" bg={"black"} paddingTop={"200px"}>
                <Text align={"center"}>/03</Text>
                <Text align={"center"} marginTop={"80px"} fontSize={"26px"}>Experience</Text> 
                <Flex justify={"space-between"} marginTop={"150px"}>
                    <Image                       
                        src={gradientImg}
                        alt="Gradient Image"
                        objectFit="cover"
                        width={"60%"}
                    />
                    <Flex align={"flex-end"} direction={"column"} marginRight={"10%"}>
                        <Text marginTop={"50px"} fontWeight={"bold"}>Web Developer Intern</Text>
                        <Text marginTop={"10px"}>SoftWeb Adaptive I.T. Solutions</Text>
                        <Text marginTop={"20px"} fontSize={"14px"} fontWeight={"bold"}>07/2023 - 09/2023</Text>

                    </Flex>
                </Flex>


            </Container>
        </>
    )
}
    
export default Experience
