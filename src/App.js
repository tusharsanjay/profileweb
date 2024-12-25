import React from "react";
import './App.css'
// import { Suspense, lazy } from "react";
import { Box } from "@chakra-ui/react";
import { Flex, Spinner, Text } from "@chakra-ui/react";
// const Home = lazy(import('./components/Home'))
import Home from "./components/Home";
function App() {
  return (
    <Box bgColor='#fff' >

      {/* <Suspense
        fallback={
          <Flex w='100%' h='100vh' justifyContent='center' alignItems='center'>
          <Text>
          <Spinner color='#000' />
          </Text>
          </Flex>
          }> */}
      <Home />
      {/* </Suspense> */}
    </Box>


  );
}

export default App;
