import React from 'react';
import styled from 'styled-components';
import MainResponsive from '../main/MainResponsive';

interface PageLayoutProps {
  children: React.ReactNode;
  id: string;
}

const Block = styled.div``;

const Inner = styled(MainResponsive)`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const PageLayout = ({ children, id }: PageLayoutProps) => {
  return (
    <Block id={id}>
      <Inner>{children}</Inner>
    </Block>
  );
};

export default PageLayout;
