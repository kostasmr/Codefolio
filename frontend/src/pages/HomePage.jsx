import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

const HomePage = () => {
    return (
        <Box minH={"100vh"} p={0} textAlign="center" bg="black" color="white">
            <Flex
                direction="column"
                justify="center"
                align="center"
                height="100vh"
            >
                <Text
                    bgGradient='linear(to-l,rgb(122, 204, 227),rgb(39, 73, 227))'
                    bgClip='text'
                    fontSize={{ base: "22", sm: "28"}}
                    fontWeight='bold'
                    textAlign={"center"}
                >
                    Codefolio
                </Text>
                <Button colorScheme="blue" mt={4} rightIcon={<ArrowForwardIcon/>}>Let&#39;s Start</Button>
            </Flex>
        </Box>
    )
}

export default HomePage