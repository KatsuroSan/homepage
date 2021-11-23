import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';


export const BioSection = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: right;
  border-bottom: 1px solid #ffffff3b;
  padding: 5px 0;
`;

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  text-align: left;
`;