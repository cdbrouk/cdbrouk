import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import MainResponsive from './MainResponsive';

export interface MainHeaderProps {}

const Block = styled.div`
  height: 72px;
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: white;
`;

const Inner = styled(MainResponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Home = styled.h1`
  font-size: 1.5rem;
`;

const RightItem = styled.h1`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

const MainHeader = (props: MainHeaderProps) => {
  return (
    <Block>
      <Inner>
        <Home>Home</Home>
        <Right>
          <Link
            to="#second"
            smooth
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <RightItem>Second</RightItem>
          </Link>
          <Link
            to="#third"
            smooth
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <RightItem>Third</RightItem>
          </Link>
        </Right>
      </Inner>
    </Block>
  );
};

export default MainHeader;
