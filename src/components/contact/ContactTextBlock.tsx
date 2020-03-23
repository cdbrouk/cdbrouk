import React from 'react';
import styled from 'styled-components';
import { github32 } from '../../static/images';
import optimizeImage from '../../lib/optimizeImage';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 2.5rem;
`;

const Descript = styled.p`
  font-size: 1.3rem;
  color: white;
  font-weight: 100;
  margin-bottom: 5rem;
`;

const Link = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 2rem;
`;

const IconText = styled.text`
  font-size: 1.3rem;
  color: black;
  font-weight: bold;
`;

const ContactTextBlock = () => {
  return (
    <Block>
      <Title>Thanks for visit me</Title>
      <Descript>Would you want contact me or know more about me ?</Descript>
      <Link href="https://github.com/cdbrouk" target="_blank">
        <IconText>Github</IconText>
      </Link>
      <Link href="https://brouk-devlog.netlify.com/" target="_blank">
        <IconText>Brouk's devlog</IconText>
      </Link>
      <IconText>cdbrouk@gmail.com</IconText>
    </Block>
  );
};

export default ContactTextBlock;
