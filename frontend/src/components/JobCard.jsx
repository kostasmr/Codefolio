// components/JobOverlayCard.jsx
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { TbHandClick } from "react-icons/tb";



const JobCard = ({ image, title, company, duration, responsibilities, tools }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Flex justify="space-between" mt="100px">
                <Box position="relative" width="60%">
                    <Image src={image} alt={`${title}`} width="100%" />

                    {showDetails && 
                        <Box
                            position="absolute"
                            top={0}
                            left={0}
                            w="100%"
                            h="100%"
                            bg="rgba(0,0,0,0.6)"
                            color="white"
                            transition="0.3s ease"
                        >
                            <Flex justify={"space-between"} direction={"column"} h={"100%"}>
                                <Flex justify={"space-between"} marginTop={"5%"} marginInline={"5%"}>
                                    <Text fontWeight="bold">{title}</Text>
                                    <Text fontSize="14px">at {company}</Text>
                                </Flex>
                                
                                <Flex gap={"10px"} direction={"column"}>
                                    {responsibilities.map((item, idx) => (
                                        <Text key={idx} marginStart="5%">• {item}</Text>
                                    ))}
                                </Flex>

                                <Text textAlign={"end"} marginEnd={"5%"} marginBottom={"5%"}>{tools}</Text>
                            </Flex>
                        </Box>
                    }
                </Box>

            <Flex
                direction="column"
                mr="10%"
                color="white" 
            >
                <Flex justify={"flex-end"} align={"center"} marginBottom={"10px"} mr="20px">
                    <Text marginEnd={"20px"} letterSpacing={"5px"} color={"#D9D9D940"}>hover</Text>
                    <TbHandClick color={"#D9D9D960"} />             
                </Flex>
                
                <Flex
                    cursor="pointer"
                    direction="column"
                    h={"fit-content"}
                    onMouseEnter={() => setShowDetails(true)}
                    onMouseLeave={() => setShowDetails(false)}
                    _hover={{bg: "#D9D9D910"}}
                    p={"20px"}
                    textAlign={"end"}
                >
                    <Text fontWeight="bold">{title}</Text>
                    <Text mt="10px">{company}</Text>
                    <Text mt="20px" fontSize="14px" fontWeight="bold">{duration}</Text>
                </Flex>
            </Flex>
        </Flex>

    );
};

// Prop validation
JobCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
  tools: PropTypes.string.isRequired,
};

export default JobCard;
