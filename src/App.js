import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import theme from './theme';

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Header />
            <Landing />
            <Projects />
            <Contact />
        </ChakraProvider>
    );
};

export default App;
