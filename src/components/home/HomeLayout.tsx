import React from 'react';
import styled from 'styled-components';
import { HomePageProps } from '../../pages/home/HomePage';
import MainResponsive from '../main/MainResponsive';

export interface HomeLayoutProps extends HomePageProps {
  children: React.ReactNode;
}

const Block = styled.div``;

const Inner = styled(MainResponsive)`
  display: flex;
  height: calc(100vh - 6rem);
  justify-content: center;
  align-items: center;
`;

const HomeLayout = ({ children, id }: HomeLayoutProps) => {
  return (
    <Block id={id}>
      <Inner>{children}</Inner>
    </Block>
  );
};

export default HomeLayout;
