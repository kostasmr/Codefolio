import gradientImg from '../assets/images/aboutme-image.png'
import { Container, Flex, Text, Image} from "@chakra-ui/react";
import { useLanguage } from '../tools/translation/useLanguage';
import { motion } from "framer-motion";


const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

function AboutMe () {

    const {t, language} = useLanguage();

    const sh = { en: "Building Digital Experiences That", el: "Δημιουργία ψηφιακών εμπειριών που"}
    const sh2 = { en: "Solve Real Problems", el: "επιλύουν πραγματικά προβλήματα"}
    const about = { en: "I am a Computer Science & Engineering graduate with a strong interest\
                        in software development. During my studies and a web development\
                        internship, I worked on real-world projects, gained experience with\
                        multiple programming languages, and learned how to solve problems\
                        effectively while working in teams. Currently, I’m focused on growing\
                        my skills in the field of software development through continuous\
                        learning and hands-on practice. I am looking for an opportunity in a\
                        collaborative and modern environment where I can contribute, grow\
                        professionally, and take on new challenges."
                    , el: "Είμαι απόφοιτος Μηχανικών Η/Υ και Πληροφορικής με έντονο ενδιαφέρον για την ανάπτυξη λογισμικού. \
                        Κατά τη διάρκεια των σπουδών μου και της πρακτικής άσκησης στον τομέα της ανάπτυξης ιστοσελίδων, \
                        εργάστηκα σε πραγματικά έργα, απέκτησα εμπειρία σε πολλές γλώσσες προγραμματισμού \
                        και έμαθα πώς να επιλύω προβλήματα αποτελεσματικά ενώ εργάζομαι σε ομάδες. \
                        Αυτή τη στιγμή, επικεντρώνομαι στην ανάπτυξη των δεξιοτήτων μου στον τομέα της \
                        ανάπτυξης λογισμικού μέσω της συνεχούς μάθησης και της πρακτικής εξάσκησης. \
                        Αναζητώ μια ευκαιρία σε ένα συνεργατικό και σύγχρονο περιβάλλον όπου θα μπορώ να συνεισφέρω, \
                        να εξελιχθώ επαγγελματικά και να αναλάβω νέες προκλήσεις."
                    }

    return (
        <>
            <Container id="about" maxW={{ sm: "90%", lg: "80%" }} h={{ sm: "40vh", tablet:"50vh", desktop:"100vh", lg:"100vh"}}>
                <MotionFlex
                    justify="space-between"
                    align="center"
                    paddingTop={{ sm: "100px", tablet:"150px", desktop:"180px", lg:"200px"}}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Text  textStyle="sh">{t["aboutme"]}</Text>
                    <Text  textStyle="t">/01</Text>
                </MotionFlex>

                <MotionText
                    textStyle="h"
                    textAlign={{sm: "center", tablet: "start"}}
                    marginTop={{ sm: "40px", tablet:"30px", desktop:"50px"}}
                    w="100%"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {sh[language]}<br />{sh2[language]}
                </MotionText>

                <MotionFlex
                    h="fit-content"
                    justify="center"
                    align={{sm: "center", tablet: "start"}}
                    direction={{sm: "column",tablet: "row"}}
                    marginTop={{ sm: "15px", tablet:"35px", desktop:"55px", lg:"55px"}}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <MotionImage
                        src={gradientImg}
                        alt="Gradient Image"
                        objectFit="cover"
                        w={{ sm: "180px", tablet:"250px", desktop:"350px"}}
                        h={{ sm: "100px", tablet:"150px", desktop:"200px"}}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                    />

                    <MotionText
                        textStyle="t"
                        textAlign={{sm: "center", tablet: "start"}}
                        w={{ sm: "84%", tablet:"40%", desktop:"40%", lg:"35%"}}
                        ml={{ sm: "0", tablet:"30px", desktop:"50px"}}
                        mt={{ sm: "15px", tablet: "0"}}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {about[language]}
                    </MotionText>
                </MotionFlex>
            </Container>
        </>
    )
}
    
export default AboutMe
