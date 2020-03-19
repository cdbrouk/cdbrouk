import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
`;

const Name = styled.p`
  font-weight: 500;
  font-size: 2rem;
`;

const Intro = styled.p`
  font-weight: 100;
  font-size: 1.4rem;
`;

const HomeIntro = () => {
  return (
    <Block>
      <Name>CDBROUK</Name>
      <Intro>I&apos;m Web Developer in Korea</Intro>
      <Intro>2019.05 ~</Intro>
    </Block>
  );
};

export default HomeIntro;
