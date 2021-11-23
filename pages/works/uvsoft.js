import { Container, Badge, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import React from 'react';

const UVsoft = () => (
  <Layout title="UVsoft">
    <Container>
      <Title>
        UVsoft <Badge>2021-</Badge>
      </Title>
      <Divider my={2} />
      <P>
        Phone dealer console. A software that is an expert in itself, maintains and displays full report of phones in stock and phones sold.
      </P>
      <Divider mt={6} />
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.uvsoft.co/">
            https://www.uvsoft.co/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Firebase, Razorpay</span>
        </ListItem>
      </List>
      
      <WorkImage src="/images/dealer.png" alt="UVsoft" />
      <WorkImage src="/images/works/works_console_01.png" alt="UVsoft" />
    </Container>
  </Layout>
)

export default UVsoft