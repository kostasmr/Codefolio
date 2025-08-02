import { Container, Text, Flex, HStack, Image, Box, Grid, GridItem, Link} from "@chakra-ui/react";
import tickest from '../assets/images/tickest.png';
import tickest2 from '../assets/images/tickest-square.png';
import apotheke from '../assets/images/apotheke.png';
import apotheke2 from '../assets/images/apotheke-square.png';
import webdesign from '../assets/images/web-design.png';
import webdesign2 from '../assets/images/webdesign-square.png';
import xchangeit from '../assets/images/xchangeit.png';
import xchangeit2 from '../assets/images/xchangeit-square.png';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { TbBrandKotlin } from "react-icons/tb";
import { SiAndroidstudio } from "react-icons/si";
import { FaNode, FaHtml5, FaCss3Alt, FaAngular, FaReact } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from '../tools/translation/useLanguage';


const MotionFlex = motion(Flex);
const MotionBox = motion(Box);



const projectsData = [
    {   
        id: 1, 
        title: "XChangeIt", 
        subtitle: {en: "Currency Converter Web App", el: "Διαδικτυακή Εφαρμογή Μετατροπής Νομισμάτων"}, 
        image: [xchangeit,  xchangeit2], 
        stack: [{ tech: "React", link: "https://react.dev/"}, { tech: "Node.js", link: "https://nodejs.org/en"}], 
        color: "#23b385ff", 
        code: "https://github.com/kostasmr/XChangeIt", 
        demo: "https://vimeo.com/1100094225", 
        about: { 
            en: "XChangeIt is a modern currency converter web application that allows users to manage and convert \
                currencies using both custom and live exchange rates. Built with full-stack technologies, this app provides \
                a secure and responsive interface for personal currency management.",
            el: "Το XChangeIt είναι μια σύγχρονη διαδικτυακή εφαρμογή μετατροπής νομισμάτων που επιτρέπει στους χρήστες να διαχειρίζονται και να μετατρέπουν \
                νομίσματα χρησιμοποιώντας τόσο προσαρμοσμένες όσο και ζωντανές συναλλαγματικές ισοτιμίες. Κατασκευασμένη με τεχνολογίες full-stack, αυτή η εφαρμογή παρέχει \
                μια ασφαλή και ανταποκρινόμενη διεπαφή για την προσωπική διαχείριση νομισμάτων." 
        }
    },
    {   
        id: 2,
        title: "Tickest", 
        subtitle: {en: "Event Booking Android App", el: "Android Εφαρμογή Για Κρατήσεις Εκδηλώσεων"}, 
        image: [tickest,  tickest2], 
        stack: [{ tech: "Kotlin", link: "https://kotlinlang.org"}, 
                { tech: "Android SDK", link: "https://developer.android.com/studio"}, 
                { tech: "Node.js", link: "https://nodejs.org/en"}], 
        color: "#d7265bff", 
        code: "https://github.com/kostasmr/Frontend-Events", 
        demo: "https://vimeo.com/1095895759/18d52248d9",
        about: {
            en: "Tickest is a modern Android mobile application developed for seamless event booking experiences. \
                Whether it's concerts, theater, or sports events, Tickest lets users discover, book, and manage tickets \
                directly from their phones. Built during a bootcamp project by a team of three, we collaborated using \
                the Scrum methodology and followed a design-first approach based on Figma mockups.",
            el: "Το Tickest είναι μια σύγχρονη εφαρμογή για κινητά Android που έχει αναπτυχθεί για να προσφέρει μια απρόσκοπτη εμπειρία κράτησης εισιτηρίων για εκδηλώσεις. \
                Είτε πρόκειται για συναυλίες, θεατρικές παραστάσεις ή αθλητικές εκδηλώσεις, το Tickest επιτρέπει στους χρήστες να ανακαλύπτουν, να κρατούν και να διαχειρίζονται εισιτήρια \
                απευθείας από τα κινητά τους τηλέφωνα. Δημιουργήθηκε κατά τη διάρκεια ενός bootcamp project από μια ομάδα τριών ατόμων, συνεργαστήκαμε χρησιμοποιώντας \
                τη μεθοδολογία Scrum και ακολουθήσαμε μια προσέγγιση που έδινε προτεραιότητα στο σχεδιασμό με βάση τα mockups του Figma."    
        }
    },
    { 
        id: 3, 
        title: "Web design", 
        subtitle: {en: "Responsive One-Page Website", el: "Ιστότοπος Μίας Σελίδας"}, 
        image: [webdesign,  webdesign2], 
        stack: [{ tech: "HTML", link: "https://www.google.com/search?q=html"}, 
                { tech: "CSS", link: "https://www.google.com/search?q=css"}], 
        color: "#8f5cf6ff", 
        code: "https://github.com/kostasmr/Web-Design-HTML-CSS", 
        demo: "", 
        about: {
            en: "This is a responsive one-page website designed and developed based on a Figma prototype that \
                was also designed by me. The purpose of this project is to translate a high-fidelity UI design into a clean, \
                structured HTML & CSS implementation. It serves as both a design-to-code exercise and a responsive web design showcase.",
            el: "Πρόκειται για έναν ανταποκρινόμενο ιστότοπο μίας σελίδας που σχεδιάστηκε και αναπτύχθηκε με βάση ένα πρωτότυπο Figma που \
                σχεδιάστηκε επίσης από εμένα. Ο σκοπός αυτού του έργου είναι να μεταφράσει ένα σχεδιασμό UI υψηλής πιστότητας σε μια καθαρή, \
                δομημένη εφαρμογή HTML & CSS. Χρησιμεύει τόσο ως άσκηση σχεδιασμού σε κώδικα όσο και ως βιτρίνα ανταποκρινόμενου σχεδιασμού ιστοσελίδων."
        }
    },
    { 
        id: 4, 
        title: "Apotheke", 
        subtitle: {en: "Order Management Web App", el: "Διαδικτυακή Εφαρμογή Διαχείρισης Παραγγελιών"}, 
        image: [apotheke,  apotheke2], 
        stack: [{ tech: "Angular", link: "https://angular.dev/"}, 
                { tech: "Node.js", link: "https://nodejs.org/en"}], 
        color: "#1d4cdbff", 
        code: "https://github.com/kostasmr/Apotheke", 
        demo: "", 
        about: {
            en: "Apotheke is a web application designed to streamline order management for users and administrators. \
                It provides a seamless experience for placing, tracking, and managing orders. Whether you're a regular user or an admin, \
                Apotheke ensures smooth operations with an intuitive interface and other features.",
            el: "Το Apotheke είναι μια διαδικτυακή εφαρμογή που έχει σχεδιαστεί για να απλοποιεί τη διαχείριση παραγγελιών για χρήστες και διαχειριστές. \
                Παρέχει μια απρόσκοπτη εμπειρία για την υποβολή, την παρακολούθηση και τη διαχείριση παραγγελιών. Είτε είστε τακτικός χρήστης είτε διαχειριστής, \
                το Apotheke εξασφαλίζει ομαλή λειτουργία με ένα διαισθητικό περιβάλλον εργασίας και άλλες λειτουργίες."    
        }
    },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      duration: 1.5,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

function Projects () {

    const [projects, setProjects] = useState(projectsData);
    const [activeProject, setActiveProject] = useState(null);
    const {t, language} = useLanguage();

    const project = {en: "project", el: "εργασία"}
    const code = {en: "code", el: "κώδικας"}
    const demo = {en: "demo", el: "βίντεο"}


    const rotateProjects = (index) => {
        const newOrder = [...projects.slice(index), ...projects.slice(0, index)];
        setProjects(newOrder);
    };

    // Disable scroll when a project is open
    useEffect(() => {
        if (activeProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [activeProject]);

    const takeStackIcon = (stack) => {
        if(stack == "Kotlin"){
            return <TbBrandKotlin/>
        } else if(stack == "Android SDK"){
            return <SiAndroidstudio/>
        } else if(stack == "Node.js"){
            return <FaNode/>
        } else if(stack == "Angular"){
            return <FaAngular/>
        } else if(stack == "React"){
            return <FaReact/>
        } else if(stack == "HTML"){
            return <FaHtml5/>
        } else if(stack == "CSS"){
            return <FaCss3Alt/>
        }
    }

    return (
        <>
            <Container id="projects" maxW="100%" h={{ sm: "40vh", tablet:"50vh", desktop:"100vh", lg:"100vh"}} bg={"black"}>
                <Flex h="full" direction={"column"} justify={"center"}>
                    <Flex justify={"space-between"} paddingInline={{sm: "5%", desktop: "10%"}}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Text textStyle="sh">{t["projects"]}</Text>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <Text textStyle="t">/04</Text>
                        </motion.div>
                    </Flex>
                    <MotionBox 
                        w="100%" 
                        px={{sm: "5%", desktop: "10%"}} 
                        mt={{sm: "50", desktop: "100px" }}
                        h="70%"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <HStack spacing={{ sm: 1, tablet: 3, desktop: 6}} align="start">
                            {projects.map((project, index) => (
                                <MotionFlex
                                    key={project.id}
                                    layout
                                    direction="column"
                                    onClick={() => {
                                        if (index === 0) {
                                            setActiveProject(project)
                                        } else {
                                            rotateProjects(index)
                                        }
                                    }}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ layout: { duration: 1, type: "spring" } }}
                                    cursor="pointer"
                                    w={index === 0 ? "80%" : "20%"}
                                    h={index === 0 ? "100%" : "100%"}
                                    zIndex={index === 0 ? 1 : 0}
                                    boxShadow={index === 0 ? "lg" : "none"}
                                    overflow="hidden"
                                    variants={cardVariants}
                                >
                                    <Text textStyle="t">0{project.id}</Text>
                                    <Box position="relative" w="100%" pt="56.25%">
                                        <Image
                                            src={project.image[0]}
                                            objectFit="cover"
                                            position="absolute"
                                            top={0}
                                            left={0}
                                            width="100%"
                                            height="100%"
                                            alt={project.title}
                                        />
                                    </Box>
                                    <Box marginTop={{ sm: "3px",tablet: "5px",desktop:"10px"}}>
                                        <Text fontSize={index === 0 ? {sm: "10px",tablet: "14px", desktop: "20px",lg: "22px"} : {sm: "8px",tablet: "10px", desktop: "10px",lg: "20px"}}>{project.title}</Text>
                                        <Text fontSize={index === 0 ? {sm: "8px",tablet: "10px", desktop: "14px",lg: "16px"} : {sm: "6px",tablet: "8px", desktop: "12px",lg: "14px"}} color="#ffffff50">{project.subtitle[language]}</Text>
                                    </Box>
                                </MotionFlex>
                            ))}
                        </HStack>
                    </MotionBox>
                </Flex>

                <AnimatePresence>
                {activeProject && (
                    <MotionBox
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        position="fixed"
                        top={0}
                        left={0}
                        w="100vw"
                        h="100vh"
                        padding={{sm: 2,tablet : 5}}
                        bg="#1e1e1eff"
                        color="white"
                        zIndex={2000}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        gap={6}
                    >
                        <Box w={"95%"} h={{sm: "70vh",tablet: "90vh"}} bg={"black"} overflow="auto">
                            <Grid templateColumns={{ tablet: "1fr", desktop: "repeat(2, 1fr)" }} gap={{sm: "0",desktop: "1"}}  h={"100%"}>
                                <GridItem colSpan={1} h="100%">
                                    <Flex h={"full"} justify={"center"} align={"center"} display={{sm: "none", desktop: "flex"}}>
                                        <Box
                                            position="relative"
                                            w="95%"
                                            h="95%"
                                            role="group"
                                        >
                                            <Image
                                                src={activeProject.image[1]}
                                                objectFit="cover"
                                                w="100%"
                                                h="100%"
                                                alt={activeProject.title}
                                                // _groupHover={{ filter: "blur(3px)" }}
                                            />

                                            {/* <Flex
                                                position="absolute"
                                                top="0"
                                                left="0"
                                                w="100%"
                                                h="100%"
                                                justify="center"
                                                align="center"
                                                opacity="0"
                                                _groupHover={{ opacity: 1 }}
                                                bg="rgba(0, 0, 0, 0.3)"
                                            >
                                                <Box
                                                    px="20px"
                                                    py="10px"
                                                    border="1px solid white"
                                                    backdropFilter="blur(6px)"
                                                    color="white"
                                                    cursor="pointer"
                                                    _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
                                                >
                                                    Gallery
                                                </Box>
                                            </Flex> */}
                                        </Box>
                                    </Flex>
                                    <Flex h={"full"} justify={"center"} align={"center"} display={{sm: "flex", desktop: "none"}}>
                                        <Image
                                            src={activeProject.image[0]}
                                            objectFit="cover"
                                            w="95%"
                                            h="95%"
                                            alt={activeProject.title}
                                        />
                                    </Flex>
                                </GridItem>
                                <GridItem colSpan={1} h="100%">
                                    <Flex justify={"center"} align={"center"} h={"full"}>
                                        <Flex direction={"column"} w={"95%"} h={"95%"}>
                                            <Flex justify={"end"}>
                                                <IoClose cursor="pointer" onClick={() => setActiveProject(null)} size={"30px"}/>
                                            </Flex>
                                            <Text textStyle="h">{activeProject.title}</Text>
                                            <Text mt={{sm: "5px",desktop: "5px",lg: "5px"}} textStyle="h2">{activeProject.subtitle[language]}</Text>
                                            <Text mt={{sm: "10px",desktop: "10px",lg: "10px"}} w={"90%"} textStyle="t" letterSpacing={"3%"}>{activeProject.about[language]}</Text>
                                            <Flex mt={{sm: "20px",desktop: "20px",lg: "20px"}} gap={{sm: "10px",tablet: "20px",desktop: "30px",lg :"50px"}}>
                                                {activeProject.stack?.map((stack, idx) => (
                                                    <Flex as="a" key={idx} target="_blank" href={stack.link} direction={"column"} align={"center"} justify={"center"}  cursor={"pointer"} role="group">
                                                        <Box fontSize={{sm: "25px",tablet: "40px",desktop: "50px",lg:"60px"}} color={"#575757ff"} _groupHover={{ color: activeProject?.color || "white" }}>
                                                            {takeStackIcon(stack.tech)}
                                                        </Box>
                                                        <Text textStyle="ts" mt={"10px"} color={"#575757ff"} _groupHover={{ color: activeProject?.color || "white"}}>{stack.tech}</Text>
                                                    </Flex>
                                                ))}
                                            </Flex>
                                            <Flex align={"end"} h={"full"} justify={"space-between"}>
                                                <Text textStyle="t">{project[language]} 0{activeProject.id}</Text>
                                                {activeProject.code && (
                                                    <Link 
                                                        href={activeProject.code}
                                                        isExternal 
                                                        textDecor="underline"
                                                        display="inline-flex" 
                                                        alignItems="end" 
                                                        gap="4px"
                                                        transition="all 0.3s ease"
                                                        _hover={{ transform: "translateY(-4px)"}}
                                                    >
                                                        <Text as="span" textStyle="t">{code[language]}</Text>
                                                        <Box as={FiArrowUpRight} fontSize={{sm: "12px", tablet: "15px",desktop: "20px"}}/>
                                                    </Link>
                                                )}
                                                {activeProject.demo && (
                                                    <Link 
                                                        href={activeProject.demo}
                                                        isExternal 
                                                        textDecor="underline"
                                                        display="inline-flex" 
                                                        alignItems="end" 
                                                        gap="4px"
                                                        transition="all 0.3s ease"
                                                        _hover={{ transform: "translateY(-4px)"}}
                                                    >
                                                        <Text as="span" textStyle="t">{demo[language]}</Text>
                                                        <Box as={FiArrowUpRight} fontSize={{sm: "12px", tablet: "15px",desktop: "20px"}}/>
                                                    </Link>
                                                )}
                                            </Flex>
                                        </Flex>
                                    </Flex>
                                </GridItem>
                            </Grid>
                        </Box>
                    </MotionBox>
                )}                
                </AnimatePresence>

            </Container>
        </>
    )
}
    
export default Projects
