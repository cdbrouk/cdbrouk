import React from 'react';
import styled from 'styled-components';
import MainResponsive from '../main/MainResponsive';
import media from '../../lib/styles/media';

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
  ${media.small} {
    height: 812px;
  }
`;

const PageLayout = ({ children, id }: PageLayoutProps) => {
  return (
    <Block id={id}>
      <Inner>{children}</Inner>
    </Block>
  );
};

export default PageLayout;
