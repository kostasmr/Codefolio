import gradientImg from '../assets/images/experience-image.png'
import { Container, Text} from "@chakra-ui/react";
import JobCard from './JobCard';

function Experience () {
    return (
        <>
            <Container id='experience' maxW="100%" height="auto" bg={"black"} paddingTop={"200px"}>
                <Text align={"center"}>/03</Text>
                <Text align={"center"} marginTop={"80px"} fontSize={"26px"}>Experience</Text> 

                <JobCard
                    image={gradientImg}
                    title="Web Developer Intern"
                    company="SoftWeb Adaptive I.T. Solutions"
                    duration="07/2023 - 09/2023"
                    responsibilities={["Built React components","Integrated REST APIs","Daily standups & code reviews"]}
                    tools={'Angular / Node.js / MongoDB / Postman'}
                />
            </Container>
        </>
    )
}
    
export default Experience
