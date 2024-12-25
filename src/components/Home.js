import React from 'react';
import { Box, Button, Flex, Grid, GridItem, Image, List, Table, Text } from '@chakra-ui/react';
import bg_image from '../assets/home_section_bg.webp';
import profile from '../assets/profile.webp'
import { motion } from 'framer-motion';
import { FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoMail } from 'react-icons/io5';
import terraform from '../assets/terraform_aws.png'
import jenkins from '../assets/jenkins.png'
import docker from '../assets/docker.webp'
import Skills from './Skills';

 
const Home = () => {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const MotionFlex = motion(Flex)
    const MotionText = motion(Text)
    const MotionGrid = motion(Grid)
    const items = [
        { name: "EMAIL", category: "dtushar518@gmail.com" },
        { name: "PHONE NUMBER", category: "9168024177" },
        { name: "ADDRESS", category: "Pune" },
        { name: "DATE OF BIRTH", category: "15/12/1998" },
        { name: "LANGUAGE", category: "English, Hindi, Marathi" },
    ]
    return (
        <Flex bgColor="#fff" flexDirection="column" w="100%" h="100%">
            <Flex
                w="100%"
                h="600px"
                backgroundImage={`url(${bg_image})`}
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                backgroundPosition='center'
                flexDirection='column'
            >
                <Flex w='100%' h='100%' bgColor='rgba(0,0,0,0.5)'></Flex>
            </Flex>
            <Flex h='600px' w='100%' position='absolute' top='0' flexDirection='column'>

                <Flex w='100%' h='70px' alignItems='center' justifyContent='space-between' px='15%'>
                    <MotionText
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, }}
                        color='#fff'
                        w='max-content'
                        fontSize='var(--text-18px)'
                        onClick={() => { scrollToSection('home') }}
                    >
                        TUSHAR'S PORTFOLIO
                    </MotionText>
                    <Flex gap='20px' w='max-content'>
                        <MotionText initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            color='#fff'
                            fontSize='var(--text-18px)'
                            onClick={() => { scrollToSection('about') }}
                        >

                            About
                        </MotionText>
                        <MotionText initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            color='#fff'
                            fontSize='var(--text-18px)'
                            onClick={() => { scrollToSection('work') }}
                        >
                            Experiance
                        </MotionText>
                        <MotionText initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            color='#fff'
                            fontSize='var(--text-18px)'
                            onClick={() => { scrollToSection('projects') }}
                        >
                            Projects
                        </MotionText>
                        <MotionText initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            color='#fff'
                            fontSize='var(--text-18px)'
                            onClick={() => { scrollToSection('skills') }}
                        >
                            Skills
                        </MotionText>

                    </Flex>
                </Flex>

                <Flex w='100%' h='max-content' flexDirection='column'  >
                    <MotionFlex
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.9 }}
                        w='100%'
                        justifyContent='center'
                        alignItems='center'
                        mt='40px'
                    >
                        <Image src={profile} h='250px' w='250px' borderRadius='full' position='left' />
                    </MotionFlex>
                    <Flex w='100%' mt='20px' justifyContent='center' alignItems='center'>
                        <MotionText initial={{ x: -150, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1, }}
                            color='#fff' fontWeight='700' fontSize='var(--text-20px)'>
                            TUSHAL DURUTKAR
                        </MotionText>
                    </Flex>
                    <Flex my='10px' w='100%' justifyContent='center' alignItems='center'>
                        <MotionText initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 1.5, }}
                            color='#fff' fontWeight='500' fontSize='var(--text-18px)'>
                            IT & DEVOPS ENGINEER
                        </MotionText>
                    </Flex>
                    <MotionFlex
                        my='10px'
                        w='100%'
                        justifyContent='center'
                        alignItems='center'
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 1.5, }}
                    >
                        <Button bgColor='#FF5F1F' color='#fff' fontWeight='400' fontSize='var(--text-20px)'>
                            Download CV
                        </Button>
                    </MotionFlex>
                </Flex>
                <Flex>
                    <Flex w='100%' justifyContent='center' my='10px' gap='5px' fontSize='40px'>

                        {/* <Flex>
                            <FaFacebookF />
                        </Flex> */}
                        <Flex color='#fff !important' cursor='pointer'>
                            <IoMail color='#fff !important' />
                        </Flex>

                        <Flex color='#fff !important' cursor='pointer'>
                            <IoLogoLinkedin color='#fff !important' />
                        </Flex>

                        <Flex color='#fff !important' cursor='pointer'>
                            <FaGithub color='#fff !important' />
                        </Flex>

                        <Flex color='#fff !important' cursor='pointer'>
                            <FaInstagram color='#fff !important' />
                        </Flex>


                    </Flex>
                </Flex>
            </Flex>

            <Flex borderRadius='10px' my='50px' w='100%' justifyContent='center' h='max-content' id='about'>
                <Grid py='40px' borderRadius='5px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' w='80%' templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)', }}>
                    <GridItem px='5%' display='flex' flexDirection='column'>
                        <Text fontWeight='800' fontSize='var(--text-22px)'>
                            About
                        </Text>
                        <Text>
                            IT professional with <Text as='span' fontWeight='var(--text-700)'>3.8+ years</Text>  of hands-on experience in deploying and optimizing  <Text as='span' fontWeight='var(--text-700)'>CI/CD pipelines</Text> &
                            cloud based infrastructure on <Text as='span' fontWeight='var(--text-700)'> AWS, GCP</Text>. Proven expertise in automating build, deployment, and monitoring
                            processes using <Text as='span' fontWeight='var(--text-700)'> Jenkins, Docker, and Terraform</Text>, as well as in maintaining high code quality and security
                            standards through tools like SonarQube & Trivy. Also skilled with <Text as='span' fontWeight='var(--text-700)'> tomcat server, ticketing &
                                troubleshooting & performance optimization.</Text>
                        </Text>
                    </GridItem>
                    <GridItem px='5%' display='flex' flexDirection='column'>
                        <Text fontWeight='800' fontSize='var(--text-22px)'>
                            Basic Information
                        </Text>
                        <Flex>
                            <Table.Root color='#fff'>
                                <Table.Body bgColor='#00000000'>
                                    {items.map((item, index) => (
                                        <Table.Row key={index} bgColor='#00000000'>
                                            <Table.Cell p={1} borderBottom='none'>{item.name}</Table.Cell>
                                            <Table.Cell p={1} borderBottom='none'>{item.category}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Root>
                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>

            <MotionFlex my='50px' w='100%' flexDirection='column' id='work' alignItems='center' h='max-content' >
                <MotionText
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5, }}
                    fontSize='var(--text-30px)' my='10px' fontWeight='900'>
                    Work Experiance
                </MotionText>
                <MotionFlex
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.7, }}
                    flexDirection='column' borderRadius='5px' gap='10px' w='80%' bgColor='#f2f3f7' p='40px 20px'>
                    <Flex w='100%' gap='20px' >
                        <Text>Mobile Programming India Pvt Ltd</Text>
                        <Text color='#6b6b6b'>- April 2022 to Present, Pune, India</Text>
                    </Flex>
                    <Flex w='100%' gap='20px' flexDirection='column' >
                        <Text color='#545755'>Assistant IT/Network</Text>
                        <List.Root as='ul'>
                            <List.Item py='1px' as='li' color='#000'>Configured and <Text as='span' fontWeight='var(--text-700)'>troubleshot</Text> network devices, including<Text as='span' fontWeight='var(--text-700)'> routers, switches, and Wi-Fi access points</Text>.</List.Item>
                            <List.Item py='1px' as='li' color='#000'>Provided <Text as='span' fontWeight='var(--text-700)'> Tier 1 and Tier 2 technical support</Text> for hardware, software, and network issues to ensure minimal downtime.</List.Item>
                            <List.Item py='1px' as='li' color='#000'>Built and managed <Text as='span' fontWeight='var(--text-700)'> Docker containers </Text> to streamline application deployment and testing.</List.Item>
                            <List.Item py='1px' as='li' color='#000'>Deployed and managed cloud resources <Text as='span' fontWeight='var(--text-700)'> in AWS (EC2, S3, IAM)</Text> and Azure (VMs, Storage, Resource Groups).</List.Item>
                        </List.Root>
                    </Flex>
                </MotionFlex>
            </MotionFlex>

            <Flex my='50px' w='100%' flexDirection='column' id='projects' alignItems='center' h='max-content' >
                <MotionText
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.5, }}
                    my='10px' fontSize='var(--text-30px)' fontWeight='900'>Projects</MotionText>
                <MotionGrid initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    exit={{ x: 100, opacity: 0 }}
                    transition={{ duration: 0.7, }} py='40px' borderRadius='5px' gap='20px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' w='80%' templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(3, 1fr)', }}>
                    <GridItem px='5%' display='flex' flexDirection='column'>
                        <Box
                            borderRadius="lg"
                            p={4}
                            bg="white"
                        >
                            {/* Logo Section */}
                            <Flex w='100%' justifyContent="center" alignItems="center" mb={4}>
                                <Image

                                    src={terraform}
                                    alt="Terraform Logo"
                                    h='100px'
                                    w='auto'
                                    mr={2}
                                />

                            </Flex>

                            {/* Title Section */}
                            <Text fontWeight="bold" fontSize="lg" mb={2} textAlign="center">
                                Terraform-aws-s3 Module
                            </Text>

                            {/* Technology Section */}
                            <Text mb={4} textAlign="center">
                                <Text as="span" fontWeight="bold">Technology: </Text>
                                Terraform and Github Actions
                            </Text>


                        </Box>
                    </GridItem>

                    <GridItem px='5%' display='flex' flexDirection='column'>
                        <Box
                            maxW="sm"

                            borderRadius="lg"
                            overflow="hidden"

                            p={4}
                            bg="white"
                        >
                            {/* Logo Section */}
                            <Flex justifyContent="center" alignItems="center" mb={4}>
                                <Image
                                    src={jenkins}
                                    alt="Terraform Logo"
                                    h='100px'
                                    w='auto'
                                    mr={2}
                                />

                            </Flex>

                            {/* Title Section */}
                            <Text fontWeight="bold" fontSize="lg" mb={2} textAlign="center">
                                Pipeline Tools
                            </Text>

                            {/* Technology Section */}
                            <Text mb={4} textAlign="center">
                                <Text as="span" fontWeight="bold">Technology: </Text>
                                Jenkins
                            </Text>

                        </Box>
                    </GridItem>


                    <GridItem px='5%' display='flex' flexDirection='column'>
                        <Box
                            maxW="sm"

                            borderRadius="lg"

                            p={4}
                            bg="white"
                        >
                            {/* Logo Section */}
                            <Flex justifyContent="center" alignItems="center" mb={4}>
                                <Image
                                    src={docker}
                                    alt="Terraform Logo"
                                    // boxSize="50px"
                                    h='100px'
                                    w='auto'
                                    mr={2}
                                />

                            </Flex>

                            {/* Title Section */}
                            <Text fontWeight="bold" fontSize="lg" mb={2} textAlign="center">
                                Containarization
                            </Text>

                            {/* Technology Section */}
                            <Text mb={4} textAlign="center">
                                <Text as="span" fontWeight="bold">Technology: </Text>
                                Docker
                            </Text>


                        </Box>
                    </GridItem>
                </MotionGrid>
            </Flex>

            <Box id='skills'>
                <Skills />
            </Box>

        </Flex>
    );
};

export default Home;
