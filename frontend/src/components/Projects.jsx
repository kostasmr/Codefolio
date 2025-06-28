import { Container, Text, Flex} from "@chakra-ui/react";

function Projects () {
    return (
        <>
            <Container maxW="100%" height="auto" bg={"black"} paddingTop={"200px"}>
                <Flex justify={"space-between"} paddingInline={"10%"}>
                    <Text fontSize={"26px"}>Projects</Text> 
                    <Text>/04</Text>
                </Flex>
            </Container>
        </>
    )
}
    
export default Projects
