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
`;

const GithubLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const IconText = styled.p`
  font-size: 1.3rem;
  color: black;
  font-weight: bold;
`;

const ContactTextBlock = () => {
  return (
    <Block>
      <Title>Thanks for visit me</Title>
      <Descript>Would you want contact me or know more about me ?</Descript>
      <GithubLink href="https://github.com/cdbrouk" target="_blank">
        <img
          src={optimizeImage(github32, 32)}
          alt="github"
          style={{ width: 32, height: 32, marginRight: 10 }}
        />
        <IconText>Github</IconText>
      </GithubLink>
      <IconText>cdbrouk@gmail.com</IconText>
    </Block>
  );
};

export default ContactTextBlock;
