import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Text, useToast } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const Contact = () => {
    const toast = useToast();

    return (
        <Box as="section" bg="gray.800" color="white" py={8} id="contact">
            <Box maxW="600px" mx="auto" px={4}>
                <Text fontSize="2xl" mb={4}>Contact Me</Text>
                <Formik
                    initialValues={{ name: '', email: '', message: '' }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Name is required'),
                        email: Yup.string().email('Invalid email address').required('Email is required'),
                        message: Yup.string().required('Message is required'),
                    })}
                    onSubmit={(values, actions) => {
                        axios.post('/api/contact', values)
                            .then(response => {
                                toast({
                                    title: "Message sent.",
                                    description: "We've received your message.",
                                    status: "success",
                                    duration: 9000,
                                    isClosable: true,
                                });
                                actions.resetForm();
                            })
                            .catch(error => {
                                toast({
                                    title: "An error occurred.",
                                    description: "Unable to send message.",
                                    status: "error",
                                    duration: 9000,
                                    isClosable: true,
                                });
                            })
                            .finally(() => actions.setSubmitting(false));
                    }}
                >
                    {({ errors, touched, isSubmitting }) => (
                        <Form>
                            <FormControl mb={4} isInvalid={errors.name && touched.name}>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Field as={Input} id="name" name="name" placeholder="Your Name" />
                            </FormControl>
                            <FormControl mb={4} isInvalid={errors.email && touched.email}>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <Field as={Input} id="email" name="email" type="email" placeholder="Your Email" />
                            </FormControl>
                            <FormControl mb={4} isInvalid={errors.message && touched.message}>
                                <FormLabel htmlFor="message">Message</FormLabel>
                                <Field as={Textarea} id="message" name="message" placeholder="Your Message" />
                            </FormControl>
                            <Button type="submit" isLoading={isSubmitting} colorScheme="blue">Send</Button>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Box>
    );
};

export default Contact;
