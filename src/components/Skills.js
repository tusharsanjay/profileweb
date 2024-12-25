import React from 'react'
import { Flex, Grid, GridItem, ProgressLabel, ProgressValueText, Text } from '@chakra-ui/react'
import { ProgressBar, ProgressRoot } from "./ui/progress"
import { motion } from 'framer-motion'

const Skills = () => {

    const MotionFlex = motion(Flex)
    const MotionText = motion(Text)
    const MotionGrid = motion(Grid)
    return (

        <Flex flexDirection='column' alignItems='center' borderRadius='10px' my='50px' w='100%' h='max-content' >
            <MotionText initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.5, }} fontSize='var(--text-30px)' fontWeight='900'>Skills</MotionText>
            <MotionGrid
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                exit={{ x: 100, opacity: 0 }}
                transition={{ duration: 0.7, }}
                py='40px' bgColor='#f2f3f7' borderRadius='5px' w='80%' templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(2, 1fr)', }}>
                <GridItem px='5%' my='10px' >
                    <ProgressRoot colorPalette='blue' color='red' maxW="100%" size='xs' value={95}>
                        <ProgressLabel mb="2">
                            AWS/Azure
                        </ProgressLabel>
                        <Flex gap='10px'>
                            <ProgressBar flex='1' />
                            <ProgressValueText>
                                95%
                            </ProgressValueText>
                        </Flex>
                    </ProgressRoot>
                </GridItem>
                <GridItem px='5%' my='10px' >
                    <ProgressRoot colorPalette='blue' color='red' maxW="100%" size='xs' value={85}>
                        <ProgressLabel mb="2">
                            Terraform
                        </ProgressLabel>
                        <Flex gap='10px'>
                            <ProgressBar flex='1' />
                            <ProgressValueText>
                                85%
                            </ProgressValueText>
                        </Flex>
                    </ProgressRoot>
                </GridItem>
                <GridItem px='5%' my='10px' >
                    <ProgressRoot colorPalette='blue' color='red' maxW="100%" size='xs' value={90}>
                        <ProgressLabel mb="2">
                            Jenkins
                        </ProgressLabel>
                        <Flex gap='10px'>
                            <ProgressBar flex='1' />
                            <ProgressValueText>
                                90%
                            </ProgressValueText>
                        </Flex>
                    </ProgressRoot>
                </GridItem>

                <GridItem px='5%' my='10px' >
                    <ProgressRoot colorPalette='blue' color='red' maxW="100%" size='xs' value={80}>
                        <ProgressLabel mb="2">
                            Docker
                        </ProgressLabel>
                        <Flex gap='10px'>
                            <ProgressBar flex='1' />
                            <ProgressValueText>
                                80%
                            </ProgressValueText>
                        </Flex>
                    </ProgressRoot>
                </GridItem>

                <GridItem px='5%' my='10px' >
                    <ProgressRoot colorPalette='blue' color='red' maxW="100%" size='xs' value={75}>
                        <ProgressLabel mb="2">
                            Kubernetes
                        </ProgressLabel>
                        <Flex gap='10px'>
                            <ProgressBar flex='1' />
                            <ProgressValueText>
                                75%
                            </ProgressValueText>
                        </Flex>
                    </ProgressRoot>
                </GridItem>

                <GridItem px='5%' my='10px' >
                    <ProgressRoot colorPalette='blue' color='red' maxW="100%" size='xs' value={90}>
                        <ProgressLabel mb="2">
                            Git
                        </ProgressLabel>
                        <Flex gap='10px'>
                            <ProgressBar flex='1' />
                            <ProgressValueText>
                                90%
                            </ProgressValueText>
                        </Flex>
                    </ProgressRoot>
                </GridItem>

                <GridItem px='5%' my='10px' >
                    <ProgressRoot colorPalette='blue' color='red' maxW="100%" size='xs' value={90}>
                        <ProgressLabel mb="2">
                            Linux
                        </ProgressLabel>
                        <Flex gap='10px'>
                            <ProgressBar flex='1' />
                            <ProgressValueText>
                                90%
                            </ProgressValueText>
                        </Flex>
                    </ProgressRoot>
                </GridItem>

                <GridItem px='5%' my='10px' >
                    <ProgressRoot colorPalette='blue' color='red' maxW="100%" size='xs' value={90}>
                        <ProgressLabel mb="2">
                            SonarCube/Maven
                        </ProgressLabel>
                        <Flex gap='10px'>
                            <ProgressBar flex='1' />
                            <ProgressValueText>
                                90%
                            </ProgressValueText>
                        </Flex>
                    </ProgressRoot>
                </GridItem>

            </MotionGrid>
        </Flex>

    )
}

export default Skills