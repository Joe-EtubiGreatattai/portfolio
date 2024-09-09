import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Routes from './routes';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  );
}

export default App;
