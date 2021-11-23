import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react';

const Saiha = () => (
  <Layout title="Saiha dojo">
    <Container>
      <Title >
        Saiha dojo <Badge>2021-</Badge>
      </Title>
      
      <Divider my={2} />
      <P>
        Karate kyokushin-kan karate-do club placed in Brody, Ukraine
      </P>
      <Divider mt={6} />
      
      <List ml={2} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://saiha-dojo.vercel.app/">
            https://saiha-dojo.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, React, Firebase, CommerceJS</span>
        </ListItem>
      </List>
      
      <WorkImage src="/images/saiha.png" alt="Saiha" />
      <WorkImage src="/images/works/works_saiha_01.png" alt="Saiha" />

    </Container>
  </Layout>
)

export default Saiha