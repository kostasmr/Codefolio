import { Button, Container, Flex, HStack, Link, useColorMode, useColorModeValue} from "@chakra-ui/react"
import { MdHomeFilled, MdOutlineNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useLanguage } from "./translation/useLanguage";

const Navbar = () => {
  const { colorMode, toggleColorMode} = useColorMode();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <Container maxW="100%" px={4} bg={useColorModeValue("gray.200","black")}>
      <Flex 
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row"
        }}
        p={{ base: "2" ,sm: "auto"}}
      >
        <HStack spacing={10}  alignItems={"center"} justify={"center"} w={"full"} wrap="wrap"> 
          <Link _hover={{ color: 'teal.500' }}>
            <MdHomeFilled size={18} />
          </Link>
          <Link _hover={{ textDecoration: 'none', color: 'teal.500' }}>{t.profile}</Link>
          <Link _hover={{ textDecoration: 'none', color: 'teal.500' }}>{t.education}</Link>
          <Link _hover={{ textDecoration: 'none', color: 'teal.500' }}>{t.projects}</Link>
          <Link _hover={{ textDecoration: 'none', color: 'teal.500' }}>{t.experience}</Link>
          <Link _hover={{ textDecoration: 'none', color: 'teal.500' }}>{t.certifications}</Link>
          <Link _hover={{ textDecoration: 'none', color: 'teal.500' }}>{t.skills}</Link>
        </HStack>
        <HStack spacing={2} alignItems={"center"} justify="flex-end">
          <Button onClick={toggleLanguage} fontSize={13}>
            {language === "en" ? "El" : "En"}
          </Button>
          <Button onClick={toggleColorMode}>
            { colorMode === "light" ? <MdOutlineNightlight/> : <CiLight/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar