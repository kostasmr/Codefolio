import gradientImg from '../assets/images/education-image.png'
import { Container, Flex, Text, Image} from "@chakra-ui/react";

function Education () {
    return (
        <>
            <Container maxW="100%" height="auto" bg={"black"} paddingTop={"200px"}>
                <Flex justify={"space-between"}>
                    <Flex marginLeft={"10%"} direction={"column"}>
                        <Text>/02</Text>
                        <Text marginTop={"180px"} fontSize={"26px"}>Education</Text>
                        <Text fontWeight={"bold"} marginTop={"280px"}>Integrated Master (5 years degree),<br/> Computer Science & Engineering</Text>
                        <Text marginTop={"25px"}>University of Ioannina</Text>
                        <Text fontWeight={"bold"} fontSize={"14px"} marginTop={"10px"}>9/2017 - 6/2023</Text>
                    </Flex>
                    
                    <Image                       
                        src={gradientImg}
                        alt="Gradient Image"
                        objectFit="cover"
                        width="500px"
                        height="100vh"
                    />

                </Flex>

            </Container>
        </>
    )
}
    
export default Education
