import { extendTheme } from '@chakra-ui/react';

const colors = {
    gray: {
        700: '#2D3748',
        800: '#1A202C',
        900: '#171923',
    },
    blue: {
        500: '#3182CE',
    },
};

const theme = extendTheme({ colors });

export default theme;
