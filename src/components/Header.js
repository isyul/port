import React, { useState, useEffect } from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
            transition={{ duration: 0.5 }}
        >
            <Box as="header" bg="gray.900" color="white" py={4} position="fixed" width="100%" zIndex="1000">
                <Flex justify="space-between" align="center" maxW="1200px" mx="auto" px={4}>
                    <Box fontSize="xl">Adrian Yu</Box>
                    <Flex>
                        <ScrollLink to="projects" smooth={true} duration={500} style={{ margin: '0 10px', cursor: 'pointer' }}>
                            Projects
                        </ScrollLink>
                        <ScrollLink to="contact" smooth={true} duration={500} style={{ margin: '0 10px', cursor: 'pointer' }}>
                            Contact
                        </ScrollLink>
                        <Link href="https://github.com/RhdrnHuan" mx={2} style={{ margin: '0 10px' }}>GitHub</Link>
                        <Link href="https://www.linkedin.com/in/rich-adrian-huang-285078252/" mx={2} style={{ margin: '0 10px' }}>LinkedIn</Link>
                    </Flex>
                </Flex>
            </Box>
        </motion.div>
    );
};

export default Header;
