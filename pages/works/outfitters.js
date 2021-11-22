import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react';

const Outfitters = () => (
  <Layout title="Outfitters">
    <Container>
      <Title>
        Superior firearms <Badge>September 2021</Badge>
      </Title>
      <P>
        Weapons store, equipment for it, self-defense equipment and more. I built its HTML coding.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://superior-firearms.ammoreadycloud.com/">
            https://superior-firearms.ammoreadycloud.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, JavaScript</span>
        </ListItem>
      </List>
      
      <WorkImage src="/images/outfitters.jpg" alt="Outfitters" />
    </Container>
  </Layout>
)

export default Outfitters