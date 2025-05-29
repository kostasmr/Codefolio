import Navbar from "../components/Navbar";
import { Container, Flex, Text, Image, useColorModeValue, Link } from "@chakra-ui/react";
import profileImage from '../assets/images/profile.png';
import { useLanguage } from "../tools/translation/useLanguage";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import NameSection from "../components/NameSection";




const PortfolioPage = () => {
  
  const { t } = useLanguage();

  return (
    <>
    <Navbar />
    <NameSection />
    

    {/* PROFILE */}
    <Container maxW="100%" px={300} minH="calc(100vh - 100px)" bg={useColorModeValue("gray.400","gray.800")}>
      <Flex
        justify="center"
        align="center"
        direction="column"
        w="full"
        gap={20}
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"} mt={20}>{t.profile}</Text>
        <Text fontSize="2xl" textAlign={"center"}>I am a graduate in Computer Science & Engineering, with a strong interest in software development and problem-solving. My academic work, including my diploma thesis on graph clustering, has equipped me with programming skills and a deep understanding of data structures. During a two-month internship in web development, I gained hands-on experience with modern web technologies, improving my technical abilities through real-world projects. I am willing to apply my skills in software development and grow professionally in a dynamic work environment.</Text>
        <Container maxW="800px" minH="400px" bg={'red.600'} mb={100}></Container>
      </Flex>
    </Container>

    {/* EDUCATION */}
    <Container maxW="100%" px={20} minH="calc(100vh - 100px)">
      <Flex
        flex="1" 
        textAlign="left" 
        align="flex-start"
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign="left" mt={20}>{t.education}</Text>
      </Flex>
      <Flex
        direction={{ base: "column", sm: "row" }}  
        align="center"  
        justify="center" 
        w="80%"
        minH="calc(100vh - 300px)"
      >
        <Flex flex="1" justifyContent="center" alignItems="center">
          <Image
            src={profileImage}
            alt="Profile"
            boxSize="600px"  
            objectFit="cover"
          />
        </Flex>
        <Flex 
          flex="1" 
          textAlign="left" 
          pt={{ base: 10, sm: 0 }}
          direction="column" 
          align="flex-start"
          ml={{ sm: 2 }} 
        >
          <Text fontSize="2xl">Integrated Master (five-year-degree), Computer Science & Engineering</Text>
          <Text fontSize="2xl" fontWeight="bold">University of Ioannina</Text>
        </Flex>
      </Flex>
    </Container>

    {/* PROJECTS */}
    <Container maxW="100%" px={{ sm: 1, lg: 40}} minH="calc(100vh - 100px)">
      <Flex
        justify="center"
        align="center"
        direction="column"
        w="full"
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"} mt={350} mb={10}>{t.projects}</Text>
      </Flex>
      <Flex 
          direction="row"
          justify="center"
          align="center" 
        >
          <IoIosArrowDropleftCircle size={80}/>
          <Container w={ { lg:450,sm:120}} h={{ lg:650,sm:250}} bg={'red.600'} mb={{lg:"20", sm:"5"}} borderRadius={{ lg:50, sm:20 }}></Container>
          <Container w={{ lg:530, sm: 160 }} h={{ lg:720, sm:300}} bg={'red.300'} mb={{lg:"20", sm:"5"}} borderRadius={{ lg:50, sm:20 }}></Container>
          <Container w={ { lg:450, sm:120}}  h={{ lg:650, sm:250}} bg={'red.600'} mb={{lg:"20", sm:"5"}} borderRadius={{ lg:50, sm:20 }}></Container>
          <IoIosArrowDroprightCircle size={80}/>
        </Flex>
    </Container>

    {/* WORK EXPERIENCE */}
    <Container maxW="100%" px={{ sm: 1, lg: 20}} minH="calc(100vh - 100px)">
      <Flex
        flex="1" 
        textAlign="left" 
        align="flex-start"
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign="left" mt={20}>{t.experience}</Text>
      </Flex>
      <Flex
        justify="center"
        align="center"
        direction="column"
        w="full"
        gap={20}
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"} mt={20}>- SoftWeb</Text>
      </Flex>
    </Container>

    {/* CERTIFICATIONS */}
    <Container maxW="100%" px={20} minH="calc(100vh)" bg={useColorModeValue("gray.400","gray.800")}>
      <Flex
        justify="center"
        align="center"
        direction="column"
        w="full"
        gap={20}
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"} mt={20}>{t.certifications}</Text>
        <Container maxW="900px" h="600px" borderRadius={30} bg={'red.600'} mb={100}></Container>
      </Flex>
    </Container>

    {/* SKILLS */}
    <Container maxW="100%" px={20} minH="calc(100vh)">
      <Flex
        justify="center"
        align="center"
        direction="column"
        w="full"
        gap={10}
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign={"center"} mt={20}>{t.skills}</Text>
        <Container w="600px" h="600px" borderRadius={30} bg={'red.600'}>
          <Container maxW="400px" h="200px" borderRadius={30} bg={'white'} mb={10}></Container>
          <Container maxW="400px" h="200px" borderRadius={30} bg={'white'} mb={10}></Container>
        </Container>
      </Flex>
    </Container>

      <hr
          style={{
              backgroundColor: "black",
              height: 2
          }}
      />
      {/* CONTACTS */}
      <Container maxW="100%" px={20} minH="700px" bg={useColorModeValue("gray.200","gray.200")}>
      <Flex
        flex="1" 
        textAlign="left" 
        align="flex-start"
      >
        <Text fontSize="4xl" fontWeight="bold" textAlign="left" mt={20} color="black">{t.contacts}</Text>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        direction="row"
        w="full"
        gap={10}
        px={200}
        mt={100}
      >
        <Flex
          justify="center"
          align="left"
          direction="column"
          gap={5}
        >
          <Text fontSize="4xl" color="black">+30 697 596 0090</Text>
          <Text fontSize="4xl" color="black">kmourousidis@gmail.com</Text>
          <Flex
            justify="left"
            align="center"
            direction="row"
            w="full"
            gap={10}
          >
            <Link 
              as="a" 
              href="https://github.com/kostasmr" 
              target="_blank" 
              rel="noopener noreferrer"
              color={"black"}
              _hover={{ color: 'rgb(168, 76, 192)' }}
            >
              <FaGithub size={60}/>
            </Link>
            <Link 
              as="a" 
              href="https://www.linkedin.com/in/konstantinos-mourousidis/" 
              target="_blank" 
              rel="noopener noreferrer"
              color={"black"}
              _hover={{ color: 'rgb(39, 73, 227)' }}
            >
              <FaLinkedin size={60}/>
            </Link>
          </Flex>
        </Flex>
        <Text fontSize="4xl"color="black">Thessaloniki, Greece</Text>
      </Flex>
      <hr
          style={{
              backgroundColor: "black",
              height: 0.1,
              marginTop:180,
          }}
      />
      <Text fontSize="1xl"color="black" textAlign={"center"} mt={5}>Copyrights © 2025 Codefolio</Text>
    </Container>
    </>
  )
}

export default PortfolioPage