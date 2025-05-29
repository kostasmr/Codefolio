import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';  // Import the hook


const HomePage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/portfolio");
    };

    return (
        <Box minH={"100vh"} p={0} textAlign="center">
            <Flex
                direction="column"
                justify="center"
                align="center"
                height="100vh"
            >
                <Text
                    bgGradient='linear(to-l,rgb(122, 204, 227),rgb(39, 73, 227))'
                    bgClip='text'
                    fontSize={{ base: "22", sm: "40", md: "40", lg: "50", xl: "60" }}
                    textAlign={"center"}
                >
                    Codefolio
                </Text>
                <Button 
                    as="button" 
                    h={10}
                    w={150}
                    borderRadius={20}
                    bg="rgb(57, 89, 230)" 
                    color="white"
                    _hover={{ bg: "rgb(122, 204, 227)" }} 
                    rightIcon={<ArrowForwardIcon/>}
                    onClick={handleClick}
                    >
                    Let&#39;s Start
                </Button>
            </Flex>
        </Box>
    )
}

export default HomePage