// components/JobOverlayCard.jsx
import { Box, Flex, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { TbHandClick } from "react-icons/tb";



const JobCard = ({ image, title, company, duration, responsibilities, tools }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Flex justify="space-between" h="100%"> 
                <Box position="relative" width="60%" >
                    <Image src={image} alt={`${title}`} width="100%" h="100%" objectFit="cover"/>

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
                            <Grid templateColumns="repeat(10, 1fr)" gap="1"  h={"full"}>
                                <GridItem colSpan={4} ms={"10%"} mt={"15%"}>
                                        <Text fontWeight="bold" fontSize={"32px"}>{title}</Text>
                                        <Text mt={"20px"} fontSize="14px">at {company}</Text>
                                </GridItem>
                                <GridItem colSpan={6}>
                                    <Flex gap={"20px"} direction={"column"} h={"full"} justify={"center"} w={"90%"}>
                                        {responsibilities.map((item, idx) => (
                                            <Text key={idx}>• {item}</Text>
                                        ))}
                                        <Text mt={"20px"} fontSize="14px">{tools}</Text>
                                    </Flex>
                                </GridItem>
                            </Grid>
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
