import NextLink from 'next/link';
import { Box, Button, Container, Heading, Image, useColorModeValue, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import { IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5';
import { List, ListItem } from '@chakra-ui/layout';


const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius='lg' bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align='center'>
          Hello 👋, I&apos;m a web developer based in Ukraine!
        </Box>
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as={'h2'} variant={'page-title'}>
              Oleh Shutiak
            </Heading>
            <p>Passionate developer ( Web / desktop / mobile )</p>
          </Box>
          <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} textAlign='center'>
            <Image borderColor='whiteAlpha.800' borderWidth={2} borderStyle='solid'
                   maxWidth='100px' display='inline-block' borderRadius='full'
                   src='https://www.upwork.com/profile-portraits/c1LPYCEd33zqi3Y15ga2f034cvAsf3fK20eI92fw9hiqfKG9vhzQySfjyECHKaiN7J'
                   alt='Profile Image'
            />
          </Box>
        </Box>
        
        
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
            Oleh is a beginner full-stack developer and web developer with experience from Ukraine who is passionate about creating the services /
            applications / things he wants. He has a knack for everything running products, from planning and designing to solving real problems with
            code. When he&apos;s offline, he likes to spend time with the family. He now lives off his {'  '}
            <NextLink href='/works'>
              <Link>
                code
              </Link>
            </NextLink>
            .
          </Paragraph>
          <Box align={'center'} my={4}>
            <NextLink href={'/works'}>
              <Button rightIcon={<ChevronRightIcon/>} colorScheme={'purple'}>
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        
        <Section delay={0.2}>
          <Heading
            as={'h3'}
            variant={'section-title'}
          >
            Bio
          </Heading>
          <BioSection>
            <BioYear>1996</BioYear>
            Born in Nova Odesa, Ukraine.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Completed the Master&apos;s Program in the Odesa State University of Internal Affairs and worked at speciality.
          </BioSection>
          <BioSection>
            <BioYear>Dec 2020</BioYear>
            Started to learn development
          </BioSection>
          <BioSection>
            <BioYear>June 2021 at present</BioYear>
            Works at Highware company
          </BioSection>
        </Section>
        
        <Section delay={0.3}>
          <Heading
            as={'h3'}
            variant={'section-title'}
          >
            I ♥
          </Heading>
          <Paragraph>
            Iryna, Coding, Music
          </Paragraph>
        </Section>
        
        <Section delay={0.3}>
          <Heading as={'h3'} variant={'section-title'}>
            Social links
          </Heading>
          
          <List>
            <ListItem>
              <Link href={'https://github.com/KatsuroSan'} target={'_blank'}>
                <Button variant={'ghost'}
                        leftIcon={<Icon as={IoLogoGithub}/>}
                        colorScheme={'purple'}>
                  @KatsuroSan
                </Button>
              </Link>
            </ListItem>
            
            <ListItem>
              <Link href={'https://instagram.com/_shutiak'} target={'_blank'}>
                <Button variant={'ghost'}
                        leftIcon={<Icon as={IoLogoInstagram}/>}
                        colorScheme={'purple'}>
                  @_shutiak
                </Button>
              </Link>
            </ListItem>
            
            <ListItem>
              <Link href={'https://www.facebook.com/shutyak'} target={'_blank'}>
                <Button variant={'ghost'}
                        leftIcon={<Icon as={IoLogoFacebook}/>}
                        colorScheme={'purple'}>
                  @shutyak
                </Button>
              </Link>
            </ListItem>
          
          
          </List>
        
        </Section>
      </Container>
    </Layout>
  );
};
export default Page;