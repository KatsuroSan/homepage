import React from 'react';
import {
  Container, Heading, SimpleGrid, Divider
} from '@chakra-ui/react';
import { WorkGridItem } from '../components/grid-item';
import Section from '../components/section';
import Layout from '../components/layouts/article';

import thumbnailSaiha from '../public/images/saiha.png';
import thumbnailConsole from '../public/images/dealer.png';
import thumbnailOutfitters from '../public/images/outfitters.jpg';
import thumbnailPlacide from '../public/images/placide.jpg';
import thumbnailTsou from '../public/images/tsou.png';


const Works = () => {
  return (
    <Layout title={'Portfolio'}>
      <Container>
        <Heading as={'h3'} fontSize={20} mb={4}>
          Works
        </Heading>
    
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id={'saiha'} title={'Saiha dojo'} thumbnail={thumbnailSaiha}>
              Karate kyokushin-kan karate-do club placed in Brody, Ukraine
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id={'uvsoft'} title={'UVsoft dealer console'} thumbnail={thumbnailConsole}>
              Phone dealer console in India
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id={'tsou'} title={'Mykolaivska TSOU'} thumbnail={thumbnailTsou}>
              Ukrainian Defense Assistance Society
            </WorkGridItem>
          </Section>
        </SimpleGrid>
    
        
        <Section delay={0.2}>
          <Divider my={6} />
      
          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>
    
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id={'outfitters'} title={'Superior firearms'} thumbnail={thumbnailOutfitters}>
              Firearms shop in USA
            </WorkGridItem>
          </Section>
      
          <Section delay={0.3}>
            <WorkGridItem id={'placide'} title={'Placide'} thumbnail={thumbnailPlacide}>
              Tools magazine
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;