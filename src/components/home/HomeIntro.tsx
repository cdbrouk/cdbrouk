import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 660px;
  height: 270px;
  margin-left: 2.5rem;
`;

const Name = styled.text`
  font-weight: 500;
  font-size: 4.5rem;
`;

const Intro = styled.text`
  font-weight: 100;
  font-size: 3rem;
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
