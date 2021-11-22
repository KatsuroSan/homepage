import Head from 'next/head';
import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import NavBar from '../Navbar';


const Main = ( {children, router} ) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Oleh's homepage" />
        <meta name="author" content="Oleh Shutiak" />
        <meta name="author" content="KatsuroSan" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KatsuroSan" />
        <meta name="twitter:creator" content="@KatsuroSan" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Oleh Shutiak's Homepage" />
        <meta property="og:type" content="website" />
        <title>Oleh Shutiak - Homepage</title>
      </Head>
      
      <NavBar path={router.asPath}/>
      
      <Container maxW='container.md' pt={20}>
        {children}
      </Container>
      <Container>
  
        <Box align="center" opacity={0.4} fontSize="sm">
          &copy; {new Date().getFullYear()} Oleh Shutiak. All Rights Reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Main;