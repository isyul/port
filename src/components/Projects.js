import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Image, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Inventory, Attendance, Converter, Rpi, Pos, Classifier  } from '../images';

const placeholderProjects = [
    {
        id: 1,
        name: 'Inventory Management System',
        description: 'A comprehensive system for managing inventory levels, tracking stock movements, and optimizing storage capacity.',
        image: Inventory,
        link: 'https://www.shopify.com/ph'
    },
    {
        id: 2,
        name: 'Fingerprint Attendance Tracker',
        description: 'A biometric attendance tracking system that uses fingerprint recognition to record employee attendance and leave.',
        image: Attendance,
        link: 'https://gusto.com/'
    },
    {
        id: 3,
        name: 'WebP Converter Application',
        description: 'A utility application that converts images to the WebP format, reducing file size while maintaining image quality.',
        image: Converter,
        link: 'https://cloudconvert.com'
    },
    {
        id: 4,
        name: 'Raspberry Pi Based Hosting Platform',
        description: 'A self-hosted platform built on Raspberry Pi, providing a low-cost and energy-efficient solution for hosting websites and applications.',
        image: Rpi,
        link: 'https://www.raspberrypi.com/'
    },
    {
        id: 5,
        name: 'POS System',
        description: 'A point-of-sale system designed for retail businesses, featuring inventory management, sales tracking, and payment processing.',
        image: Pos,
        link: 'https://www.odoo.com/app/point-of-sale-shop?network=o&utm_source=bing&utm_medium=cpc&utm_campaign=PH-EN-POS&utm_term=posutm_gclid=&msclkid=3c7af9c1902d1e9a81599e7a91e0a9f6'
    },
    {
        id: 6,
        name: 'Image Classifier',
        description: 'A machine learning-based image classification system that categorizes images into predefined classes using machine learning algorithms.',
        image: Classifier,
        link: 'https://classifier.appinventor.mit.edu/'
    },
];

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Simulating fetching projects from an API
        setProjects(placeholderProjects);
    }, []);

    return (
        <Box as="section" bg="gray.700" color="white" py={8} id="projects">
            <Box maxW="1200px" mx="auto" px={4}>
                <Text fontSize="2xl" mb={4}>Featured Projects</Text>
                <SimpleGrid columns={[1, 2]} spacing={8}>
                    {projects.map(project => (
                        <LinkBox
                            key={project.id}
                            bg="gray.800"
                            p={4}
                            borderRadius="md"
                            _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s' }}
                        >
                            <LinkOverlay href={project.link} isExternal>
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    mb={4}
                                    width="800px"
                                    height="200px"
                                    objectFit="cover"
                                    borderRadius="md"
                                />
                                <Text fontSize="xl">{project.name}</Text>
                                <Text mt={2}>{project.description}</Text>
                            </LinkOverlay>
                        </LinkBox>
                    ))}
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default Projects;
