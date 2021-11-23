import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
import React from 'react';

const Outfitters = () => (
  <Layout title="TSOU">
    <Container>
      <Title>
        Mykolaivska TSOU <Badge>March 2021</Badge>
      </Title>
      <Divider my={2} />
      <P>
        TSOU is a voluntary, defense-patriotic and sports-technical public organization that complies with this and other laws of Ukraine and its
        Charter of activity of the state in the field of military-patriotic and physical education of citizens of Ukraine, training of citizens of
        Ukraine to defend the Fatherland, including training of conscripts. for the Armed Forces of Ukraine and other military formations formed in
        accordance with the laws of Ukraine in military-technical specialties, development and improvement of technical, applied and aviation sports
      </P>
      <Divider mt={6} />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://myk-tsou.com/">
            https://myk-tsou.com/ <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, PHP, WordPress</span>
        </ListItem>
      </List>
      
      <WorkImage src="/images/tsou.png" alt="TSOU"/>
      <WorkImage src="/images/works/works_tsou_01.png" alt="TSOU" />

    </Container>
  </Layout>
);

export default Outfitters;