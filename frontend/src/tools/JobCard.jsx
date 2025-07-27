// components/JobOverlayCard.jsx
import { Box, Flex, Image, Text, Grid, GridItem } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { TbHandClick } from "react-icons/tb";



const JobCard = ({ image, title, company, duration, responsibilities, tools }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Flex justify="space-between" h="100%" direction={{sm: "column", tablet:"row"}} align={{sm: "center", tablet: "start"}}> 
            <Box position="relative" w={{sm: "90%",tablet: "60%"}}>
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
                            <GridItem colSpan={4} ms={{sm: "5%",lg: "10%"}} mt={{sm: "10%",lg :"15%"}}>
                                    <Text textStyle="sh">{title}</Text>
                                    <Text mt={{sm: "10px",lg: "20px"}} textStyle="t">at {company}</Text>
                            </GridItem>
                            <GridItem colSpan={6}>
                                <Flex gap={{sm: "5px",tablet: "10px",lg: "20px"}} direction={"column"} h={"full"} justify={"center"} w={{sm: "95%",lg: "90%"}}>
                                    {responsibilities.map((item, idx) => (
                                        <Text key={idx} textStyle="ts">• {item}</Text>
                                    ))}
                                    <Text mt={"20px"} textStyle="ts">{tools}</Text>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Box>
                }
            </Box>

            <Flex
                direction="column"
                mr={{sm: "5%",lg:"10%"}}
                color="white" 
            >
                <Flex justify={"flex-end"} align={"center"} marginBottom={{sm: "5px",lg: "10px"}} mr="20px" display={{sm: "none", tablet: "flex"}}>
                    <Text marginEnd={"20px"} letterSpacing={"5px"} color={"#D9D9D940"} textStyle="t">hover</Text>
                    <TbHandClick color={"#D9D9D960"}/>             
                </Flex>
                
                <Flex
                    cursor="pointer"
                    direction="column"
                    h={"fit-content"}
                    onMouseEnter={() => setShowDetails(true)}
                    onMouseLeave={() => setShowDetails(false)}
                    // onClick={handleClick}
                    _hover={{bg: "#D9D9D910"}}
                    p={{sm: "10px",lg: "20px"}}
                    textAlign={{sm: "center",tablet: "end"}}
                    mt={{sm: "20px", tablet: "0"}}
                >
                    <Text textStyle="tb">{title}</Text>
                    <Text mt={{sm: "5px",lg: "10px"}} textStyle="t">{company}</Text>
                    <Text mt={{sm: "10px",lg: "20px"}} textStyle="tb">{duration}</Text>
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
