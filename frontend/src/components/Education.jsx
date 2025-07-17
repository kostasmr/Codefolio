import gradientImg from '../assets/images/education-image.png'
import { Container, Text, Image, Grid, GridItem, Flex} from "@chakra-ui/react";

function Education () {
    return (
        <>
            <Container id="education"  h="100vh" maxW="90%" ms={"10%"}>
                <Grid templateColumns="repeat(3, 1fr)" gap="1" h="full">
                    <GridItem colSpan={2}>
                        <Flex h={"full"} direction={"column"}>
                            <Flex direction={"column"}>
                                <Text>/02</Text>
                                <Text fontSize={"26px"} mt={"100px"}>Education</Text>
                            </Flex>
                            <Flex h={"full"} direction={"column"} justify={"end"} mb="150px">
                                <Text fontWeight={"bold"}>Integrated Master (5 years degree),<br/> Computer Science & Engineering</Text>
                                <Text mt="20px">University of Ioannina</Text>
                                <Text fontWeight={"bold"} fontSize={"14px"} mt="10px">9/2017 - 6/2023</Text>
                            </Flex>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Image                       
                            src={gradientImg}
                            alt="Gradient Image"
                            objectFit="cover"
                            width="full"
                            h="full"
                        />
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
}
    
export default Education
