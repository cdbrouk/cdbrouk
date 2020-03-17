import React from 'react';
import styled from 'styled-components';

export interface HomeLayoutProps {
  children: React.ReactNode;
}

const Block = styled.div`
  display: flex;
  margin-top: 4rem;
`;

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return <Block>{children}</Block>;
};

export default HomeLayout;
