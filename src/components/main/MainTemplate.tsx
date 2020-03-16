import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Background = createGlobalStyle``;

const Block = styled.div``;

export interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Background />
      <Block>{children}</Block>
    </>
  );
};

export default MainTemplate;
