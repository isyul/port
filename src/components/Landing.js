import React from 'react';
import avatar from '../IMG/avatar.jfif';
import Wood from '../IMG/wood.jpg';
import { Box, Flex, Image, Text, Button, VStack } from '@chakra-ui/react';

const Landing = () => {
    return (
        <Flex
            as="section"
            minH="100vh"
            align="center"
            justify="center"
            bgImage= {Wood}
            bgPos="center"
            bgSize="cover"
            color="white"
            position="relative"
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: 'rgba(0, 0, 0, 0.6)',
                zIndex: 0,
            }}
        >
            <Box
                textAlign="center"
                display="flex"
                flexDirection="column"
                alignItems="center"
                zIndex={1}
            >
                <Image
                    src={avatar}
                    alt="John Doe"
                    borderRadius="full"
                    boxSize="190px"
                    mb={4}
                    boxShadow="lg"
                />
                <Text fontSize="2xl" fontWeight="bold">Hello, I'm Adrian Yu</Text>
                <Text fontSize="lg" mt={2} mb={6}>A Passionate Developer with Little to no Time.</Text>
                <VStack spacing={4}>
                    <Button
                        colorScheme="teal"
                        size="lg"
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                    >
                        View Projects
                    </Button>
                    <Button
                        colorScheme="teal"
                        variant="outline"
                        size="lg"
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
};

export default Landing;
