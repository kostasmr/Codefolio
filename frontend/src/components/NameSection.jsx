import profileImage from '../assets/images/profile.png';
import { Container, Flex, Text, Image} from "@chakra-ui/react";

function NameSection () {
    return (
        <>
            <Container maxW="90%" px={4} minH="calc(100vh - 300px)">
                <Flex
                    justify="center"
                    align="center"
                    maxW="100%"
                    gap="100px"
                    h="calc(100vh - 300px)"
                >
                    <Image
                        src={profileImage}
                        alt="Profile"
                        borderRadius="full"
                        boxSize="300px"  
                        objectFit="cover"
                    />
                    <Flex
                        direction="column"
                        justify="flex-start"
                    >
                        <Text fontSize="5xl">Konstantinos Mourousidis</Text>
                        <Text fontSize="2xl" fontWeight="bold">Software Engineer</Text>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}
    
export default NameSection
