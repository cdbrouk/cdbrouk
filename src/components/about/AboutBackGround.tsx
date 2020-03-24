import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../lib/styles/media';

const Background = styled.div`
  display: flex;
  height: 100vh;
  background-color: #909dc1;
`;

const InnerBackground = styled.div`
  display: flex;
  width: calc(100vw - 5rem);
  height: calc(100vh - 5rem);
  background-color: #3a6ee8;
  ${mediaQuery(768)} {
    width: 100vw;
    height: 812px;
  }
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 1;
  position: absolute;
`;

interface AboutBackGroundProps {
  children: React.ReactNode;
}

const AboutBackGround = ({ children }: AboutBackGroundProps) => {
  return (
    <Background>
      <Content>{children}</Content>
      <InnerBackground />
    </Background>
  );
};

export default AboutBackGround;
