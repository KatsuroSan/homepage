import Link from 'next/link'
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

const LogoBox = styled.span`
font-weight:bold;
font-sizeL 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

`

const Logo = () => {
  const imgPath = `/images/logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href={'/'}>
      <a className={'logo'}>
        <LogoBox>
          <Image src={imgPath} width={20} height={20} alt={'logo'} />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily={'M PLUS Rounded 1c'}
            fontWeight={'bold'}
            ml={3}
          >
            Oleh Shutiak
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
